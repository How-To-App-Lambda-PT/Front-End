import React, { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

export const UserProvider = props => {
  const currentUser = localStorage.user
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
  const [guides, setGuides] = useState([])
  const [editing, setEditing] = useState(false)
  console.log('GuidesProvider: guides=', guides, 'editing=', editing)

  return (
    <GuidesContext.Provider value={[guides, setGuides, editing, setEditing]}>
      {props.children}
    </GuidesContext.Provider>
  );
};


