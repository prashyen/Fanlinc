import React from 'react';
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
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';

var level ='';
var title ='';
var text ='';
var fandom ='';


export default function PostModal({open, handleOpen, handleClose}){

  const [imgopen, setOpen] = React.useState(false);

  const handleimgOpen = () => {
    setOpen(true);
  };

  const handleimgClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const [level, setlvl] = React.useState('');
  const handlelvlChange = event => {
    setlvl(event.target.value);
  };

  const [fandom, setfandom] = React.useState('');
  const handlefandomChange = event => {
    setfandom(event.target.value);
  };

  const [title, settitle] = React.useState('');
  const handletitleChange = event => {
    settitle(event.target.value);
  };

  const [text, settext] = React.useState('');
  const handletextChange = event => {
    settext(event.target.value);
  };

  const handleResetClose = event => {
    setfandom('');
    setlvl('');
    settitle('');
    settext('');
    handleClose();
  };


  if(open){
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
                <h4>Create Post</h4>
              </div>
              <div className="modal-body">
                <Grid container spacing={1}>
                <Grid container spacing={3} >
                <Grid item xs={4}>
                  <FormControl className={classes.formControl} variant="outlined" fullWidth>
                     <InputLabel>
                       Level
                     </InputLabel>
                     <Select
                      onChange={handlelvlChange}
                      value={level}
                      required
                      labelWidth={60}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                      <FormControl 
                       variant="outlined"  
                       minWidth={40}  
                       className={classes.formControl}
                       fullWidth >
                        <InputLabel>
                           Fandom
                        </InputLabel>
                        <Select
                         onChange={handlefandomChange}
                         value={fandom}
                         required
                         labelWidth={60}
                         >
                           <MenuItem value={"Fandom A"}>Fandom A</MenuItem>
                           <MenuItem value={"Fandom B"}>Fandom B</MenuItem>
                           <MenuItem value={"Fandom C"}>Fandom C</MenuItem>
                           <MenuItem value={"Fandom D"}>Fandom D</MenuItem>
                        </Select>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4}  fullWidth  className={classes.btnmargin}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.btnheight}
                        startIcon={<CloudUploadIcon />}
                        onClick={handleimgOpen}
                        size="large"
                        fullWidth
                      >
                        Upload Image
                      </Button>
                        <DropzoneDialog
                            open={imgopen}
                            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                            showPreviews={true}
                            maxFileSize={5000000}
                            onClose={handleimgClose}
                            onSave
                        />      
                      </Grid>
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              label="Title"
                              name="title"
                              type="text"
                              value={title}
                              onChange={handletitleChange}
                          />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="Text"
                          name="text"
                          type="text"
                          multiline
                          rows="4"
                          value={text}
                          onChange={handletextChange}
                      />
                      </Grid>
                      </Grid>
                  </div>
                  <div className="modal-footer" >
                  <Button
                    variant="contained"
                    onClick={handleResetClose}
                    className={classes.margin}
                    color="secondary"
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.margin}
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
    return (null);
}