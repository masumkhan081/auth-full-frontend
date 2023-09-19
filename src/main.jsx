import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);

// axios wrapper, login page, otp page, pass-rest page, new-pass page, footer, about-project page formik & validation,
