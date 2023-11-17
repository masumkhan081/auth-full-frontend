import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import CustomLink from "../common-ui/CustomLink";
import Button from "../common-ui/Button";
import ProjectList from "./ProjectList";
import { BsInfoCircle, BsList, BsListNested, BsInfoLg } from "react-icons/bs";
import { BiSolidUserPlus, BiUserPlus, BiLogInCircle } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { getHandler } from "../axios/handler";
import Loader from "./Loader";
import { authContext } from "../context/provider";
const tokenHeader = import.meta.env.VITE_TOKEN_HEADER;

export default function Nav() {
  // 
  const { user, logout, visibleOtherProjects, setOtherProjects, menuFolded, setMenuFolded, error, loading } = useContext(authContext);
  const navigate = useNavigate();

  function toAuthForm(loginView) {
    navigate("/auth", { state: { loginView } });
  }

  const styLogic = () =>
    menuFolded
      ? "sm:flex hidden  sm:grow  gap-4 justify-end items-center text-green-800 "
      : "sm:hidden block absolute top-[52px] left-[10px] right-[10px] rounded-md  h-auto flex flex-col gap-4 bg-green-200 border border-br/600 px-4 py-4";

  return (
    <div className=" sm:px-3.0 px-1.0 flex justify-between items-center py-3 bg-green-100 teal-950 font-averia font-semibold text-1/1.25 shadow-sm shadow-orange-200 rounded-b-md">
      <div className="">
        <CustomLink to="/" txt="Complete Auth System" style="brand">
          <AiFillHome className="w-1.5 h-1.5 text-green-900" />
        </CustomLink>
      </div>
      <div className={styLogic()}>
        <Button
          onClick={() => setOtherProjects(!visibleOtherProjects)}
          txt="Other Projects"
          icon={<BsListNested className="nav_icn" />}
          style={"btn_nav"}
        />
        {!user && (
          <Button
            onClick={() => {
              toAuthForm(true);
              setMenuFolded(true);
            }}
            txt="Log In"
            icon={<BiLogInCircle className="nav_icn" />}
            style={"btn_nav"}
          />
        )}
        {!user && (
          <Button
            onClick={() => {
              toAuthForm(false);
              setMenuFolded(true);
            }}
            txt="Sign Up"
            icon={<BiUserPlus className="nav_icn" />}
            style={"btn_nav"}
          />
        )}
        {user && (
          <Button
            onClick={() => {
              logout();
              toAuthForm(true);
            }}
            txt="Log Out"
            icon={<RiLogoutCircleRLine className="nav_icn" />}
            style={"btn_nav"}
          />
        )}

        <div className={visibleOtherProjects ? "nav_drop_down" : `hidden`}>
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
          icon={
            menuFolded ? (
              <GiHamburgerMenu className="nav_icn" />
            ) : (
              <AiOutlineClose className="nav_icn" />
            )
          }
          onClick={() => setMenuFolded(!menuFolded)}
        />
      </div>
    </div>
  );
}
