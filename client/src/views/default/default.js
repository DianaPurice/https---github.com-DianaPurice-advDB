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
  getPost,
  getPostsBySearch,
  deletePost,
  updatePost,
} from "../../actions/posts";
import CommentSection from "../../components/ProductDetails/CommentsSections";
import useStyles from "./styles.js";
import AddProductForm from "../../components/addProduct/addProduct";

const DefaultView = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id;
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ serach: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const openPost = (_id) => navigate(`/posts/${_id}`);

  const edit = (_id) => {
    navigate(`/posts/${_id}/edit`);
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
              <div className={classes.header}>
                <Typography variant="h3" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="h6">{post.category}</Typography>
              </div>
              <Divider style={{ margin: "20px 0" }} />
              <div className={classes.imageSection}>
                <img
                  className={classes.media}
                  src={
                    post.selectedFile ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                  }
                  alt={post.title}
                />
              </div>
              <Divider style={{ margin: "20px 0" }} />
              <div className={classes.details}>
                <Typography gutterBottom variant="h5" component="p">
                  £ {post.price}
                </Typography>
                <Typography gutterBottom variant="body1" component="p">
                  {post.description}
                </Typography>
              </div>
              <Divider style={{ margin: "20px 0" }} />
              <h2>Login for more options!</h2>
              <Divider style={{ margin: "20px 0" }} />
              <div className={classes.comments}>
                <CommentSection post={post} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default DefaultView;
