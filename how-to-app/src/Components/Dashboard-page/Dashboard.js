import React, { useContext } from "react";
import { UserContext } from "../../contexts/index";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Segment } from "semantic-ui-react";
import SearchField from "../SearchResults/SearchField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";

const Dashboard = props => {
  const [user] = useContext(UserContext);
  const localUser = JSON.parse(localStorage.user);

  // return (
  //   <>
  //     <div>User Information</div>
  //     <Link to='/searchresults'>Search How To's</Link>
  //     <Link to='/createpost'>Create Post</Link>
  //     <Link to='/UserpageNewsfeed'>User Page Newsfeed</Link>
  //   </>
  // );

  return (
    <Container>
      <div className="profile-div">
        <img
          className="account-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQJR6BqqLi6y004j182y-DQqexGNssQn5AHlZ7DUBXpYQe3H7P"
        />
        <h2 className="user-name">{localUser.username}</h2>
      </div>
      <div className="cont-cont">
        <div className="badges-cont">
          <h2 className="badges-earned">Badges Earned</h2>
          <div className="badges-container">
            <div className="yellow-one"></div>
            <div className="blue-one"></div>
            <div className="purple-one"></div>
            <div className="red-one"></div>
          </div>
          <div className="social-account"></div>
        </div>
      </div>
      <div className="search-field-dash">
        <SearchField
          history={props.history}
          header={<h2 className="find-how-to">Find a How-To</h2>}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>

      <button className="create-guide-button">
        <Link to="/createpost" className="link-create-guide">
          Create a new How-To
        </Link>
      </button>

      <Container>My How-To's and Favorites</Container>
    </Container>
  );
};

export default Dashboard;
