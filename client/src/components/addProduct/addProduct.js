import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./styles";

const AddProductForm = () => {
  const classes = useStyles();
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    tags: "",
    selectedFile: "",
    qtyAvailable: "",
    price: "",
  });

  const handleSubmit = () => {};
  const clear = () => {};

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
          value={productData.seller}
          onChange={(e) =>
            setProductData({ ...productData, seller: e.target.value })
          }
        />
        <TextField
          name="title"
          varient="outlined"
          label="Title"
          fullWidth
          value={productData.title}
          onChange={(e) =>
            setProductData({ ...productData, title: e.target.value })
          }
        />
        <TextField
          name="category"
          varient="outlined"
          label="Category"
          fullWidth
          value={productData.category}
          onChange={(e) =>
            setProductData({ ...productData, category: e.target.value })
          }
        />
        <TextField
          name="description"
          varient="outlined"
          label="Description"
          fullWidth
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
        />
        <TextField
          name="tags"
          varient="outlined"
          label="Tags"
          fullWidth
          value={productData.tags}
          onChange={(e) =>
            setProductData({ ...productData, tags: e.target.value })
          }
        />
        <TextField
          name="qtyAvailable"
          varient="outlined"
          label="QtyAvailable"
          fullWidth
          value={productData.qtyAvailable}
          onChange={(e) =>
            setProductData({ ...productData, qtyAvailable: e.target.value })
          }
        />
        <TextField
          name="price"
          varient="outlined"
          label="Price"
          fullWidth
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            className={classes.fileBtn}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...postMessage, selectedFile: base64 })
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
