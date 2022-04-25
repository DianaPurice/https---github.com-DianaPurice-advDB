import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import brand from "../../images/brand.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.bConstainer}>
        <Typography className={classes.brand} variant="h2">
          MyApp
        </Typography>
        <img className={classes.bImg} src={brand} alt="brand" height="60" />
      </div>
      <div className={classes.profile}>
        <Button className={classes.temporary}>Sign In</Button>
      </div>
    </AppBar>
  );
};

export default Navbar;
