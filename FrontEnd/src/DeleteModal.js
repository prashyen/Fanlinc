import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function ConfirmationModal(props) {
  const{open, handleClose, postedBy} = props;  

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
      <MuiDialogTitle >
        <Grid container>
      <Grid item xs={6} className={classes.title}>
      <Typography variant="h6">
         Delete Post</Typography>
      </Grid>
      <Grid item xs={6}>
        <IconButton  onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </Grid>
        </Grid>
    </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography>
            Are you sure want to delete this post?
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions padding="5px">
          <Button  onClick={handleClose} color="primary">
            Delete
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
