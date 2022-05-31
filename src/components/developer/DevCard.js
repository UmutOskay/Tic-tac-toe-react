import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import { SOCIAL_MEDIA_COLORS } from "../../styles/colors";

const useStyles = makeStyles((theme) => ({
  teamCardContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "350px",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    paddingBottom: 40,
    paddingTop: 40,
  },
  image: {
    width: "330px",
    height: "450px",
    objectFit: "cover",
  },
  content: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  socialMediaPanel: {
    width: "100%",
    marginTop: "auto",
  },
  iconGrid: {
    listStyle: "none",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
  socialLinkItem: {
    margin: "0 18px",
  },
  icon: {
    color: theme.palette.common.black,
  },
  github: {
    "&:hover path": {
      color: SOCIAL_MEDIA_COLORS.github,
    },
  },
  twitter: {
    "&:hover path": {
      color: SOCIAL_MEDIA_COLORS.twitter,
    },
  },
  linkedin: {
    "&:hover path": {
      color: SOCIAL_MEDIA_COLORS.linkedin,
    },
  },
}));

const DevCard = ({ member, imageSrc }) => {
  const classes = useStyles();
  return (
    <Card key={member.name} className={classes.teamCardContainer}>
      <CardMedia component="img" className={classes.image} image={imageSrc} />
      <CardContent className={classes.content}>
        <Typography variant="h6">{member.name}</Typography>
      </CardContent>
      <Box className={classes.socialMediaPanel}>
        <Grid container direction="row" className={classes.iconGrid}>
          {renderSocialMediaIcons({ member, classes })}
        </Grid>
      </Box>
    </Card>
  );
};

const renderSocialMediaIcons = ({ member, classes }) => {
  const icons = [faLinkedin, faGithubSquare];
  const links = member.links;

  let indents = [];
  for (let i = 0; i < links.length; i++) {
    indents.push(
      <li className={classes.socialLinkItem} key={i}>
        <a
          href={links[i].url}
          rel="noopener noreferrer"
          target="_blank"
          className={classes[links[i].name]}
        >
          <FontAwesomeIcon className={classes.icon} icon={icons[i]} size="2x" />
        </a>
      </li>
    );
  }
  return indents;
};

export default DevCard;
