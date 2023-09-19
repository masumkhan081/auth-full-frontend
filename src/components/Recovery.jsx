import React from "react";
import Label from "../commonUI/Label";

export default function Recovery() {
  const handleSubmit = () => {};
  return (
    <>
      <p className="btn_auth_toggler">Account Recovery</p>

      <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-center gap-4 pt-6 px-1.5">
        <div className="flex flex-col gap-2">
          <Label txt="Email" />

          <input
            type="email"
            required
            className="txt_inp_form"
            placeholder="Enter Your Email"
          />
        </div>

        <button type="submit" className="btn_auth_submit trans_eio">
          Submit
        </button>
      </form>
    </>
  );
}
