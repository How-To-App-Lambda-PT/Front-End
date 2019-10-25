import React, { useContext } from "react";
import { UserContext } from "../../contexts/index";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Segment } from "semantic-ui-react";
import SearchField from '../SearchResults/SearchField';

const Dashboard = props => {
  const [user] = useContext(UserContext);
  const localUser = JSON.parse(localStorage.user)

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
      <Container>
        {localUser.username}
      </Container>
      <Segment>
        Badges and social links
      </Segment>
      <Container>
        <SearchField history={props.history}/>
      </Container>
      <Container>
        My How-To's and Favorites
      </Container>
      
      <Link to='/createpost'> Create Guide</Link>
    </Container>
  )
};

export default Dashboard;
