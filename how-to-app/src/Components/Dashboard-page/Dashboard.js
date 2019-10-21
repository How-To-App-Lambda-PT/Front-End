import React, { useContext } from "react";
import { UserContext } from "../../contexts/index";
import HowToCardList from "./HowToCardList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  const [user] = useContext(UserContext);

  console.log("User component:", user);

  return (
    <>
      <div>User Information</div>
      <Link to='/searchresults'>Search How To's</Link>
    </>
  );
};

export default Dashboard;
