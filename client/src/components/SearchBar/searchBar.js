import React, { useState } from "react";
import { AppBar, TextField, Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
      navigate(`/posts/search?searchQuery=${search || "none"}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // search for the post
      searchPost();
    }
  };

  return (
    <AppBar className={classes.searchBar} position="static">
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchBox}
          name="search"
          variant="outlined"
          placeholder="Search products..."
          maxRows={1}
          value={search}
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          inputProps={{ style: { height: "5px" } }}
        />
        <Button
          onClick={searchPost}
          className={classes.searchBtn}
          varient="contained"
          style={{ backgroun: "transparent" }}
        >
          <SearchOutlined style={{ width: 30, backgroun: "transparent" }} />
        </Button>
      </div>
      <div className={classes.linkedPages}>
        <ul className={classes.ul}>
          <li>
            <a className={classes.a} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={classes.a} href="/about">
              About
            </a>
          </li>
          <li>
            <a className={classes.a} href="/contact">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </AppBar>
  );
};

export default SearchBar;
