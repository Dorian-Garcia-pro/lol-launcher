import React from "react";
import { NavLink } from "react-router-dom";

function SubNavHome() {
  return (
    <div id="subNavHomeContainer">
      <ol>
        <NavLink className="subNavHome" to="/home/currentEvent">
          <li>
            <p>WORLDS 2023</p>
          </li>
        </NavLink>
        <NavLink className="subNavHome" to="/home/preview">
          <li>OVERVIEW</li>
        </NavLink>
        <NavLink className="subNavHome" to="/home/products">
          <li>MERCH</li>
        </NavLink>
        <NavLink className="subNavHome" to="/home/patchnote">
          <li>PATCH NOTES</li>
        </NavLink>
      </ol>
    </div>
  );
}

export default SubNavHome;
