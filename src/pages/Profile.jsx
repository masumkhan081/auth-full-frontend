import React from "react";
import { useEffect, useState } from "react";
import { getHandler } from "../axios/handler";

export default function Profile() {
  //
  const [x, setX] = useState("");

  useEffect(() => {
    getHandler("/auth")
      .then((data) => {
        setX(JSON.stringify(data));
      })
      .catch((err) => {
        setX(JSON.stringify(err));
      });
  }, []);

  return (
    <div>
      Profile
      {x}
    </div>
  );
}
