import React, { useEffect } from "react";
import { authContext } from "../context/provider";
import Loader from "../components/Loader";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function ProtectedRoute({ accessTo, children }) {
  // 
  const { user, error, loading } = React.useContext(authContext);
  const navigate = useNavigate();
  const { state } = useLocation()
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

  useEffect(() => {
    if (user) {
      if (!authControl.user.includes(accessTo)) {
        navigate("/profile", { state: { authenticated: true } });
      }
    }
    if (!user) {
      if (!authControl.noUser.includes(accessTo)) {
        navigate("/auth", { state: { loginView: true, afterLogin: location.pathname } });
      }
    }

  }, [loading]);

  if (loading) {
    return <Loader />;
  } else {
    if (!user) {
      if (authControl.noUser.includes(accessTo)) {
        return <>{children}</>;
      }
      // else {
      //   navigate("/auth", { state: { loginView: true, afterLogin: location.pathname } });
      // }
    } else {
      if (authControl.user.includes(accessTo)) {
        return <>{children}</>;
      }
    }
  }
}
