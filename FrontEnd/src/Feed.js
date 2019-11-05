/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import './css/PostModal.css';

import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { useStylesPosts } from './materialUIStyle';
import useModal from './useModal';
import PostModal from './PostModal';

export default function Feed(props) {
  const [Posts, setPosts] = useState([]);
  const { open, handleOpen, handleClose } = useModal();
  const { postsType, filterParam, loggedInUser } = props;
  const classes = useStylesPosts();
  let filterPostsURL = `http://localhost:8080/post/filteredPosts?fandomName=${filterParam}&level=noFilter&type=noFilter`;

  // alter api url for retrieving user posts
  if (postsType === 'user') {
    filterPostsURL = `http://localhost:8080/post/postByUser?userName=${filterParam}`;
  }

  useEffect(() => {
    fetch(filterPostsURL, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          throw new Error('Fandom not found');
        case 404:
          throw new Error('Invalid type or level');
        default:
          throw new Error('Error occurred while retrieving posts');
      }
    }).then((data) => {
      // update state posts content
      setPosts(data.posts);
    })
      .catch((err) => {
        alert(err);
      });
  });
  // Card component for the posts
  return (
    <>
      <div className="margin">
        <Fab color="primary" size="small" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
        <PostModal
          open={open}
          handleClose={handleClose}
          loggedInUser={loggedInUser}
        />
      </div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={2} style={{ minHeight: '80vh' }}>
          {Posts.map((post) => (
            <Grid item key={post.id} xs={12}>
              {/* creating card for each of the post */}
              <CardActionArea>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">Posted By: { post.postedBy } Fandom: { post.fandomName } Level: { post.level } Type: { post.type } Date: {moment(post.postedTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.content}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
              {/* end Card */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

Feed.propTypes = {
  postsType: PropTypes.string.isRequired,
  filterParam: PropTypes.string.isRequired,
  loggedInUser: PropTypes.string.isRequired,
};
