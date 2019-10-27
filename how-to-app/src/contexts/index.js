import React, { createContext, useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const currentUser = localStorage.user

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState(currentUser || {});
  console.log('UserProvider: user=', user)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const GuidesContext = createContext();

export const GuidesProvider = props => {
  const [guides, setGuides] = useState()

  return (
    <GuidesContext.Provider value={[guides, setGuides]}>
      {props.children}
    </GuidesContext.Provider>
  );
};
