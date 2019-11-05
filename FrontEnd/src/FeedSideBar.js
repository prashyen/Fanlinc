import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Feed from './Feed';

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


function TabPanel(props) {
  const { children, fandomName, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Feed filterParam={fandomName} postsType="feed" />
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  fandomName: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


//for testing
const user = 'tarannu7';

export default function SideBar(currentUser) {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [fandoms, setFandoms] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var getFandomListAPI = "http://localhost:8080/account/userFandoms?username=${currentUser}";

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
       })
       .then(data => {
           setFandoms(data.fandomNames);
        }).catch((err) => {
           alert(err);
         });

      },[]);

  return (
    <React.Fragment>
    <CssBaseline />

      {/* Feed Body */}
      <Grid container lg >

        {/* Sidebar Start */}
        {/* Grid has 12 columns width - sidebar:feed = 3:9 */}
        <Grid item sm={2} container direction="column" style={{backgroundColor: '#213972', color: 'white', height: '80vw'}}>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              className={classes.tabs}
            >
            { fandoms.map((fandomName) => <Tab label={fandomName} {...a11yProps(fandoms.indexOf(fandomName))}/>) }
          </Tabs>
        </Grid>
        {/* Sidebar End */}

        {/* Feed Start */}
        <Grid item sm={10} container direction="column" alignItems="center" alignContent="space-around" style={{backgroundColor: 'white', minheight: '80vw'}}>
            {fandoms.map((fandomName) =>
            <TabPanel fandomName={fandomName} value={value} index={fandoms.indexOf(fandomName)}/>
            )}
        </Grid>
        {/* Feed End */}
      </Grid>
    </React.Fragment>
    );
  }