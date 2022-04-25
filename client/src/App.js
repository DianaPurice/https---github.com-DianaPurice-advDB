import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/SearchBar/searchBar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import ProductDetails from "./components/ProductDetails/PorductDetails";

import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Navbar />
      <SearchBar />
      <Home />
    </Container>
  );
};

export default App;
