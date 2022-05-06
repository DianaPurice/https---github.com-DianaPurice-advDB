import React, { useState } from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import Input from "../Auth/Input";
import { signup } from "../../actions/auth";
import { createUser } from "../../actions/users";

const initialState = {
  userAccountType: "",
  firstName: "",
  lastName: "",
  userEmail: "",
  userPassword: "",
  confirmPassword: "",
};

const Auth = () => {
  //hooks
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData, navigate));
    window.alert("Account created succesfully");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4">Create a new user!</Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <div className={classes.tnContainer}>
              <div className={classes.typesContainer}>
                <InputLabel id="types" className={classes.label}>
                  Account type:
                </InputLabel>
                <Select
                  labelId="types"
                  id="userAccountType"
                  name="userAccountType"
                  value={formData.userAccountType}
                  onChange={handleChange}
                  autoFocus
                  defaultValue={10}
                >
                  <MenuItem value={10}>User</MenuItem>
                  <MenuItem value={20}>Admin</MenuItem>
                  <MenuItem value={30}>Seller</MenuItem>
                </Select>
              </div>
              <div className={classes.namesContainer}>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </div>
            </div>
            <Input
              name="userEmail"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="userPassword"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          </Grid>
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            varient="contained"
            color="primary"
          >
            Create user!
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
