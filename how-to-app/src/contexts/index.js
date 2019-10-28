import React, { createContext, useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


export const UserContext = createContext();

export const UserProvider = props => {
  const currentUser = localStorage.user
  const [user, setUser] = useState(currentUser || {});
  console.log('UserProvider: JSON.parse(user)=', user)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const GuidesContext = createContext();

export const GuidesProvider = props => {
  const [guides, setGuides] = useState([])
  console.log('GuidesProvider: guides=', guides)

  function fetchGuides() {
    return (
      axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides`)
        .then(res => setGuides(res.data))
        .catch(err => console.log('GuidesProvider: GET: err=', err))
    )
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


