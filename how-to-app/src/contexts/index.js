import React, { createContext, useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState(localStorage.user || {});


  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const GuidesContext = createContext();

export const GuidesProvider = props => {
  const [guides, setGuides] = useState();

  useEffect(() => {
    return !localStorage.user ? setGuides([])
      : axiosWithAuth("get", `https://bw-how-to.herokuapp.com/guides`)
         .then(res => {
           console.log("GuidesProvider: GET:", res.data);
           setGuides(res.data);
         })
         .catch(err => console.log("contexts: index: GuidesProvider: GET:", err));
     }, []);


  return (
    <GuidesContext.Provider value={[guides, setGuides]}>
      {props.children}
    </GuidesContext.Provider>
  );
};
