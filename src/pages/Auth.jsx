import React, { } from "react";
import {  Outlet } from "react-router-dom";
import AuthOptions from "../components/AuthOptions";

export default function Auth() {

  return (
    <div className="w-full flex-grow grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-4 sm:px-3.0 px-1.0">
      <div className="col-span-1 flex flex-col rounded-md ">
        <Outlet />
      </div>

      <div className="col-span-1 flex flex-col gap-4 md:px-0 px-1.5 md:py-0 py-3 ">
        <AuthOptions />
      </div>
    </div>
  );
}
