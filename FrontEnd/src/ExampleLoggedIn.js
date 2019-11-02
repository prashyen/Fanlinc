import React from 'react';
import Button from "@material-ui/core/Button";

export default function ExampleLoggedIn(props) {

  function submit() {
    props.setLoggedInUser(null);
    props.setLoggedIn(false);
  }

  return (
      <div>
        <p>Hello {props.loggedInUser}!</p>
        <Button onClick={() => submit()}>Logout</Button>
      </div>
  );
}