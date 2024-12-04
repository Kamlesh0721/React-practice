import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function ProfilesPage() {
  const profiles = ["P1", "P2", "P3", "P4", "P5"];
  return (
    <>
      <h1>ProfilesPage</h1>
      {profiles.map((person) => {
        return (
          <div key={person}>
            <NavLink
              to={`/profiles/${person}`}
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
            >{`Profile ${person}`}</NavLink>
          </div>
        );
      })}
      <Outlet />
    </>
  );
}

export default ProfilesPage;
