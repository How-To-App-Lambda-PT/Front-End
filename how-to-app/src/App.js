import React from "react";
import "./App.css";
import { Route }  from "react-router-dom";

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
import PrivateRoute from "./Components/Routes/PrivateRoute"

function App() {
  return (
    <div className="App">
      <h1> How To </h1>

      {/* <Route exact path="/" component={HomePage} />

      <Route path="/account/create" render={() => <CreateAccount />} />

      <Route path="/signIn" render={() => <SignIn />} />

      <Route path="/myAccount" render={() => <MyAccount />} />

      <Route path="/createHowto" render={() => <CreateHowTo />} />

      <Route path="results" render={() => <SearchResults />} />

      <Route path="guide" render={() => <HowToGuide />} />

      <Route path="newsfeed" render={() => <NewsFeed />} /> */}

      <Route path="/guides" component={CreateHowTo} />
    </div>
  );
}

export default App;
