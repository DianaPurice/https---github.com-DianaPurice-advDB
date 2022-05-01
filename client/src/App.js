import React from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/SearchBar/searchBar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import PostDetails from "./components/ProductDetails/PorductDetails";

import useStyles from "./styles.js";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  return (
    <Router>
      <Container className={classes.container} maxWidth="xl" padding="0">
        <Navbar />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/auth"
            exact
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
