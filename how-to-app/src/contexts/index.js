import React, { createContext, useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const UserContext = createContext();

// const currentUser = JSON.parse(localStorage.user) 

export const UserProvider = props => {
  const [user, setUser] = useState({});
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
  console.log('GuidesProvider:', guides)
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
   }, [])


  return (
    <GuidesContext.Provider value={[guides, setGuides]}>
      {props.children}
    </GuidesContext.Provider>
  );
};
