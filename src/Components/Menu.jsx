/**
 * Main top menu component.
 * React, React-Route, Redux Test project.
 */

import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./styled/NavBar";

const Menu = () => {
  return (
    <NavBar>
      <div className="d-flex flex-row bd-highlight justify-content-between pr-5 pl-5 pt-2 pb-2 mb-3">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="nav-active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};

export default Menu;
