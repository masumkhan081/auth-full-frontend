import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import Provider from "./context/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
  <RouterProvider router={routes} />
  </Provider>
);

// axios wrapper, login page, otp page, pass-rest page, new-pass page, footer, about-project page formik & validation,
