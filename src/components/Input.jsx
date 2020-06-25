import React from "react";

function Input(props) {
  return (
    <div>
      <input type="text" placeholder="name or email" />
      <input type="password" placeholder="Password" />

      {props.how === "false" && (
        <input type="password" placeholder="Confirm Password" />
      )}
    </div>
  );
}

export default Input;
