import { createContext, useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { getHandler } from "../axios/handler";
import Cookies from "js-cookie";
const tokenHeader = import.meta.env.VITE_TOKEN_HEADER;
export const authContext = createContext();

export default function Provider({ children }) {
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleOtherProjects, setOtherProjects] = useState(false)
  const [menuFolded, setMenuFolded] = useState(true);
  const [loginView, setLoginView] = useState(true);
  // 
  const notify = (msg) => toast(msg);

  function logout() {
    setUser(null)
    Cookies.remove(tokenHeader);
    getHandler("/auth/logout").then((data) => {
      console.log(JSON.stringify(data));
      notify("Dick Pulled Out Succesfully")
    })
      .catch((err) => {
        notify("Error while pulling the dick out")
      });

  }
  function setTheUser(data) {
    data ? setUser({ fullName: data.fullName, email: data.email, phone: data.phone }) : setUser(null);
  }

  useEffect(() => {
    setLoading(true);
    const cookie = Cookies.get(tokenHeader);
    if (cookie) {
      getHandler("/auth/profile")
        .then((data) => {
          setTheUser(data);
          setLoading(false);
        })
        .catch((err) => setError("error: ", err.message));
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        setTheUser,
        logout,
        loginView,
        setLoginView,
        visibleOtherProjects,
        setOtherProjects,
        menuFolded,
        setMenuFolded,
        error,
        loading,
        notify
      }}
    >
      {children}
    </authContext.Provider>
  );
}
