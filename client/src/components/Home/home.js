import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPosts, getPostsBySearch } from "../../actions/posts";
import Products from "../products/products";
import AddProductForm from "../addProduct/addProduct";
import Pagination from "../Pagination";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useNavigate();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  console.log(currentId);
  console.log("hereee");
  const handleAddChip = (tag) => setTags([...tags, tag]);
  const handleDeleteChip = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // search for the post
      searchPost();
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container style={{ padding: 30 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spagcing={3}
        >
          <Grid item xs={12} sm={7}>
            <Products setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AddProductForm currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
