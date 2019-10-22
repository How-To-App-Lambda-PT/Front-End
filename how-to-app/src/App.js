import React from "react";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD

import CreateAccount from './Components/CreateAccount.js';

import { Route } from "react-router-dom";
=======
import { Route }  from "react-router-dom";

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
<<<<<<< HEAD
import PrivateRoute from "./Components/Routes/PrivateRoute"
>>>>>>> aecba83307f8cf92310550b9823096bcaf68f6df
=======
import PrivateRoute from "./PrivateRoute"
import Login from './Components/Login';
import User from './Components/User';
>>>>>>> a79dbeedaf91923e83389e6ad763c9ade9c07ab9
=======
import { Route } from "react-router-dom";

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
import PrivateRoute from "./PrivateRoute";
import SignIn from "./Components/Sign-In-Page/SignIn";
import Dashboard from "./Components/Dashboard-page/Dashboard";
import { GuidesProvider } from "./contexts";
import SearchResults from './Components/SearchResults/SearchResults';
<<<<<<< HEAD
>>>>>>> eb656dbe27896b962e8b1be68ba98a01de5a590d
=======
import UserPageNewsfeed from './Components/UserPageNewsfeed/UserPageNewsfeed'
>>>>>>> 9f9c0145000769b1a2fd001ae309e771322a8c5e

function App() {
  return (
    <div className="App">
      <h1> </h1>
      <Route exact path="/" component={SignIn} />

      {/* <Route exact path="/" component={HomePage} />

      <Route path="/createAccount" render={() => <CreateAccount />} />

      <Route path="/signIn" render={() => <SignIn />} />

      <Route path="/myAccount" render={() => <MyAccount />} />

      <Route path="/createHowto" render={() => <CreateHowTo />} />

      <Route path="/guide" render={() => <HowToGuide />} />

      <Route path="newsfeed" render={() => <NewsFeed />} /> */}
      <GuidesProvider>
        <PrivateRoute path="/createpost" component={CreateHowTo} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/searchresults" component={SearchResults} />
        <PrivateRoute path='/userpagenewsfeed' component={UserPageNewsfeed} />
      </GuidesProvider>
    </div>
  );
}

export default App;
