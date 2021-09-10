import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
      {castData.map(({ id, profile_path, name, character }) => (
        <Grid component="li" item key={id} xs={6} sm={3} md={2}>
          <Card component="div" className={classes.castCard}>
            <CardMedia
              component="img"
              className={classes.castCardImg}
              src={profile_path ? `${BASE_IMG_URL}${profile_path}` : noPhoto}
              alt={name}
            />
            <CardContent className={classes.cardCardContent}>
              <Typography variant="subtitle2" align="center" component="p">
                {name}
              </Typography>
              <Typography variant="caption" align="center" component="p">
                ({character})
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

CastList.propTypes = {
  castData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
