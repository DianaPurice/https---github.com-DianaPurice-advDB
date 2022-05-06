import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux"; // new
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EditProductForm from "./components/editProduct/editProductForm";
import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/SearchBar/searchBar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import Users from "./components/users/users";
import AddUser from "./components/addUser/addUser";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { getUsers } from "./actions/users"; // new
import useStyles from "./styles.js";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch(); // new
  const [currentId, setCurrentId] = useState(null);
  //console.log(user.result.accountType);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); // new

  return (
    <Router>
      <Container className={classes.container} maxWidth="xl" padding="0">
        <Navbar />
        <SearchBar />
        <Users />
        <AddUser />
        <Routes>
          {user?.result?.accountType === 20 && (
            <Route path="/" element={<Navigate to="/users" />} />
          )}
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" element={<ProductDetails />} />
          <Route path="/users" element={<Home />} />
          <Route
            path="/posts/:id/edit"
            element={
              <EditProductForm
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            }
          />
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
