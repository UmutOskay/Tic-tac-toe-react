import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import logoImage from "../styles/images/custom_icon.jpeg";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "auto",
  },
  logoLink: {
    color: theme.palette.common.black,
    display: "flex",
    alignItems: "center",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <Link className={classes.logoLink} to="/">
        <img src={logoImage} alt="logo" height="36px" />
      </Link>
    </div>
  );
};

export default Logo;
