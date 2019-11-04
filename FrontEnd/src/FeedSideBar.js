import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Feed from './Post';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));


const user = 'tarannu7';

export default function SideBar() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [fandoms, setFandoms] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var getFandomListAPI = "http://localhost:8080/account/userFandoms?username=tarannu7";

   useEffect(() => {
      fetch(getFandomListAPI, {
         method: 'get',
         mode: 'cors',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
       }).then((response) => {

         switch (response.status) {
           case 200:
             alert("Post received");
             return response.json()
           default:
             alert("Something went wrong when retrieving post");
         }
       }).then((data) => {
//         console.log(data.fandomNames)
         setFandoms(data.fandomNames)
         console.log(fandoms)
       })
         .catch((err) => {
           alert(err);
         });

      },[]);

      var fandomsList = fandoms.map(function(name){
                      return <Tab label={name}  />;
                    })
      console.log(fandomsList);
  return (
    <React.Fragment>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        { fandomsList }
      </Tabs>

       {/*Call the post component with appropriate fandoms*/}
      <TabPanel value={value} index={0}>
        {/*<Feed fandomName={'Avengers'}/>*/}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/*<Feed fandomName={'Naruto'}/>*/}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/*<Feed fandomName={'Game of Thrones'}/>*/}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/*<Feed fandomName={'Fortnite'}/>*/}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/*<Feed fandomName={'PubG'}/>*/}
      </TabPanel>
      <TabPanel value={value} index={5}>
         {/*<Feed fandomName={'One Piece'}/>*/}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {/*<Feed fandomName={'Harry Potter'}/>*/}
      </TabPanel>
    </React.Fragment>
    );
  }