const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const path = require("path");

const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w345wegw345werjktjwertkj";

app.use(cors({ credentials: true, origin: "http://localhost:4000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  console.log(userDoc);
  const passOk = bcrypt.compareSync(password, userDoc?.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        id: userDoc._id,
        username,
        token,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", async (req, res) => {
  const token = req.header('Authorization').replace('TOKEN ', '');
  console.log(token);
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.header("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
 const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
    const { title, summary, content, userId } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      likes: 0,
      views:0,
      author: userId,
    });
    res.json(postDoc);
});

app.put("/post", uploadMiddleware.single("file"), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    console.log(originalname, path, req.file);
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const token = req.header('Authorization').replace('TOKEN ', '');
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("you are not the author");
    }
    await postDoc.update({
      title,
      summary,
      content,
      cover: newPath ? newPath : postDoc.cover,
    });

    res.json(postDoc);
  });
});

app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

app.post("/post/:id/likes", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      res.status(400).json("Post Not Found");
    }

    post.likes += 1;
    await post.save();
    res.status(200).json("success");
  } catch (error) {
    res.status(400).json("Post Not Found");
  }
});

app.post("/post/:id/views", async (req,res)=>{
   const {id} = req.params;
   try {
       const post = Post.findById(id);
       if(!post){
        res.status(400).json("Post Not Found");
       }
       post.views+=1;
       await post.save();
       res.status(200).json("success");
   } catch (error) {
    res.status(400).json("Post Not Found");
   }
})

app.get("/trendy", async (req, res) => {
  try {
    const allposts = await Post.findOne().sort({ likes: -1 });

    if (!mostLikedPost) {
      return res.status(404).json({ message: "No posts found" });
    }

    res.status(200).json(mostLikedPost);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

app.get("/techBlog", async (req, res) => {
  try {
    const filePath = await path.join(__dirname, "data.json");
    const jsonData = await fs.readFileSync(filePath, "utf8");
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.get("/api/test", (req, res) => {
  // mongoose.connect(process.env.MONGO_URL);
  res.json("test ok");
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/blog")
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(4000, () => {
      console.log(`Node API app is running on port 4000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
