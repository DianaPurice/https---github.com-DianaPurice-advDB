import React from "react";
import { useSelector } from "react-redux";
import User from "./user/user";

const Users = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <>
      <h1>Users</h1>
      <User />
      <User />
    </>
  );
};

export default Users;
