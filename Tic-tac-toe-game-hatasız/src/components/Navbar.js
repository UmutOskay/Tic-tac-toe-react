import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar } from "@material-ui/core";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    backgroundColor: theme.palette.common.black,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    color: theme.palette.common.white,
    marginLeft: "1.5vw",
    marginRight: "1.5vw",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "15px",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dev_path = [
    {
      name: "Developers",
      path: "/developers",
    },
  ];
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.navbarContainer}>
        <Logo />
        {renderNavLinks(classes, dev_path)}
      </Toolbar>
    </AppBar>
  );
};

const renderNavLinks = (classes, links) => {
  return (
    <div className={classes.navMenu}>
      {links.map((link, key) => (
        <Link className={classes.navLink} to={link.path} key={key}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
