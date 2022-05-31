import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Games from "../components/home/Games";
import Feedback from "../components/home/Feedback";



const useStyles = makeStyles((theme) => ({
  introContainer: {
    marginTop: "15vh",
  },
  intro: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  gamesContainer: {
    marginTop: "4vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  let games = ["rock_paper_scissors", "tic_tac_toe"];
  return (
    <>
      <Grid item={true} xs={1} md={2} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <div className={classes.introContainer}>
          <Typography variant="h4" className={classes.intro}>
            Choose a game that you wish to play
          </Typography>
        </div>
        <div className={classes.gamesContainer}>
          {renderGameImageLinks(games)}
        </div>
      </Grid>
      <Grid>
      <Feedback/>
      </Grid>
      <Grid item={true} xs={1} md={2} />
    </>
  );
};

const renderGameImageLinks = (links) => {
  return links.map((link, i) => {
    return <Games key={i} link={link} />;
  });
};



export default HomePage;
