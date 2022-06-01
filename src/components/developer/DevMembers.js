import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import DevCard from "./DevCard";
import umut_pp from "../../styles/images/umut_pp.jpeg";
import mali_pp from "../../styles/images/mali.jpeg";
import deniz_pp from "../../styles/images/deniz.jpeg";
import developers from "../../constants/developers.json";


const useStyles = makeStyles((theme) => ({
  teamMembersContainer: {
    marginTop: "14.5vh",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15vh",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  teamMemberCardsPanel: {
    marginTop: "2.5vh",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const DevMembers = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.teamMembersContainer}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" className={classes.title}>
          Developer Team
        </Typography>
      </div>
      <Grid container spacing={5} className={classes.teamMemberCardsPanel}>
        {renderMemberCards()}
      </Grid>
    </div>
  );
};

export const renderMemberCards = () => {
  const photos_of_members = [umut_pp, deniz_pp, mali_pp];

  let indents = [];
  for (let i = 0; i < developers.length; i++) {
    indents.push(
      <Grid item xs={12} md={6} lg={4} key={i}>
        <DevCard member={developers[i]} imageSrc={photos_of_members[i]} />
      </Grid>
    );
  }
  return indents;
};

export default DevMembers;
