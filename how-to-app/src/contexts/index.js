import React, { createContext, useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const UserContext = createContext();

const currentUser = {} 

export const UserProvider = props => {
  const [user, setUser] = useState(JSON.parse(localStorage.user) || {});
  console.log('UserProvider: user=', user)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const GuidesContext = createContext();

export const GuidesProvider = props => {
  const [guides, setGuides] = useState();
  
  function fetchGuides() {
      axiosWithAuth("get", `https://bw-how-to.herokuapp.com/guides`)
         .then(res => {
           console.log("GuidesProvider: GET:", res.data);
           setGuides(res.data);
           localStorage.setItem('guides', JSON.stringify(res.data))
         })
         .catch(err => console.log("contexts: index: GuidesProvider: GET:", err));
  }

  useEffect(() => {
    if (localStorage.user) {
      
      fetchGuides()
    }
   }, [currentUser])


  return (
    <GuidesContext.Provider value={[guides, setGuides]}>
      {props.children}
    </GuidesContext.Provider>
  );
};
