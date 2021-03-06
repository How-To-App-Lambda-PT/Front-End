import React from "react";
import "./App.css";

import CreateAccount from './Components/CreateAccount/CreateAccount.js';

import { Route } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
import PrivateRoute from "./PrivateRoute";
import SignIn from "./Components/Sign-In-Page/SignIn";
import Dashboard from "./Components/Dashboard-page/Dashboard";
import SearchResults from './Components/SearchResults/SearchResults';
import HowToGuide from './Components/HowToGuide/HowToGuide';
import UserPageNewsfeed from './Components/UserPageNewsfeed/UserPageNewsfeed'
import Header from "./Components/Header";
import EditHowTo from './Components/EditHowTo/EditHowTo';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={SignIn} />
      <Route path="/createAccount" render={props => <CreateAccount {...props} history={props.history} />} />
      <PrivateRoute path="/createpost" component={CreateHowTo} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/searchresults" component={SearchResults} />
      <PrivateRoute path='/userpagenewsfeed' component={UserPageNewsfeed} />
      <PrivateRoute exact path="/guides/:id" component={HowToGuide} />
      <PrivateRoute path="/editguide/:id" component={EditHowTo} />
    </div>
  );
}

export default App;
