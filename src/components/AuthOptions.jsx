import React from "react";
import google from "../assets/icons/google.svg";
import facebook from "../assets/icons/facebook.svg";

export default function AuthOptions() {
  return (
    <>
      <p className="font-titan font-light text-md mb-6">Or, Sign in with</p>
      <button className="bg-pr/100 rounded-full">
        <img src={google} className="icn_md m-1" />
      </button>
      <button className="bg-pr/100 rounded-full">
        <img src={facebook} className="icn_md m-1" />
      </button>
    </>
  );
}
