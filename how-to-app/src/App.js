import React from "react";
import "./App.css";
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

function App() {
  return (
    <div className="App">
      <h1> How To </h1>
      <Route exact path='/' component={Login} />

      {/* <Route exact path="/" component={HomePage} />

      <Route path="/createAccount" render={() => <CreateAccount />} />

      <Route path="/signIn" render={() => <SignIn />} />

      <Route path="/myAccount" render={() => <MyAccount />} />

      <Route path="/createHowto" render={() => <CreateHowTo />} />

      <Route path="/results" render={() => <SearchResults />} />

      <Route path="/guide" render={() => <HowToGuide />} />

      <Route path="newsfeed" render={() => <NewsFeed />} /> 

  <Route path="/dashboard" render={() => <Dashboard />} /> */}

      <PrivateRoute path="/guides" component={CreateHowTo} />
      <PrivateRoute path="/user" component={User} />
    </div>
  );
}

export default App;
