import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../assets/icons/home.jsx";
import list from "../assets/icons/list3.png";
import info from "../assets/icons/info2.svg";
import signup from "../assets/icons/signup.png";
import logout from "../assets/icons/logout.png";
import login from "../assets/icons/login.png";
import auth from "../assets/icons/auth.png";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import CustomLink from "../commonUI/CustomLink";
import Button from "../commonUI/Button";
import ProjectList from "./ProjectList";
import { BsInfoCircle, BsList } from "react-icons/bs";

export default function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const [menuFolded, setMenuFolded] = useState(true);
  const navigate = useNavigate();

  const navLinks = [
    {
      text: "About",
      icon: info,
      click: () => {
        navigate("/about");
      },
    },
    {
      text: "Other Projects",
      icon: list,
      click: () => {
        setDropDown(!dropDown);
      },
    },
    {
      text: "Sign Up",
      icon: signup,
      click: () => {
        toAuthForm(false);
        setMenuFolded(true);
      },
    },
    {
      text: "Log In",
      icon: login,
      click: () => {
        toAuthForm(true);
        setMenuFolded(true);
      },
    },
    {
      text: "Log Out",
      icon: logout,
      click: () => {
        toAuthForm(false);
        setMenuFolded(true);
      },
    },
  ];

  function toAuthForm(loginView) {
    navigate("/auth", { state: { loginView } });
  }

  const styLogic = () =>
    menuFolded
      ? "sm:flex hidden  sm:grow  gap-4 justify-end items-center text-orange-800 "
      : "sm:hidden block absolute top-[52px] left-[10px] right-[10px] rounded-md  h-auto flex flex-col gap-4 bg-orange-200 px-4 py-4";

  return (
    <div className=" sm:px-3.0 px-1.0  flex justify-between items-center py-3 bg-orange-950 text-pr/600 font-averia font-semibold text-1/1.25 shadow-sm shadow-orange-200 rounded-b-md">
      <div className="">
        <CustomLink to="/" txt="Complete Auth System">
          {/* <img className="icn_sm mb-1 " src={home}></img> */}
          <Home/>
        </CustomLink>
      </div>
      <div className={styLogic()}>
        {navLinks.map((link) => {
          return (
            <Button
              onClick={() => link.click()}
              txt={link.text}
              icon={link.icon}
              style={"btn_nav"}
            />
          );
        })}

        <div className={dropDown ? "nav_drop_down" : `hidden`}>
          <ProjectList
            onClose={() => {
              setDropDown(false);
              setMenuFolded(true);
            }}
          />
        </div>
      </div>
      <div className="sm:hidden block">
        <Button
          icon={menuFolded ? menu : close}
          onClick={() => setMenuFolded(!menuFolded)}
        />
      </div>
    </div>
  );
}
