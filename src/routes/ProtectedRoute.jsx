import React from "react";
import { authContext } from "../context/provider";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute({ accessTo, children }) {
  const { user, error, loading } = React.useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  //
  const authControl = {
    user: ["profile"],
    noUser: ["auth"],
  };

  //   role-based access not applicable to this project
  const accessControl = {
    admin: ["", "", "", ""],
    manager: ["", "", ""],
    salesman: ["", ""],
    user: [""],
  };

  if (loading) {
    return <Loader />;
  } else {
    if (!user) {
      if (authControl.noUser.includes(accessTo)) {
        return <>{children}</>;
      } else {
        navigate("/auth/login", { state: { afterLogin: location.pathname } });
      }
    } else {
      if (authControl.user.includes(accessTo)) {
        return <>{children}</>;
      } else {
        navigate("/");
      }
    }
  }
}
