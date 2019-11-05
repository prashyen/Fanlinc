
import { makeStyles } from '@material-ui/core/styles';

  export const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formControl: {
        marginLeft: theme.spacing(0.5),
        marginTop: theme.spacing(0.5),
        minWidth: 80,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      color: "#ffffff",
      backgroundColor: "#1D1E3D",
      fontColor: "white",
      '&:hover': {
        backgroundColor: "#242775",
      },
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    }
}));