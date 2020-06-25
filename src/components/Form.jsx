import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input how={props.how} />

      {props.how === "true" ? (
        <button type="submit">Login</button>
      ) : (
        <button type="submit">Register</button>
      )}
    </form>
  );
}

export default Form;
