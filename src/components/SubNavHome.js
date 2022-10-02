import React from "react";
import { NavLink } from "react-router-dom";

function SubNavHome() {
  return (
    <div id="subNavHomeContainer">
      <ol>
        <NavLink className="subNavHome" to="currentEvent">
          <li>
            <p>MONDIAL 2022</p>
          </li>
        </NavLink>
        <NavLink className="subNavHome" to="preview">
          <li>APERCU</li>
        </NavLink>
        <NavLink className="subNavHome" to="products">
          <li>PRODUITS DERIVES</li>
        </NavLink>
        <NavLink className="subNavHome" to="patchnote">
          <li>NOTES DE PATCH</li>
        </NavLink>
      </ol>
    </div>
  );
}

export default SubNavHome;
