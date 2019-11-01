import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Fanlinc'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: 'Grey',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  card: {
     display: 'block',
     width: '55vw',
     transitionDuration: '0.3s',
     height: '15vw'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const featuredPosts = [
  {
    title: 'Featured post 6',
    date: 'Nov 12',
    description:
      'This will be Fanlinc post 6 example of longer post with supporting text, images, links or other sources below:'
      + 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
      +'45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up'
      +'one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,'
      +'discovered the undoubtable source'
  },
  {
    title: 'Post title 5',
    date: 'Nov 11',
    description:
      'This will be Fanlinc post 5 with supporting text, shorter post'
  },
{
  title: 'Featured post 4',
  date: 'Nov 3',
  description:
    'This will be Fanlinc post 4 with supporting text, images, links or other sources below',
},
{
  title: 'Post title 3',
  date: 'Nov 2',
  description:
    'This will be Fanlinc post 3 with supporting text, images, links or other sources below',
  },
 {
   title: 'Featured post 2',
   date: 'Oct 19',
   description:
     'This will be Fanlinc post 2 with supporting text, images, links or other sources below',
 },
 {
   title: 'Post title 1',
   date: 'Oct 17',
   description:
     'This will be Fanlinc post 1 with supporting text, images, links or other sources below',
 }
];




export default function Blog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [date, setDate] = React.useState('')

  const clickHandleOpen = (title, content, date) => {
    setOpen(true)
    setTitle(title)
    setContent(content)
    setDate(date)
  };

  const clickHandleClose = () => {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

          <Grid container direction="column" alignItems="center" spacing= {2} style={{ minHeight: '80vh' }}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} >
                <CardActionArea onClick = {() => clickHandleOpen(post.title, post.description, post.date)}>
                  <Card className={classes.card} >
                    <div className={classes.cardDetails} >
                      <CardContent >
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" noWrap={true} paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
                <Dialog
                  open={open}
                  onClose={clickHandleClose}
                >

                <DialogTitle >{title}</DialogTitle>
                <DialogContent>
                  <DialogContentText>{content}</DialogContentText>
                </DialogContent>
                   <DialogActions>
                     <Button onClick={clickHandleClose} color="primary">
                        Close
                     </Button>
                    </DialogActions>
                </Dialog>
              </Grid>


            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} >
          </Grid>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Fanlinc
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Linking Fans Together
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}