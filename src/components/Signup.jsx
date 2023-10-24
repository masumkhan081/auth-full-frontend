import React, { useState } from "react";
import Input from "../common-ui/Input";
import Label from "../common-ui/Label";
// data
import countryDials from "../data/country_dial_info.json";
//  icons
import eye from "../assets/icons/eye.svg";
import Login from "./Login";
import If from "./IfElse";
import { postHandler } from "../axios/handler";
//
export default function Signup() {
  //
  const [fullName, setFullName] = useState(localStorage.getItem("fullName") || "");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target["password"].value);
    postHandler("/auth/register",{
      fullName:"mk 081 whtvr !"
    })
  }

  function passVisibility(e, id) {
    e.preventDefault();
    var x = document.getElementById(id);
    x.type === "password" ? (x.type = "text") : (x.type = "password");
    setTimeout(() => {
      x.type = "password";
    }, 2000);
  }

  function setTestData() {
    setEmail("email@gmail.com");
    setPassword("123456");
  }

  function setterName(e) {
    setFullName(e.target.value);
    localStorage.setItem("fullName", e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-grow flex flex-col justify-center rounded-md border-4 border-t-0 border-orange-900 gap-4 pt-6 pb-3 px-1.5"
    >
      <div className="flex flex-col gap-1">
        <Label txt="Full Name" />
        <Input
          type="text"
          pc="Enter Full Name"
          value={fullName}
          onChange={setterName}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Email" />
        <Input
          type="Email"
          pc="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Phone" />
        <div className="flex gap-1 justify-between">
          <select
            onChange={(e) => {
              setCountryCode(e.target.value);
            }}
            className="border border-br/300 rounded-md outline-none"
          >
            {countryDials.map((country, ind) => {
              return (
                <option key={ind} value={country.dial_code}>
                  {country.code + ", " + country.dial_code}
                </option>
              );
            })}
          </select>
          <Input
            type="text"
            pc="Enter your phone number"
            required={true}
            style="flex-grow"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Password" />
        <div className="flex gap-1 justify-between">
          {/* <Input type="text" pc="" style="flex-grow" /> */}
          <Input
            type="password"
            title="Must contain at least 6 or more characters"
            required={true}
            pc="Set a password"
            style=" flex-grow"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={(e) => passVisibility(e, "password")}>
            <img src={eye} className="icn_sm" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label txt="Confirm Password" />
        <div className="flex gap-1 justify-between">
          <Input
            type="password"
            title="Must contain at least 6 or more characters"
            required={true}
            pc="Password again"
            style=" flex-grow"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button onClick={(e) => passVisibility(e, "confirmpassword")}>
            <img src={eye} className="icn_sm" />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={setTestData} className=" btn_test_data ">
          Test Data
        </button>
        <button type="submit" className="btn_auth_submit trans_eio">
          Sign Up
        </button>
      </div>
    </form>
  );
}
