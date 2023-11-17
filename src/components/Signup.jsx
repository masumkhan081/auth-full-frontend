import React, { useState } from "react";
import Input from "../common-ui/Input";
import Label from "../common-ui/Label";
// data
import countryDials from "../static-data/country_dial_info.json";
//  icons
import eye from "../assets/icons/eye.svg";
import Login from "./Login";
import If from "./IfElse";
import { postHandler } from "../axios/handler";
import { useNavigate } from "react-router-dom";
//
export default function Signup() {

  const navigate = useNavigate();
  //
  const [fullName, setFullName] = useState(localStorage.getItem("fullName") || "");
  const [email, setEmail] = useState(localStorage.getItem("signupEmail") || "");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setContact] = useState(localStorage.getItem("phone") || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const initErrorState = {
    fullName: "",
    email: "",
    password: "",
    contact: ""
  }
  const [errors, setErrors] = useState(initErrorState);

  //
  function handleSubmit(e) {
    e.preventDefault();
    //   i need validation here: name must be included, password must be at least 6 char and both matches,  
    // email must maintain pattern
    if (fullName.length < 3) {
      setErrors({ ...initErrorState, fullName: "Too short" })
    }
    else if (password.length < 6) {
      setErrors({ ...initErrorState, password: "At least 6 chars" })
    }
    else if (password !== confirmPassword) {
      setErrors({ ...initErrorState, password: "Password doesn't match" })
    }

    else {
      postHandler("/auth/register", {
        fullName,
        email,
        password,
        phone,
      }).then((data) => {
        if (data.data.nextPage == false) {
          setErrors({ ...initErrorState, email: data.data.message })
        }
        if (data.data.nextPage) {
          navigate("/auth/verify-otp")
        }
      }).catch((err) => {
        console.log(err);
      })
    }

  }
  function passVisibility(e, id) {
    e.preventDefault();
    var x = document.getElementById(id);
    x.type === "password" ? (x.type = "text") : (x.type = "password");
    setTimeout(() => {
      x.type = "password";
    }, 2000);
  }
  function setTestData(e) {
    e.preventDefault();
    setterName({ target: { value: "Masumk" } })
    setterEmail({ target: { value: "masum498673@gmail.com" } });
    setterPhone({ target: { value: "01833347848" } })
    setPassword("123456");
    setConfirmPassword("123456");
  }
  function setterName(e) {
    setFullName(e.target.value);
    localStorage.setItem("fullName", e.target.value);
  }
  function setterEmail(e) {
    setEmail(e.target.value);
    localStorage.setItem("signupEmail", e.target.value);
  }
  function setterPhone(e) {
    setContact(e.target.value);
    localStorage.setItem("phone", e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-grow flex flex-col justify-center rounded-md border-4 border-t-0 border-orange-900 gap-4 pt-6 pb-3 px-1.5"
    >
      <div className="flex flex-col">
        <p className="flex justify-between"> <Label txt="Full Name" /> <span className="text-yellow-600 flex justify-end">{errors.fullName}</span></p>

        <Input
          required={true}
          type="text"
          pc="Enter Full Name"
          value={fullName}
          onChange={setterName}
        />

      </div>
      <div className="flex flex-col gap-1">
        <p className="flex justify-between"> <Label txt="Email" /> <span className="text-yellow-600 flex justify-end">{errors.email}</span></p>
        <Input
          required={true}
          type="Email"
          pc="Enter Your Email"
          value={email}
          onChange={setterEmail}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex justify-between"> <Label txt="Phone" /> <span className="text-yellow-600 flex justify-end">{errors.phone}</span></p>
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
            required={true}
            type="text"
            pc="Enter your phone number"
            style="flex-grow"
            value={phone}
            onChange={setterPhone}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">

        <p className="flex justify-between"> <Label txt="Password" /> <span className="text-yellow-600 flex justify-end">{errors.password}</span></p>
        <div className="flex gap-1 justify-between">
          {/* <Input type="text" pc="" style="flex-grow" /> */}
          <Input
            id="password"
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
            id="confirmpassword"
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
