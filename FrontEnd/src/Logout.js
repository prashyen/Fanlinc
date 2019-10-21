import React from 'react';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{
   handleClick = () => {
        return <Redirect to='./Login'/>
    }
   render(){
   return (
       <div>
            <Button
               type="button"
               fullWidth
               variant="contained"
               onClick={this.handleClick}
               >
               Logout
             </Button>
       </div>
    )
   }
 }

 export default Logout