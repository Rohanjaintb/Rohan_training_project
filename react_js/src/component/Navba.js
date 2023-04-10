import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/events">Events</Link>
      <Link to="/volunteer">Volunteer</Link>
    </nav>
  );
}

export default Navbar;
