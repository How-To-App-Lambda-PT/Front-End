import React, { useContext } from "react";
import { UserContext } from "../../contexts/index";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  const [user] = useContext(UserContext);

  return (
    <>
      <div>User Information</div>
      <Link to='/searchresults'>Search How To's</Link>
    </>
  );
};

export default Dashboard;
