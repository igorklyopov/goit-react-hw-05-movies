import React from "react";
import { NavLink, Route, Switch, Redirect, useParams } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
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
