import React, { useState } from "react";
import Label from "../common-ui/Label";
import Input from "../common-ui/Input";
import Button from "../common-ui/Button";
import { postHandler } from "../axios/handler";

export default function Recovery() {

  const [recoveryEmail, setRecoveryEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postHandler("/auth/recovery", { email: recoveryEmail })
      .then((data) => {
        if (data.status == 200) {
          alert("A recovery mail has been sent")
        }
        else {
          alert("Failed sending recovery mail")
        }
      })
      .catch((err) => {
        alert("Error sending recovery mail")
      });
  };
  return (
    <>
      <p className="btn_auth_toggler">Account Recovery</p>

      <form
        onSubmit={handleSubmit}
        className="flex-grow flex flex-col justify-center gap-4 pt-6 px-1.5"
      >
        <div className="flex flex-col gap-2">
          <Label txt="Email masumkhan081@gmail.com" />

          <Input
            type="email"
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
            required={true}
            style="txt_inp_form"
            pc="Enter Your Email"
          />
        </div>

        <Button type="submit" txt="Submit" style="btn_auth_submit trans_eio" />
      </form>
    </>
  );
}
