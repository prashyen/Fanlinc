import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Copyright, theme, useStylesPosts } from './materialUIStyle';

export default function Feed(props) {
  const filterPostsURL = `localhost:8080/post/filteredPosts?fandomName=${props.fandomName}&level=noFilter&type=noFilter`;
  const classes = useStylesPosts();

  useEffect(() => {
    fetch(filterPostsURL, {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      //update state post content
      switch (response.status) {
        case 200:
          setPosts(response.body)
          break;
        default:
          alert("Something went wrong when retrieving post");
      }
    }).catch(err => {
      alert("Error sending the request. ", err);
    });
   });

  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center" spacing= {2} style={{ minHeight: '80vh' }}>
            {Posts.map(post => (
              <Grid item key={post.id} xs={12} >
                {/* creating card for each of the post */}
                <CardActionArea>
                  <Card className={classes.card} >
                    <div className={classes.cardDetails} >
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Posted by: {post.postedBy}  Fandom: {post.fandomName} Level: {post.level} Type: {post.type} Date:{post.postedTime}
                        </Typography>
                        <Typography variant="subtitle1" noWrap={true} paragraph>
                          {post.content}
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={post.displayPhotoUrl}
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
                {/* end Card */}
              </Grid>
            ))}
          </Grid>
      </Container>
    </React.Fragment>
  );
}