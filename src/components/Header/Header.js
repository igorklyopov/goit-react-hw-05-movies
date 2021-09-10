import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import { themeColors } from "../../commonStyles/themeColors";

const useStyles = makeStyles((theme) => ({
  header: {
    color: themeColors.primaryDarkText,
    backgroundColor: themeColors.primaryDarkBg,
    backgroundImage: themeColors.primaryDarkBgGradient,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar component="nav">
        <ul className="list">
          <li>
            <NavLink
              exact
              to="/"
              className="link-nav"
              activeClassName="active-link-nav"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="link-nav"
              activeClassName="active-link-nav"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}
