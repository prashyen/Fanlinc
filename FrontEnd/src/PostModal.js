import React from 'react';
import useForm from './useForm';
import './PostModal.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles}  from './postModalStyle';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {DropzoneDialog, DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
var level ='';
var title ='';
var content ='';
var fandomName ='';
var type='';
var postedTime
//photo
var postedBy='';
const initialState = {
  title: "",
  text: "",
  imgURL: "",
  type: "",
  level: "",
  fandom: ""
};

const addPostURL = "http://localhost:8080/post/addPost";

export default function PostModal({open, handleClose}){
    
 /**
   * Handles the clicking of the post button and sends a post request to the url:
   * http://localhost:8080/post/addPost
   */
  /*function submit() {
    const {
      title,
      text,
      level,
      fandom,
      files,
    } = values;
    function encoder(){
      var BasicBase64format 
      = Base64.getEncoder() 
            .encodeToString(sample.getBytes()); 
    }

    fetch(addUserURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "firstName": title,
        "lastName": text,
        "password": level,
        "username": fandom,
        "postedDate" new Date(),
        "dateOfBirth": base64.encodeToString(files[0]) 
      })
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
  function dynamicFandomNames() {
      fetch("http://localhost:8080/account/userFandoms", {
        method: 'get',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "username": "A"
        })
      })
        .then((response) => {
          switch (response.status) {
          case 200:
            return response.json();
          default:
            alert("Something went wrong");
          }
        })
        .then(data => {
          let fandomsFromApi = data.map(fandom => { return {value: fandom} })
          this.setState({ teams: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi) });
        }).catch(error => {
          console.log(error);
        });
*/
  const classes = useStyles();

  const { values, handleChange, handleSubmit } = useForm(null, initialState);

 
  const handleResetClose = event => {
    values.imgURL = '';
    values.text = '';
    values.title = '';
    values.level = '';
    values.fandom = '';
    values.type = '';
    handleChange(event);
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
                      inputProps={{
                        name: 'level'
                      }}
                      >
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl 
                    variant="outlined"  
                    fullWidth >
                      <InputLabel>
                        Fandom
                      </InputLabel>
                      <Select
                      onChange={handleChange}
                      value={values.fandom}
                      required
                      labelWidth={60}
                      inputProps={{
                        name: 'fandom'
                      }}
                      >
                        <MenuItem value={"Fandom A"}>Fandom A</MenuItem>
                        <MenuItem value={"Fandom B"}>Fandom B</MenuItem>
                        <MenuItem value={"Fandom C"}>Fandom C</MenuItem>
                        <MenuItem value={"Fandom D"}>Fandom D</MenuItem>
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
                      inputProps={{
                        name: 'type'
                      }}
                      >
                        <MenuItem value={"General"}>General</MenuItem>
                        <MenuItem value={"Vendor/Artist"}>Vendor/Artist</MenuItem>
                        <MenuItem value={"Cosplayer"}>Cosplayer</MenuItem>
                      </Select>
                    </FormControl>
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
                    label="Image URL"
                    name="imgURL"
                    type="text"
                    value={values.imgURL}
                    onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} zeroMinWidth>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Text"
                    name="text"
                    type="text"
                    multiline
                    rows="4"
                    value={values.text}
                    onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="modal-footer" >
                <Button
                variant="contained"
                onClick={handleResetClose}
                className={classes.margin}
                color="default"
                >
                  Close
                </Button>
                <Button
                variant="contained"
                color="default"
                className={classes.margin}
                onClick={handleSubmit}
                >
                  POST
               </Button>
              </div>
            </div>
          </Grid>
        </Fade>
      </Modal>
    );
}