import React, { useContext } from "react";
import { UserContext } from "../../contexts/index";
import HowToCardList from "./HowToCardList";

const Dashboard = () => {
  const [user] = useContext(UserContext);

  console.log("User component:", user);

  return (
    <>
      <div>User</div>
      <HowToCardList />
    </>
  );
};

export default Dashboard;
