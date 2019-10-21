import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//Component Imports
import CreateHowTo from "./Components/create-how-to-page/CreateHowTo";
import PrivateRoute from "./PrivateRoute";
import SignIn from "./Components/Sign-In-Page/SignIn";
import Dashboard from "./Components/Dashboard-page/Dashboard";
import { GuidesProvider } from "./contexts";

function App() {
  return (
    <div className="App">
      <h1> How To </h1>
      <Route exact path="/" component={SignIn} />

      {/* <Route exact path="/" component={HomePage} />

      <Route path="/createAccount" render={() => <CreateAccount />} />

      <Route path="/signIn" render={() => <SignIn />} />

      <Route path="/myAccount" render={() => <MyAccount />} />

      <Route path="/createHowto" render={() => <CreateHowTo />} />

      <Route path="/results" render={() => <SearchResults />} />

      <Route path="/guide" render={() => <HowToGuide />} />

      <Route path="newsfeed" render={() => <NewsFeed />} /> 

  <Route path="/dashboard" render={() => <Dashboard />} /> */}
      <GuidesProvider>
        <PrivateRoute path="/guides" component={CreateHowTo} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </GuidesProvider>
    </div>
  );
}

export default App;
