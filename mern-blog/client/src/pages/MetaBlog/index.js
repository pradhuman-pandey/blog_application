import Header from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import HomePage from "../../components/homepage/index";
import HomeSlider from "../../components/homeSlider/index";
import CareerSection from "../../components/careerSection/index";
import PostComponent from "../../components/postcomponent/index";
import FilteredPostSection from "../../components/filterPostSection/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <HomeSlider />
      <HomePage />
      <PostComponent />
      <CareerSection />
      <FilteredPostSection />
      <Footer />
    </div>
  );
}
