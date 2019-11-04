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
import { Copyright, theme, useStylesPosts } from './materialUIStyle';

const featuredPosts = [
  {
    title: 'Post title 6',
    date: 'Nov 12',
    description:
      'This will be Fanlinc post 6 example (longer post) with supporting text, images, links or other sources below:'
      + 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
      +'45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up'
      +'one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,'
      +'discovered the undoubtable source'
  },
  {
    title: 'Post title 5',
    date: 'Nov 11',
    description:
      'This will be Fanlinc post 5 with supporting texts (shorter post)'
  },
{
  title: 'Post title 4',
  date: 'Nov 3',
  description:
    'This will be Fanlinc post 4 with supporting texts, images, links or other sources below',
},
{
  title: 'Post title 3',
  date: 'Nov 2',
  description:
    'This will be Fanlinc post 3 with supporting texts, images, links or other sources below',
  },
 {
   title: 'Post title 2',
   date: 'Oct 19',
   description:
     'This will be Fanlinc post 2 with supporting texts, images, links or other sources below',
 },
 {
   title: 'Post title 1',
   date: 'Oct 17',
   description:
     'This will be Fanlinc post 1 with supporting texts, images, links or other sources below',
 }
];
//connecting api to backend

//this is just a test
export default function Feed(fandomName) {
  const filterPostsURL = `localhost:8080/post/filteredPosts?fandomName=${props.fandomName}&level=noFilter&type=General`;
  const classes = useStylesPosts();
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [date, setDate] = React.useState('')
  const [posts, setPosts] = useState('');

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
      setPosts(response.body)
      switch (response.status) {
        case 200:
          alert("Post received");
          break;
        default:
          alert("Something went wrong when retrieving post");
      }
    }).catch(err => {
      alert("Error sending the request. ", err);
    });
   });
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
            {Posts.map(post => (
              <Grid item key={post.id} xs={12} >
                {/* creating card for each of the post */}
                <CardActionArea onClick = {() => clickHandleOpen(post.title, post.content, post.postedTime)}>
                  <Card className={classes.card} >
                    <div className={classes.cardDetails} >
                      <CardContent >
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.postedTime}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.content}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
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
      {/* dialog section*/}
      <Dialog open={open} onClose={clickHandleClose}>
        <DialogTitle > {title} </DialogTitle>
        <DialogContent>
            <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={clickHandleClose} color="primary">
             Close
         </Button>
         </DialogActions>
      </Dialog>
       {/* end dialog*/}
    </React.Fragment>
  );
}