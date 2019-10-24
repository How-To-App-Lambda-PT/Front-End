import React, { useContext } from "react";
import { UserContext } from "../../contexts/index";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  const [user] = useContext(UserContext);

  return (
    <>
      <div>User Information</div>
      <Link to='/searchresults'>Search How To's</Link>
      <Link to='/createpost'>Create Post</Link>
      <Link to='/UserpageNewsfeed'>User Page Newsfeed</Link>
    </>
  );
};

export default Dashboard;
