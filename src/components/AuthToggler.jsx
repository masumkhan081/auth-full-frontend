import React from "react";

export default function AuthToggler({ loginView, toggle }) {
  const activeStyle = (sign) =>
    loginView == sign ? " shadow-lg shadow-orange-400 mb-0 " : "";

  return (
    <div className="grid grid-cols-2 border-8 border-orange-900 bg-orange-900">
      <button
        onClick={() => toggle(true)}
        className={`btn_auth_toggler ${activeStyle(true)}`}
      >
        Log In
      </button>
      <button
        onClick={() => toggle(false)}
        className={`btn_auth_toggler   ${activeStyle(false)}`}
      >
        Sign Up
      </button>
    </div>
  );
}
