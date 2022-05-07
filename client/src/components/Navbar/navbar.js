import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./styles";
import brand from "../../images/brand.png";
import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("./");

    setUser(null);
    window.location.reload();
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const home = (e) => {
    navigate("/posts");
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.bConstainer}>
        <Typography
          className={classes.brand}
          component={Link}
          to="/users"
          variant="h2"
          onClick={home}
        >
          MyApp
        </Typography>
        <img className={classes.bImg} src={brand} alt="brand" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} varient="h6">
              {user.result.name}
            </Typography>
            <Typography className={classes.userType} varient="h6">
              {user.result.accountType}
            </Typography>
            <Button
              varient="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className={classes.login}>
            <Button
              className={classes.login}
              component={Link}
              to="/auth"
              varient="contained"
              color="primary"
            >
              Sign In
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
