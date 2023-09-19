import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ txt, icon, to,children }) {
  return (
    <Link to={to} className="flex gap-1 items-center text-orange-200 ">
      {icon && <img src={icon} className="icn_xm"></img>}
      {children}
      {txt}
    </Link>
  );
}
