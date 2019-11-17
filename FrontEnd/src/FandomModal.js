/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

import './css/FandomModal.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { useStylesModal } from './materialUIStyle';
import useForm from './useForm';

const initialState = {
  fandomName: '',
  type: '',
  level: '',
};



export default function FandomModal(props) {
  const { open, handleClose, loggedInUser } = props;
  const { values, handleChange } = useForm(null, initialState);

  const joinFandomURL = `http://localhost:8080/fandom/addJoinedFandom`;
  /**
   * Handles the clicking of the join button and sends a join fandom request to the url:
   * http://localhost:8080/fandom/addJoinedFandom
   */
  function handleSubmit() {
    const {
      fandomName,
      level,
      type,
    } = values;

    // Request to join Fandom
    fetch(joinFandomURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "level": level,
        "type": type,
        "fandomName": fandomName,
        "username": props.loggedInUser
      })
    }).then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 404:
          throw new Error('Fandom not found.');
        case 409:
          throw new Error('User already joined fandom.');
        case 400:
          throw new Error('Invalid type or Field.');
        default:
          throw new Error('Something went wrong joining a fandom.');
      }
    }).catch((err) => {
      alert(err);
    });
  }
  // Fandom Drop Down List
  const FandomList = ["Naruto", "Avengers", "Game of Thrones", "Fortnite", "PubG", "One Piece", "Harry Potter"];

  const classes = useStylesModal();

  const handleReset = (event) => {
    values.fandomName = '';
    values.level = '';
    values.type = '';
    handleChange(event);
  };

  const handleResetClose = (event) => {
    handleReset(event);
    handleClose();
  };

  // On clicking join
  const handleJoin = (event) => {
    handleSubmit();
    handleResetClose(event);
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Grid
          item
          style={{ textAlign: 'center' }}
          elevation={0}
        >
          <div className={classes.paper}>
            <div className="modal-header">
              <h1>Join Fandom</h1>
            </div>
            <div className="modal-body">
              <Grid container spacing={1}>
                <Grid item xs={4}>
                    <FormControl fullWidth="true" variant="outlined" fullWidth>
                        <InputLabel>
                            Fandom Name
                        </InputLabel>
                        <Select
                          labelWidth={110}
                          autoWidth={true}
                          onChange={handleChange}
                          value={values.fandomName}
                          required
                          name="fandomName"
                        >
                          <MenuItem value={"Naruto"}>Naruto</MenuItem>
                          <MenuItem value={"Avengers"}>Avengers</MenuItem>
                          <MenuItem value={"Game of Thrones"}>Game of Thrones</MenuItem>
                          <MenuItem value={"Fortnite"}>Fortnite</MenuItem>
                          <MenuItem value={"PubG"}>PubG</MenuItem>
                          <MenuItem value={"One Piece"}>One Piece</MenuItem>
                          <MenuItem value={"Harry Potter"}>Harry Potter</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {/*End of Fandom Name Select Grid Item*/}

                <Grid item xs={4}>
                  <FormControl fullWidth="true" variant="outlined" fullWidth>
                    <InputLabel>
                      Level
                    </InputLabel>
                    <Select
                      labelWidth={40}
                      autoWidth={true}
                      onChange={handleChange}
                      value={values.level}
                      required
                      name="level"
                    >
                      <MenuItem value="1">1 - Limited</MenuItem>
                      <MenuItem value="2">2 - Casual</MenuItem>
                      <MenuItem value="3">3 - Very Involved</MenuItem>
                      <MenuItem value="4">4 - Expert</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/*End of Level Select Grid Item*/}

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    fullWidth="true"
                  >
                    <InputLabel>
                      Type
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      autoWidth={true}
                      value={values.type}
                      required
                      labelWidth={35}
                      name="type"
                    >
                      <MenuItem value="General">General</MenuItem>
                      <MenuItem value="Vendor/Artist">Vendor/Artist</MenuItem>
                      <MenuItem value="Cosplayer">Cosplayer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/*End of Type Select Grid Item*/}

              </Grid>
              {/*End of Grid Container*/}

            </div>
            <div className="modal-footer">
              <Button
                variant="contained"
                onClick={handleResetClose}
                className={classes.button}
                color="default"
              >
                Close
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleJoin}
              >
                Join
              </Button>
            </div>
          </div>
        </Grid>
      </Fade>
    </Modal>
  );
}

FandomModal.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};