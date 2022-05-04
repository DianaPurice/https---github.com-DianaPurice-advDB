import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import useStyles from "./styles";
import { createPost, updatePost, editPost } from "../../actions/posts";

const AddProductForm = (currentId) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    seller: "",
    title: "",
    category: "",
    description: "",
    tags: "",
    selectedFile: "",
    qty: "",
    price: "",
  });
  const post = useSelector((state) =>
    id ? state.posts.posts.find((message) => message._id === id) : null
  );
  console.log(`post data 1: ${postData}`);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updatePost(currentId, { ...postData, seller: user?.result?.seller })
    );
    window.alert("Post edited successfully!");
    navigate(`/posts/${postData._id}`);
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Edit product: {id}
        </Typography>

        <TextField
          name="title"
          varient="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          name="category"
          varient="outlined"
          label="Category"
          fullWidth
          value={postData.category}
          onChange={(e) =>
            setPostData({ ...postData, category: e.target.value })
          }
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          name="description"
          varient="outlined"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          name="tags"
          varient="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            console.log(postData.tags);
            setPostData({ ...postData, tags: e.target.value.split(",") });
          }}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          name="qty"
          varient="outlined"
          label="Quantity"
          fullWidth
          value={postData.qty}
          onChange={(e) => setPostData({ ...postData, qty: e.target.value })}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <TextField
          name="price"
          varient="outlined"
          label="Price"
          fullWidth
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            className={classes.fileBtn}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
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

export default AddProductForm;
