import React from "react";
import Form from "./Form";

const userIsRegistered = false;

function App(form) {
  return (
    <div className="container">
      {userIsRegistered ? <Form how="true" /> : <Form how="false" />}
    </div>
  );
}

export default App;
