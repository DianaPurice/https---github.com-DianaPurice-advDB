import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from "./user/user";
import useStyles from "./styles";

const Users = ({ setCurrentId }) => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();
  console.log(users);
  if (!users) return "No users";
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {users?.data?.map((user) => (
        <Grid key={user._id} item xs={12} sm={12} md={6} lg={3}>
          <User user={user} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
