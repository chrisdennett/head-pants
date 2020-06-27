import React from "react";
import { Router, Link, Match } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/badge">Badge Maker</NavLink>
      </nav>
    </div>
  );
};

export default Nav;

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "blue",
        },
      };
    }}
  />
);
