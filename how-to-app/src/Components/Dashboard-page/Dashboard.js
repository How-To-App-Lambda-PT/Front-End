import React, { useContext, useState } from "react";
import { UserContext, GuidesContext } from "../../contexts/index";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Table, Image } from "semantic-ui-react";
import SearchField from "../SearchResults/SearchField";
import HowToCard from "./HowToCard";

const Dashboard = props => {
  const [user] = useContext(UserContext);
  const localUser = JSON.parse(localStorage.user);

  const [guides] = useContext(GuidesContext);
  console.log(user);
  console.log(guides);

  const [myHowTo, setMyHowTo] = useState(guides);

  // if(user.user_id===guides.id)

  console.log(guides);


  if (guides == undefined) {
    return <h2>loading...</h2>;
  } else {
    return (
      <Table>
        <Table.Row>
          <Table.Cell collapsing={true}>
            <Image
              className="account-avi"
              rounded={true}
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              size="small"
              avatar={true}
            />
            {user.username}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="left">
            <span>Find a How-to</span>
            {/* </Table.Cell>
       <Table.Cell collapsing={true} textAlign='left'> */}
            <SearchField history={props.history} />
          </Table.Cell>
          <Table.Cell collapsing={true} textAlign="right">
            <Link to="/">Upgrade Account</Link>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Link to="/createpost">
            <button className="myacc-create-btn">Create a new How-to</button>
          </Link>
        </Table.Row>
        <Table.Row>
          <Table>
            <Table.Row>
              <Table.Cell>
                <h3>My How-to</h3>
              </Table.Cell>
              <Table.Cell>
                <h3>Favorite</h3>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                {guides.map(guide => {
                  if (guide.username == user.username) {
                    return <HowToCard guide={guide} type={"account"} />;
                  }
                })}
              </Table.Cell>
              <Table.Cell>
                {guides.map(guide => {
                  if (guide.username == user.username) {
                    return <HowToCard guide={guide} type={"account"} />;
                  }
                })}
              </Table.Cell>
            </Table.Row>
          </Table>
        </Table.Row>
      </Table>
    );
  }
};

export default Dashboard;
