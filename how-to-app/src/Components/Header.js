import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to='/userpagenewsfeed'>
    <header className="login-header">
      <h4 className="login-logo">How-To</h4>
    </header>
    </Link>
  );
}
