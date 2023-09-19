import React from "react";
import Label from "../commonUI/Label";
//  icons
import eye from "../assets/icons/eye.svg";
import { Link } from "react-router-dom";
//
export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target["password"].value);
  }

  function passVisibility(e, id) {
    e.preventDefault();
    var x = document.getElementById(id);
    x.type === "password" ? (x.type = "text") : (x.type = "password");
    setTimeout(() => {
      x.type = "password";
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit} className="flex-grow flex flex-col border-2 gap-4 md:pt-10 pt-4 px-1.5 ">
      <div className="flex flex-col gap-2">
        <Label txt="Email" />
        <input
          type="email"
          required
          className="txt_inp_form"
          placeholder="Enter Your Email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Label txt="Password" />
            <button onClick={(e) => passVisibility(e, "password")}>
              <img src={eye} className="icn_sm" />
            </button>
          </div>
          <div>
            <Link to="/account-recovery">Forget Password ?</Link>
          </div>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          title="Must contain at least 6 or more characters"
          required
          placeholder="Set a password"
          className="txt_inp_form flex-grow"
        />
      </div>

      <button type="submit" className="btn_auth_submit ">
        Log in
      </button>
    </form>
  );
}
