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
//import Hidden from '@material-ui/core/Hidden';
import { useState, useEffect } from 'react';
import moment from 'moment'
import { Copyright, theme, useStylesPosts } from './materialUIStyle';

export default function Feed(props) {
  const [Posts, setPosts] = useState([]);
  const classes = useStylesPosts();
  let filterPostsURL = `http://localhost:8080/post/filteredPosts?fandomName=${props.filterParam}&level=noFilter&type=noFilter`;
  //set up api url for different type of feed
  if (props.postsType === "user"){
    filterPostsURL = `http://localhost:8080/post/postByUser?userName=${props.filterParam}`;
   }
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
          return response.json()
        case 400:
          throw new Error('Fandom not found');
        case 404:
          throw new Error('Invalid type or level');
        default:
          throw new Error('Error occurred while retrieving posts');
      }
    }).then((data) => {
        setPosts(data.posts)
      })
    .catch((err) => {
      alert(err);
    });
   })

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
                          Posted by: {post.postedBy}  Fandom: {post.fandomName} Level: {post.level} Type: {post.type} {moment(post.postedTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.content}
                        </Typography>
                      </CardContent>
                    </div>
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