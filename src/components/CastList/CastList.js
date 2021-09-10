import React from "react";
import {
  NavLink,
  Link,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
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
import { BASE_IMG_URL } from "../../services/moviesApiConstants";
import noPhoto from "../../images/no-photo.jpg";

const useStyles = makeStyles((theme) => ({
  castCardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  castCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  castCardImg: {
    height: "250px",
  },
  castCardContent: {
    flexGrow: 1,
  },
}));

export default function CastList({ castData }) {
  const classes = useStyles();

  return (
    <Grid container component="ul" spacing={2} className="list">
      {castData.map((cast) => (
        <Grid component="li" item key={cast.id} xs={6} sm={3} md={2}>
          <Card component="div" className={classes.castCard}>
            <CardMedia
              component="img"
              className={classes.castCardImg}
              src={
                cast.profile_path
                  ? `${BASE_IMG_URL}${cast.profile_path}`
                  : noPhoto
              }
              alt={cast.name}
            />
            <CardContent className={classes.cardCardContent}>
              <Typography variant="subtitle2" align="center" component="p">
                {cast.name}
              </Typography>
              <Typography variant="caption" align="center" component="p">
                ({cast.character})
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
