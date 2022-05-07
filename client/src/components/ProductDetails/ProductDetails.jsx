import SellerView from "../../views/seller/seller";
import AdminView from '../../views/admin/admin'
import UserView from '../../views/user/user'
import DefaultView from '../../views/default/default'
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import { getPost, getPostsBySearch} from '../../actions/posts'
import { useParams, useNavigate } from 'react-router-dom'
const PostDetails = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const accountType = user?.result?.accountType;
    const userId = user?.result?._id
    const dispatch = useDispatch();
    const {id} = useParams();
    const { post } = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getPost(id))
      }, [id]);


  return (
    <>
    {accountType === 30 &&
        userId === post?.creator && (
         <SellerView />
        )}
    {accountType  === 20 && (
         <AdminView />
        )}
    {accountType === 10 && (
         <UserView />
        )}
    {!accountType && (
         <DefaultView />
        )}
        </>
  )
}

export default PostDetails