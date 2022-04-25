import React from "react";
import { AppBar, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { SearchOutlined } from "@material-ui/icons";
import useStyles from "./styles";

const SearchBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.searchBar} position="static">
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchBox}
          name="search"
          variant="outlined"
          placeholder="Search products..."
          maxRows={1}
          size="small"
          inputProps={{ style: { height: "5px" } }}
        />
        <Button
          className={classes.searchBtn}
          varient="outlined"
          style={{ width: 40 }}
        >
          <SearchOutlined />
        </Button>
      </div>
      <div className={classes.linkedPages}>
        <ul className={classes.ul}>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </AppBar>
  );
};

export default SearchBar;
