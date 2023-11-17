import React, { useContext, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useLocation } from "react-router-dom";
import { authContext } from "../context/provider";
import Button from "../common-ui/Button";

export default function AuthForms() {
  //
  const { loginView, setLoginView } = useContext(authContext);
  const location = useLocation();
  const status = location.state?.loginView;
  // 
  const activeStyle = (sign) =>
    loginView == sign
      ? "btn_auth_toggler border-x-8  mt-1  border-green-200 shadow-md shadow-black "
      : "btn_auth_toggler border-x-8  mb-1  border-orange-900";

  useEffect(() => {
    setLoginView(status);
  }, [status]);
  //
  return (
    <>
      <div className="  rounded-md ">
        <Button
          txt="Log In"
          onClick={() => setLoginView(true)}
          style={` ${activeStyle(true)}`}
        />

        <Button
          txt="Sign Up"
          onClick={() => setLoginView(false)}
          style={`   ${activeStyle(false)}`}
        />
      </div>
      {loginView ? <Login /> : <Signup />}
      {/* <IfElse loginView={loginView} toggle={setLoginView} /> */}
    </>
  );
}
