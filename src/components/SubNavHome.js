import React from "react";
import { NavLink } from "react-router-dom";

function SubNavHome() {
  return (
    <div id="subNavHomeContainer">
      <ol>
{/*         <NavLink className="subNavHome" to="/home/currentEvent">
          <li>
            <p>MONDIAL 2022</p>
          </li>
        </NavLink> */}
        <NavLink className="subNavHome" to="/home/preview">
          <li>APERçU</li>
        </NavLink>
        <NavLink className="subNavHome" to="/home/products">
          <li>PRODUITS dérivés</li>
        </NavLink>
        <NavLink className="subNavHome" to="/home/patchnote">
          <li>NOTES DE PATCH</li>
        </NavLink>
      </ol>
    </div>
  );
}

export default SubNavHome;
