import React from "react";
import Button from "../sharedUI/Button";

export default function AuthToggler({ loginView, toggle }) {

  console.log(">>   ",loginView);
  const activeStyle = (sign) =>
    loginView == sign
      ? "btn_auth_toggler border-x-8  mb-1  border-orange-900 "
      : "btn_auth_toggler border-x-8  mt-1  border-orange-900";

  return (
    <div className="grid grid-cols-2  rounded-md ">
      <Button
        txt="Log In"
        onClick={() => toggle(true)}
        style={` ${activeStyle(true)}`}
      />

      <Button
        txt="Sign Up"
        onClick={() => toggle(false)}
        style={`   ${activeStyle(false)}`}
      />
    </div>
  );
}
