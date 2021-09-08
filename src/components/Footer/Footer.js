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
import { Copyright } from "../Copyright/Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: themeColors.primaryDarkText,
    backgroundColor: themeColors.primaryDarkBg,
    backgroundImage: themeColors.primaryDarkBgGradient,
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}
