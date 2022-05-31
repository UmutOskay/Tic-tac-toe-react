import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import DevMembers from "../components/developer/DevMembers";

const useStyles = makeStyles((theme) => ({
  teamContainer: {
    display: "flex",
    width: "100vw",
  },
}));

export const DeveloperPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.teamContainer}>
      <Grid item={true} xs={1} md={2} />
      <Grid item={true} xs={10} md={8}>
        <DevMembers />
      </Grid>
      <Grid item={true} xs={1} md={2} />
    </div>
  );
};

export default DeveloperPage;
