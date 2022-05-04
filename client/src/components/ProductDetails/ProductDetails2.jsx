import SellerView from "../../views/seller";
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import { getPost, getPostsBySearch} from '../../actions/posts'
import { useParams, useNavigate } from 'react-router-dom'
const PostDetails2 = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const accountType = user?.result?.accountType;
    const userId = user?.result?._id
    const dispatch = useDispatch();
    const {id} = useParams();
    const { post } = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getPost(id))
      }, [id]);
      console.log(post);
      console.log('u r here');
  return (
    <>
    {accountType === 30 &&
        userId === post?.creator && (
         <SellerView />
        )}
    {accountType === 20 &&
        userId === post?.creator && (
         <SellerView />
        )}
    {accountType === 10 &&
        userId === post?.creator && (
         <SellerView />
        )}
    {!accountType && (
         <SellerView />
        )}
        </>
  )
}

export default PostDetails2