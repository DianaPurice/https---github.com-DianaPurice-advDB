import React, { useState, useEffect } from "react";
import {
  Button,
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Grow,
  Grid,
  Container,
} from "@material-ui/core";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useStyles from "./styles";
import { getUser, getUsers, deleteUser } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteUser = () => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const goBack = (userId) => {
    navigate(`/users/${userId}`);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(id);
  console.log(users);
  return (
    <Grow in>
      <Container maxWidth="xl" className={classes.container}>
        <Grid>
          <Grid item>
            <Paper className={classes.paper} elevation={6}>
              <div className={classes.text}>
                <Typography variant="h3">
                  Your are about to delete user:
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                <Typography variant="h2" style={{ color: "red" }}>
                  {id}
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                <Typography variant="h3">
                  The process is irreversible!
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
              </div>
              <div className={classes.actions}>
                <Button
                  className={classes.goBack}
                  size="small"
                  color="primary"
                  onClick={() => goBack(id)}
                  fullWidth
                >
                  Go back!
                </Button>
                <Button
                  className={classes.delete}
                  size="small"
                  color="primary"
                  onClick={() => dispatch(deleteUser(id))}
                  fullWidth
                >
                  <DeleteIcon fontSize="medium" />
                  DELETE USER!
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default DeleteUser;
