import React from 'react';
import useModal from './useModal'
import './App.css'
import PostModal from './PostModal'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './PostModal.css'


export default function Post() {
    const{open, handleOpen, handleClose} = useModal();
    return (
        <div>
          <Fab color="primary" size="small" aria-label="add"  onClick={handleOpen} >
            <AddIcon />
          </Fab>
          <PostModal
            open={open}
            handleClose={handleClose}>
          </PostModal>
        </div>
    );
}
