import React from 'react';
import Header from './Header';
import SideBar from './FeedSideBar'
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home(props) {

  return (
    <div>
      <Header />
      <SideBar />
      {/* 
      Add future routes to feed and profile here like this:
      <Router>
        <Switch>
          <Route exact path={`${props.match.path}/feed`} component={} />
        </Switch>
      </Router> 
      */}
    </div>
  );
}
