import React from "react";
import "./App.css";

import CreateAccount from './Components/CreateAccount.js';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> How To </h1>

      <Route exact path="/" component={HomePage} />

      <Route path="/account/create" render={() => <CreateAccount />} />

      <Route path="/signIn" render={() => <SignIn />} />

      <Route path="/myAccount" render={() => <MyAccount />} />

      <Route path="/createHowto" render={() => <CreateHowTo />} />

      <Route path="results" render={() => <SearchResults />} />

      <Route path="guide" render={() => <HowToGuide />} />

      <Route path="newsfeed" render={() => <NewsFeed />} />
    </div>
  );
}

export default App;
