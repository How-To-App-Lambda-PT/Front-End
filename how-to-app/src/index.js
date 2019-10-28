import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { UserProvider, GuidesProvider } from "./contexts";

ReactDOM.render(
  <UserProvider>
    <GuidesProvider>
      <Router>
        <App />
      </Router>
    </GuidesProvider>
  </UserProvider>,
  document.getElementById("root")
);
