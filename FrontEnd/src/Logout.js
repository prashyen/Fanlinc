import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{

   render(){
   return (
       <div>
             <Link to="/login"> Logout</Link>
       </div>
    )
   }
 }

 export default Logout