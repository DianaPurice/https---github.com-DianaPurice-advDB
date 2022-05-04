import React, { useState } from "react";
import {
  Link,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import moment from "moment";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const userId = user?.result?._id;
  const userIdGoogle = user?.result?.googleId;
  const redirect = (path) => {
    navigate(path);
  };
  const openPost = (e) => {
    navigate(`/posts/${post._id}`);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
          component="div"
        />

        <div className={classes.title}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            {post.title}
          </Typography>
        </div>
        <div className={classes.category}>
          <Typography variant="body2" color="textSecondary">
            {post.category}
          </Typography>
        </div>
        <CardContent className={classes.description}>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default Post;
