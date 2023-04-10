import React from "react";
import Navbar from "./Navba";

function Homepage() {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Welcome to our charity website</h1>
        <p>
          We are a non-profit organization dedicated to making a difference in
          the world.
        </p>
        <button>Donate</button>
      </header>
    </div>
  );
}

export default Homepage;
