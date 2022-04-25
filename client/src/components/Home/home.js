import React, { useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/products";
import Products from "../products/products";
import AddProductForm from "../addProduct/addProduct";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
            <Products />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AddProductForm />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
