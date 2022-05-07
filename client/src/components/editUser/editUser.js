import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import useStyles from "./styles";
import { updateUser } from "../../actions/users";

const EditUser = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  const [userData, setUserData] = useState({
    accountType: "",
    editedAt: "",
    email: "",
    name: "",
    password: "",
    userPosts: "",
  });

  const user = useSelector((state) => state.users);
  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, { ...userData, editedAt: new Date() }));
    window.alert("User edited successfully!");
    navigate(`/users/${userData._id}`);
  };
  console.log(user);
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", paddingBottom: 5 }}
        >
          Edit user: {id}
        </Typography>
        <TextField
          className={classes.change}
          name="accountType"
          varient="outlined"
          label="Account type"
          fullWidth
          value={userData.accountType}
          onChange={(e) =>
            setUserData({ ...userData, accountType: e.target.value })
          }
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          className={classes.change}
          name="email"
          varient="outlined"
          label="Email"
          fullWidth
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          className={classes.change}
          name="name"
          varient="outlined"
          label="Name"
          fullWidth
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          className={classes.change}
          name="password"
          varient="outlined"
          label="Password"
          fullWidth
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          className={classes.change}
          style={{ paddingBottom: 5 }}
          name="userPosts"
          varient="outlined"
          label="User posts"
          fullWidth
          value={userData.userPosts}
          onChange={(e) => {
            setUserData({ ...userData, userPosts: e.target.value.split(",") });
          }}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <Button
          className={classes.btnSubmit}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default EditUser;
