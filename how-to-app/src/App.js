import React from "react";
import "./App.css";
<<<<<<< HEAD

import CreateAccount from './Components/CreateAccount.js';

import { Route } from "react-router-dom";
=======
import { Route }  from "react-router-dom";

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
import PrivateRoute from "./Components/Routes/PrivateRoute"
>>>>>>> aecba83307f8cf92310550b9823096bcaf68f6df

function App() {
  return (
    <div className="App">
      <h1> How To </h1>

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
    </div>
  );
}

export default App;
