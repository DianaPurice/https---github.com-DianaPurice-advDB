import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  getUser,
  getUsersBySearch,
  deleteUser,
  updateUser,
  getUsers,
} from "../../actions/users";
import useStyles from "./styles.js";

const AdminView = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);
  const edit = (id) => {
    navigate(`/users/${id}/edit`);
  };

  const deletes = () => {
    navigate(`/users/delete/${id}`);
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={9}>
            <Paper className={classes.post} elevation={6}>
              <Typography variant="h3" component="h2">
                Name: {user.name ? user.name : user.userName}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography variant="h5">
                Email: {user.name ? user.email : user.userEmail}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography gutterBottom variant="h5" component="p">
                Password: {user.name ? user.password : user.userPassword}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography gutterBottom variant="h5" component="p">
                Account type:
                {user.name ? user.accountType : user.userAccountType}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography gutterBottom variant="h5" component="p">
                Posts: {user.userPosts}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography gutterBottom variant="h5" component="p">
                Id: {user._id}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography gutterBottom variant="h5" component="p">
                Date created: {user.createdAt}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <div className={classes.actions}>
                <Divider style={{ margin: "20px 0" }} />
                <Button
                  className={classes.edit}
                  size="small"
                  color="primary"
                  onClick={() => edit(user._id)}
                  fullWidth
                >
                  <EditIcon fontSize="small" />
                  Edit
                </Button>
                <Button
                  className={classes.delete}
                  size="small"
                  color="primary"
                  onClick={() => deletes(user._id)}
                  fullWidth
                >
                  <DeleteIcon fontSize="small" />
                  Delete
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default AdminView;
