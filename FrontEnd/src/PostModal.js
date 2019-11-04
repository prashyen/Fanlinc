import React from 'react';
import useForm from './useForm';
import './css/PostModal.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles}  from './postModalStyle';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

var postedBy='A';

const initialState = {
  title: "",
  content: "",
  imageURL: "",
  type: "",
  level: ""
};

const addPostURL = "http://localhost:8080/post/addPost";

export default function PostModal({open, handleClose}){
    
 /**
   * Handles the clicking of the post button and sends a post request to the url:
   * http://localhost:8080/post/addPost
   */
  function handleSubmit() {
    const {
      title,
      content,
      level,
      imageURL,
      type
    } = values;

    fetch(addPostURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "title": title,
        "content": content,
        "level": level,
        "postedBy": postedBy,
        "type": type,
        "fandomName": fandomName,
        "postPhotoURL": imageURL
      }, console.log(title + content + level + postedBy + type + fandomName + imageURL))
    }).then(response => {
      console.log("registration response:", response);
      switch (response.status) {
        case 200:
          alert("Post Created!");
          break;
        default:
          alert("Something went wrong creating the post.");
      }
    }).catch(err => {
      alert("Error sending the request. ", err);
    });
  }

  const [fandoms, setFandoms] = useState();
 /**
   * Handles updating the Fandom Dropdown using a get request from the url:
   * http://localhost:8080/account/userFandoms
   */
  useEffect (() => {
    fetch('http://localhost:8080/account/userFandoms?username='+postedBy, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      }).then(response => {
        switch (response.status) {
          case 200:
            return response.json();
          default:
            alert("Uh oh! Something went wrong.");
        }
      }).then(data => {
        setFandoms({data});
      }).catch(err => {
        alert("Error sending the request. ", err);
      });
    }, []);      
      
  const classes = useStyles();

  const { values, handleChange, handleSubmitp } = useForm(null, initialState);

  const [fandomName, setFandomName] = useState('');

  const handleFandomNameChange = event =>{
    setFandomName(event.target.value);
  }

  const handlePost = event =>{
    handleSubmit();
    handleResetClose(event);
  }
 
  const handleReset = event =>{
    values.imageURL = '';
    values.text = '';
    values.title = '';
    values.level = '';
    values.type = '';
    setFandomName('');
    handleChange(event);
  }

  const handleResetClose = event => {
    handleReset(event);
    handleClose();
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
          style={{ textAlign: "center" }}
          elevation={0}
          >
            <div className={classes.paper}>
              <div className="modal-header">
                <h3>Create Post</h3>
              </div>
              <div className="modal-body">
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <FormControl  variant="outlined" fullWidth>
                      <InputLabel>
                        Level
                      </InputLabel>
                      <Select
                      labelWidth={40}
                      onChange={handleChange}
                      value={values.level}
                      required
                      name= 'level'
                      >
                        <MenuItem value={"1"}>1 - Limited</MenuItem>
                        <MenuItem value={"2"}>2 - Casual</MenuItem>
                        <MenuItem value={"3"}>3 - Very Involved</MenuItem>
                        <MenuItem value={"4"}>4 - Expert</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl 
                    variant="outlined"  
                    fullWidth >
                      <InputLabel>
                        Type
                      </InputLabel>
                      <Select
                      onChange={handleChange}
                      value={values.type}
                      required
                      labelWidth={35}
                      name='type'
                      >
                        <MenuItem value={"General"}>General</MenuItem>
                        <MenuItem value={"Vendor/Artist"}>Vendor/Artist</MenuItem>
                        <MenuItem value={"Cosplayer"}>Cosplayer</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    {fandoms?(
                    <FormControl 
                    variant="outlined"  
                    fullWidth >
                      <InputLabel>
                        Fandom
                      </InputLabel>
                      
                      <Select
                      onChange={handleFandomNameChange}
                      value={fandomName}
                      type="text"
                      required
                      labelWidth={60}
                      >
                      {fandoms.data.fandomNames.map((fandomName) =><MenuItem key={fandomName} value={fandomName}> {fandomName} </MenuItem>)}    
                      </Select>
                    </FormControl>
                    ):(<CircularProgress />)}
                  </Grid>    
                </Grid>
                <Grid container>
                  <Grid item xs={12} >
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Paste Image URL Here"
                    name="imgURL"
                    type="text"
                    value={values.imageURL}
                    onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} zeroMinWidth>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Text"
                    name="content"
                    type="text"
                    multiline
                    rows="4"
                    value={values.content}
                    onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="modal-footer" >
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
                onClick={handlePost}
                >
                  Post
               </Button>
              </div>
            </div>
          </Grid>
        </Fade>
      </Modal>
    )
}
