import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <h2>Profiles Page</h2>
      <Link to="/profiles">Profiles</Link>
    </div>
  );
}

export default HomePage;
