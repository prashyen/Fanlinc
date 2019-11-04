/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import useModal from './useModal';
import './App.css';
import PostModal from './PostModal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './css/PostModal.css';


export default function Post(props) {

  const { loggedInUser } = props;
  const { open, handleOpen, handleClose } = useModal();

  return (
    <div className="margin">
      <Fab color="primary" size="small" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      <PostModal
          open={open}
          handleClose={handleClose}
          loggedinUser={loggedInUser}
           />
    </div>
  );
}
