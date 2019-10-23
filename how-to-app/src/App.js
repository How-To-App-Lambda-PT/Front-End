import React from "react";
import "./App.css";

import CreateAccount from './Components/CreateAccount/CreateAccount.js';

import { Route } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

//Component Imports
// import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";

// import PrivateRoute from "./Components/Routes/PrivateRoute"

// import PrivateRoute from "./PrivateRoute"
// import Login from './Components/Login';
// import User from './Components/User';

// import { Route } from "react-router-dom";

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
import PrivateRoute from "./PrivateRoute";
import SignIn from "./Components/Sign-In-Page/SignIn";
import Dashboard from "./Components/Dashboard-page/Dashboard";
import { GuidesProvider } from "./contexts";
import SearchResults from './Components/SearchResults/SearchResults';
<<<<<<< HEAD
import UserPageNewsfeed from './Components/UserPageNewsfeed/UserPageNewsfeed';
=======
import HowToGuide from './Components/HowToGuide/HowToGuide';
import UserPageNewsfeed from './Components/UserPageNewsfeed/UserPageNewsfeed'
>>>>>>> 48bbeb88136b7a343549b92ee9a9ad26830b9ce3


function App() {
  return (
    <div className="App">
      <Link to='/'>
        <h1>How To</h1>
      </Link>
      <Route exact path="/" component={SignIn} />
      <Route path="/createAccount" render={() => <CreateAccount />} />

      {/* <Route exact path="/" component={HomePage} />

      <Route path="/createAccount" render={() => <CreateAccount />} />

      <Route path="/myAccount" render={() => <MyAccount />} />

      <Route path="newsfeed" render={() => <NewsFeed />} /> */}
      <GuidesProvider>
        <PrivateRoute path="/createpost" component={CreateHowTo} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/searchresults" component={SearchResults} />
        <PrivateRoute path='/userpagenewsfeed' component={UserPageNewsfeed} />
        <PrivateRoute path="/guides/:id" component={HowToGuide} />
      </GuidesProvider>
    </div>
  );
}

export default App;
