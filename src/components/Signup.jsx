import React, { useState } from "react";
import Input from "../commonUI/Input";
import Label from "../commonUI/Label";
// data
import countryDials from "../data/country_dial_info.json";
//  icons
import eye from "../assets/icons/eye.svg";
import Login from "./Login";
import If from "./IfElse";

export default function Signup() {
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
    <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-center gap-4 pt-6 px-1.5">
      <div className="flex flex-col gap-1">
        <Label txt="Full Name" />
        <Input type="text" pc="Enter Full Name" />
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Email" />
        <Input type="text" pc="Enter Your Email" />
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Phone" />
        <div className="flex gap-1 justify-between">
          <select className="border border-pr/300 rounded-md outline-none">
            {countryDials.map((country, ind) => {
              return (
                <option key={ind}>
                  {country.code + ", " + country.dial_code}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="phone"
            title="Required phone number"
            required
            className="txt_inp_form flex-grow"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Password" />
        <div className="flex gap-1 justify-between">
          {/* <Input type="text" pc="" style="flex-grow" /> */}
          <input
            id="password"
            name="password"
            type="password"
            title="Must contain at least 6 or more characters"
            required
            placeholder="Set a password"
            className="txt_inp_form flex-grow"
          />
          <button onClick={(e) => passVisibility(e, "password")}>
            <img src={eye} className="icn_sm" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Confirm Password" />
        <div className="flex gap-1 justify-between">
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            title="Must contain at least 6 or more characters"
            required
            placeholder="Password again"
            className="txt_inp_form flex-grow"
          />
          <button onClick={(e) => passVisibility(e, "confirmpassword")}>
            <img src={eye} className="icn_sm" />
          </button>
        </div>
      </div>

      <button type="submit" className="btn_auth_submit trans_eio">
        Sign Up
      </button>
    </form>
  );
}
