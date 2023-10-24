import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getHandler } from "../axios/handler";
import Cookies from "js-cookie";
const tokenHeader = import.meta.env.VITE_TOKEN_HEADER;
export const authContext = createContext();

export default function Provider({ children }) {
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    // let cookie = document.cookie.split(";");
    // cookie = cookie.find((row) => row.startsWith(tokenHeader + "="));
    // cookie = cookie ? cookie.split("=")[1] : null;
    const cookie = Cookies.get(tokenHeader);
    if (cookie) {
      getHandler("/auth/profile")
        .then((data) => {
          setUser({ name: data.name, email: data.email, phone: data.phone });
          setLoading(false);
        })
        .catch((err) => {});
    } else {
      setUser(null);
      setLoading(false);
    }

    //
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        error,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
