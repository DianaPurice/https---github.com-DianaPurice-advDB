import AdminView from "../../views/admin/admin";
import DefaultView from "../../views/default/default";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getUser } from "../../actions/users";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userProfile = JSON.parse(localStorage.getItem("profile"));
  const accountType = userProfile?.result?.accountType;
  const userId = userProfile?.result?._id;
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  return <AdminView />;
};

export default UserDetails;
