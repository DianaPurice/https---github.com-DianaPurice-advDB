import React, {useEffect} from 'react'
import {Paper, Typography, CircularProgress, Divider, Grow, Grid, Container} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { getPost, getPostsBySearch} from '../../actions/posts'
import CommentSection from './CommentsSections'
import useStyles from './styles.js'

const PostDetails = () => {
  const { post, posts, isLoading} = useSelector((state) => state.posts)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPost(id))
  }, [id]);

  useEffect(() => {
    if(post) {
      dispatch(getPostsBySearch({serach: 'none', tags: post?.tags.join(',')}))
    }
  }, [post])

  if(!post) return null;

  if(isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size='7em' />
    </Paper>
  }
  const recommendedPosts = posts.filter(({_id}) => _id !== post._id)

  const openPost = (_id) => navigate(`/posts/${_id}`)



  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={9}>
            <Paper className={classes.post} elevation={6}>
              <div className={classes.header}>
                <Typography variant="h3" component="h2">{post.title}</Typography>
                <Typography variant="h6">{post.category}</Typography>
              </div>
                <Divider style={{ margin: '20px 0' }} />
              <div className={classes.imageSection}>
                <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
              </div>   
                <Divider style={{ margin: '20px 0' }} />
              <div className={classes.details}>
                <Typography gutterBottom variant="h5" component="p">£ {post.price}</Typography>
                <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
              </div>
                <Divider style={{ margin: '20px 0' }} />
              <div className={classes.comments}>
                <CommentSection post={post} />
              </div>
            </Paper>
          </Grid>
          {/* display posts */}
          <Grid item xs={12} sm={12} md={3}>
            <Paper className={classes.post} elevation={6}>
              {/* RECOMENDED POSTS */}
              {recommendedPosts.length && (
                <div className={classes.section}>
                  <Typography gutterBottom variant='h5'>
                    You might also like:
                  </Typography>
                  <Divider/>
                  <div className={classes.recommendedPosts}>
                    {recommendedPosts.map(({title, message, name, likes, selectedFile, _id}) =>(
                      <div style={{margin: '20px', cursor: 'pointer'}} onClick={() => openPost(_id)} key={_id}>
                        <Typography gutterBottom variant='h6'>{title}</Typography>
                        <Typography gutterBottom variant='subtitle2'>{name}</Typography>
                        <Typography gutterBottom variant='subtitle2'>{message}</Typography>
                        <Typography gutterBottom variant='subtitle1'>Likes: {likes.length}</Typography>
                        <img src={selectedFile} width='200px'/>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )}

  export default PostDetails