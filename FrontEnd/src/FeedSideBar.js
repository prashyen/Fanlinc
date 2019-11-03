import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

const getFandomListAPI = "http://localhost:8080/account/userFandoms";

export default function SideBar() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [FandomList, setFandomList] = useState( [] );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //empty array - fetch api called once instead of everytime component is rendered
  useEffect(async () =>{
    const response = await fetch(getFandomListAPI);
  },[]);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >

        <Tab label="Avengers" {...a11yProps(0)} />
        <Tab label="Naruto" {...a11yProps(1)} />
        <Tab label="Game of Thrones" {...a11yProps(2)} />
        <Tab label="Fortnite" {...a11yProps(3)} />
        <Tab label="PubG" {...a11yProps(4)} />
        <Tab label="One Piece" {...a11yProps(5)} />
        <Tab label="Harry Potter" {...a11yProps(6)} />
      </Tabs>

       {/*Call the post component with appropriate fandoms*/}
      <TabPanel value={value} index={0}>
        Avengers posts
      </TabPanel>
      <TabPanel value={value} index={1}>
        Naruto posts
      </TabPanel>
      <TabPanel value={value} index={2}>
        Game of Thrones posts
      </TabPanel>
      <TabPanel value={value} index={3}>
        Fortnite posts
      </TabPanel>
      <TabPanel value={value} index={4}>
        PubG posts
      </TabPanel>
      <TabPanel value={value} index={5}>
        One Piece posts
      </TabPanel>
      <TabPanel value={value} index={6}>
        Harry Potter posts
      </TabPanel>
    </div>
    );
  }