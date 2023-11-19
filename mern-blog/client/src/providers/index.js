import {createContext, useState} from "react";
import useUser from '../hooks/useUser';
export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [loading,userInfo] = useUser();
  if(loading) return <div>Loading...</div>
  return (
    <UserContext.Provider value={{userInfo}}>
      {children}
    </UserContext.Provider>
  );
}
