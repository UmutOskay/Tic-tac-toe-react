import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import game1Logo from "../../styles/images/rock_paper_scissors_icon.webp";
import game2Logo from "../../styles/images/tic_tac_toe_icon.png";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "400px",
    height: "400px",
    margin: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "225px",
      height: "225px",
      margin: "8px",
    },
  },
}));

const Games = (props) => {
  const classes = useStyles();

  const redirect_route = props.link;

  return (
    <Link className={classes.link} to={redirect_route}>
      <Card variant="outlined" className={classes.card}>
        {props.link === "rock_paper_scissors" ? (
          <CardMedia component="img" image={game1Logo} />
        ) : (
          <CardMedia component="img" image={game2Logo} />
        )}
      </Card>
    </Link>
  );
};

export default Games;
