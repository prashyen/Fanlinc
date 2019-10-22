import React from 'react';

export default class LoginResponse extends React.Component {
       submitForm = () => {
         console.log()
//       fetch("/account/validateUser?username="+this.props.name + "&password="+this.props.password)
//            .then(res=>res.text())
//            .then(res=> this.setState({apiResponse :res}))
//            .catch(err=> err);
       }
       constructor(props){
        super(props)
       }
       componentDidMount() {
            this.submitForm();
            var elements = document.getElementById("myform");
            console.log(elements)
       }
  render(){

    return (
        <div/>
    );
  }
}