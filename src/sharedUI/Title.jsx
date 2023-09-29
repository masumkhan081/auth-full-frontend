import React from "react";

export default function Title({ txt, icon, children }) {
  return (
    <p className="title flex justify-between items-center">
      <span className="flex-grow">{txt}</span>
      <>{children}</>
    </p>
  );
}
