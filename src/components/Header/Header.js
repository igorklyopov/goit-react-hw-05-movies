import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import StylesHeader from "./StylesHeader";

export default function Header() {
  const classes = StylesHeader();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar component="nav">
        <ul className={`list ${classes.navList}`}>
          <li className={classes.navListItem}>
            <NavLink
              exact
              to="/"
              className={`link ${classes.navLink}`}
              activeClassName={classes.navLinkActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={`link ${classes.navLink}`}
              activeClassName={classes.navLinkActive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}
