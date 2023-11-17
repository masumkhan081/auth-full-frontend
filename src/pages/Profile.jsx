import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { getHandler } from "../axios/handler";
import { useLocation } from "react-router-dom";
import { authContext } from "../context/provider";

export default function Profile() {
  // 
  const location = useLocation();
  const authenticated = location.state?.authenticated;
  // 
  const { user, setTheUser } = useContext(authContext);
  //


  useEffect(() => {
    getHandler("/auth/profile")
      .then((data) => {
        data = data.data;
        setTheUser({ fullName: data.fullName, email: data.email, phone: data.phone })
      })
      .catch((err) => {
        setX(JSON.stringify(err));
      });
  }, []);

  return (
    <div className="container flex-grow sm:mx-auto mx-2 px-4 bg-slate-100 rounded-md flex flex-col gap-3   ">
      <span className="bg-teal-700 text-slate-200  shadow-sm px-4 py-1 rounded-lg">Profile Info</span>

      <ul className="space-y-2 ">
        <li><span className="text-teal-800 drop-shadow-lg px-2 rounded-lg">Full Name:</span>{user.fullName}</li>
        <li><span className="text-teal-800 drop-shadow-lg px-2 rounded-lg">Email:</span>{user.email}</li>
        <li><span className="text-teal-800 drop-shadow-lg px-2 rounded-lg">Phone:</span>{user.phone}</li>
      </ul>
    </div>
  ); 0
}
