import React, { useState } from "react";
import { Card, CardContent, Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

import { useNavigate } from "react-router-dom";

const User = ({ user, setCurrentId }) => {
  const classes = useStyles();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const userId = profile?.result?._id;
  const openUser = (e) => {
    navigate(`/users/${user._id}`);
  };

  const addClass = (accountType) => {
    switch (accountType) {
      case 10:
        return "ten";
      case 20:
        return "twenty";
      case 30:
        return "thirty";
      default:
        return "null";
    }
  };
  const classAdd = addClass(user.accountType);
  console.log(user);
  return (
    <Card
      itemProp={classAdd}
      className={`${classes.card}`}
      raised
      elevation={6}
    >
      <ButtonBase className={classes.cardAction} onClick={openUser}>
        <div className={classes.section}>
          <Typography className={classes.label} variant="h5" gutterBottom>
            Account type:
          </Typography>
          <Typography className={classes.value} variant="h5" gutterBottom>
            {user.accountType || user.accountType}
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.label} variant="h5" gutterBottom>
            Name:
          </Typography>
          <Typography className={classes.value} variant="h5" gutterBottom>
            {user.name || user.name}
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.label} variant="h5" gutterBottom>
            Email:
          </Typography>
          <Typography className={classes.value} variant="h5" gutterBottom>
            {user.email || user.email}
          </Typography>
        </div>
        <div className={classes.section} style={{ paddingBottom: 5 }}>
          <Typography className={classes.label} variant="h5">
            Id:
          </Typography>
          <Typography className={classes.value} variant="h5">
            {user._id}
          </Typography>
        </div>
      </ButtonBase>
    </Card>
  );
};

export default User;
