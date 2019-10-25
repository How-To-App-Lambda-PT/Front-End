import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="login-header">
      <Link to="/">
        <h4 className="login-logo">How-To</h4>
      </Link>
    </header>
  );
}
