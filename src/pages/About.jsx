import React from "react";
import Title from "../common-ui/Title";
import { HiMiniQueueList } from "react-icons/hi2";
import { FaBookReader, FaHandPointRight } from "react-icons/fa";
import { FaRightLong } from "react-icons/fa6";

export default function About() {
  const libs = [
    "mongoose",
    "nodemailer",
    "passport",
    "crypto",
    "custom modal",
    "custom hook",
  ];

  return (
    <div className="md:px-2.0 px-1.0 grid grid-cols-3 gap-4">
      <div className=" col-span-1 flex flex-col gap-4 justify-start items-start md:px-4 px-2">
        <Title
          txt="Whats Been Used"
          style="neutral_title "
          icon={<HiMiniQueueList className="mr-2" />}
        />

        <ul className="space-y-3 w-full">
          {libs.map((item, ind) => {
            return (
              <li
                key={ind}
                className="rounded-md  text-center font-semibold text-md text-green-800 bg-green-50"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <Title
          txt="Read Me"
          style="neutral_title"
          icon={<FaRightLong className="mr-2" />}
        />

        <div className="flex flex-col items-start justify-start gap-3">
          <ul className="space-y-2">
            <li className="font-bold">Objectives</li>
            <li>Implementation of a registration system using passport</li>
          </ul>

          <ul className="w-full space-y-1">
            <li className="font-bold">Strategies Implemented:</li>
            <li className="flex justify-between px-2 w-full rounded-md   bg-green-50">
              <span>Local (Email, Password)e</span>
              <span>Googlee</span>
              <span>Facebooke</span>
              <span>Githube</span>
              <span>Linkedine</span>
              <span>Yahooe</span>
              <span>Phone</span>
            </li>
          </ul>
          <ul className="w-full ">
            <li className="font-bold">Features:</li>
            <li className=" ">
              Email verification required before making a successfull login
            </li>
            <li className=" ">
              Email verification required before making a successfull login
            </li>
            <li className=" ">Email verification link encrypted</li>
            <li className=" ">
              Email verification required before making a successfull login
            </li>
            <li className=" ">
              Verification link only valid untill expiration time - which is
              generated and saved in db while sending the link to the user
            </li>
            <li className=" ">
              Email verification required before making a successfull login
            </li>
            <li className=" ">
              Account data saved in mongodb atlas, and shown after successfull
              login
            </li>
          </ul>
          <ul className="w-full space-y-1">
            <li className="font-bold">Notes:</li>
            <li>
              Just implementing the passport stratgies was the goal here. This
              project offers nothing further.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
