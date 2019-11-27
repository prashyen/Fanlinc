/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './css/PostModal.css';
import EditIcon from '@material-ui/icons/Edit';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Copyright, Footer, useStylesPosts } from './materialUIStyle';
import useModal from './useModal';
import EditModal from './EditModal';
import PostModal from './PostModal';
import DeleteModal from './DeleteModal';
import FilterOptions from './FilterOptions';


export default function Feed(props) {
  const postModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();
  const [postsAndUsers, setPostsAndUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const ellipseOpen = Boolean(anchorEl);
  const [currPost, setCurrPost] = useState(null);
  const { postsType, filterParam, loggedInUser } = props;
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const classes = useStylesPosts();
  const [levelFilter, setLevelFilter] = useState('noFilter');
  const [typeFilter, setTypeFilter] = useState('noFilter');

  useEffect(() => {
    let filterPostsURL = `http://localhost:8080/post/filteredPosts?fandomName=${filterParam}&level=${levelFilter}&type=${typeFilter}`;

    // alter api url for retrieving user posts
    if (postsType === 'user') {
      filterPostsURL = `http://localhost:8080/post/postsByUser?username=${filterParam}`;
    }
    fetch(filterPostsURL, {
      method: 'get',
      mode: 'cors',
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
      setUpdateTrigger(false);
      // update state posts content
      setPostsAndUsers(data.postsAndUsers);
    })
      .catch((err) => {
        alert(err);
      });
  }, [filterParam, levelFilter, typeFilter, updateTrigger, postsType]);

  const handleEllipseClick = (event) => {
    setCurrPost(event.currentTarget.value);
    setAnchorEl(event.currentTarget);
  };

  const handleEllipseClose = () => {
    setAnchorEl(null);
    setCurrPost(null);
    setUpdateTrigger(true);
  };
  const Bold = ({ children }) => <Box fontWeight="fontWeightBold" display="inline" ml={1.5}>{children}</Box>;

  const isURL = require('is-url');

  // Card component for the posts
  return (
    <>
      <div className="margin">
        {postsType === 'feed'
          ? (
            <>
            <div style={{ paddingRight: 12 }}>
              <Fab color="primary" size="small" onClick={postModal.handleOpen}>
                <AddIcon />
              </Fab>
              </div>
              <PostModal
                open={postModal.open}
                handleClose={postModal.handleClose}
                loggedInUser={loggedInUser}
                handleTrigger={setUpdateTrigger}
              />
              <FilterOptions
                levelFilter={levelFilter}
                typeFilter={typeFilter}
                setLevelFilter={setLevelFilter}
                setTypeFilter={setTypeFilter}
              />
            </>
          ) : null}
      </div>
      {currPost != null ? (
        <div>
          <EditModal
            post={postsAndUsers[currPost].post}
            open={editModal.open}
            handleClose={editModal.handleClose}
            menuHandleClose={handleEllipseClose}
          />
          <DeleteModal
            post={postsAndUsers[currPost].post}
            open={deleteModal.open}
            handleClose={deleteModal.handleClose}
            menuHandleClose={handleEllipseClose}
          />
        </div>
      ) : null}
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={2} style={{ minHeight: '80vh' }}>
          {postsAndUsers.map((postEntry, index) => (
            <Grid item key={postEntry.post.id} xs={12}>
              {/* creating card for each of the post */}
              <Card style={{ display: 'flex', width: '65vw' }}>
                <div style={{ paddingTop: 25, paddingLeft: 20 }}>
                  {isURL(postEntry.user.profilePhotoUrl) ? (
                    <Avatar src={postEntry.user.profilePhotoUrl} />
                  ) : (
                    <Avatar>
                      {postEntry.post.postedBy.charAt(0)}
                      {' '}
                    </Avatar>
                  )}
                </div>
                <div className={classes.cardDetails}>
                  <CardContent flex="1 0 auto">
                    <Typography component="h2" variant="h5">
                      {postEntry.post.title}
                    </Typography>
                    <Typography component="div" variant="body2" color="textSecondary">
                      <Box fontWeight="fontWeightBold" display="inline">Posted by: </Box>
                      { postEntry.post.postedBy }
                      <Bold>Fandom: </Bold>
                      {' '}
                      { postEntry.post.fandomName }
                      <Bold>Level: </Bold>
                      {' '}
                      { postEntry.post.level }
                      <Bold>Type: </Bold>
                      {' '}
                      { postEntry.post.type }
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {moment(postEntry.post.postedTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                    </Typography>
                    <Typography variant="subtitle1">
                      {postEntry.post.content}
                    </Typography>
                  </CardContent>
                </div>
                <div>
                  {isURL(postEntry.post.postPhotoUrl) ? (
                    <CardMedia style={{ width: '160px', height: '160px' }} component="img" image={postEntry.post.postPhotoUrl} />
                  ) : null}
                </div>
                <CardHeader
                  style={{ padding: 0 }}
                  action={
                    postEntry.post.postedBy === loggedInUser ? (
                      <div>
                        <IconButton value={index} onClick={handleEllipseClick}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={ellipseOpen}
                          onClose={handleEllipseClose}
                        >
                          <MenuItem onClick={editModal.handleOpen}>
                            <ListItemIcon>
                              <EditIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Edit Post" />
                          </MenuItem>
                          <MenuItem onClick={deleteModal.handleOpen}>
                            <ListItemIcon>
                              <DeleteIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Delete Post" />
                          </MenuItem>
                        </Menu>
                      </div>
                    ) : <Box m={3} />
                  }
                />
              </Card>
              {/* end Card */}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box m={10} />
      {/* Footer */}
      <Footer/>
    </>
  );
}

Feed.propTypes = {
  postsType: PropTypes.string.isRequired,
  filterParam: PropTypes.string.isRequired,
  loggedInUser: PropTypes.string.isRequired,
};
