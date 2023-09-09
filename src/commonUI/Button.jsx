import React from "react";

export default function Button({ onClick, txt }) {
  return <button onClick={onClick}>{txt}</button>;
}
