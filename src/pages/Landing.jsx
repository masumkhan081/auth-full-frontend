import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import AuthToggler from "../components/AuthToggler";
import IfElse from "../components/IfElse";
import AuthOptions from "../components/AuthOptions";

export default function Landing() {
  const [loginView, setLoginView] = useState(true);

  return (
    <div className="w-full flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 sm:px-0 px-2 pt-8">
        <div className="col-span-1 flex flex-col  border border-pr/300 rounded-md ">
          <AuthToggler current={loginView} toggle={setLoginView} />
          {loginView ? <Signup /> : <Login />}
          <IfElse loginView={loginView} toggle={setLoginView} />
        </div>
        <div className="col-span-1 flex flex-col gap-3 items-center justify-center md:py-0 py-3">
          <AuthOptions />
        </div>
      </div>
    </div>
  );
}
