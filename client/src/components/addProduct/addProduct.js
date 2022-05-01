import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const AddProductForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
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
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );

  useEffect(() => {
    setCurrentId(null);
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setPostData({
      seller: "",
      title: "",
      category: "",
      description: "",
      tags: "",
      selectedFile: "",
      qty: "",
      price: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.seller })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
    }
    clear();
  };
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memory and like other memories
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Add a product:
        </Typography>
        <TextField
          name="seller"
          varient="outlined"
          label="Seller"
          fullWidth
          value={postData.seller}
          onChange={(e) => setPostData({ ...postData, seller: e.target.value })}
          InputLabelProps={{
            className: "inputLabel",
          }}
        />
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
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
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
        >
          Submit
        </Button>
        <Button
          className={classes.btnClear}
          variant="contained"
          size="small"
          onClick={clear}
          fullWidth
          color="secondary"
        >
          Clear Form
        </Button>
      </form>
    </Paper>
  );
};

export default AddProductForm;
