import React from "react";
import { Link } from "react-router-dom";

export default function IfElse({ loginView, toggle }) {
  return (
    <>
      {loginView ? (
        <p className="mb-2.0 px-1.5">
          Already have an account ?
          <button
            onClick={() => toggle(!loginView)}
            className="ml-2 text-pr/600 bg-pr/200 px-3 py-0.125 rounded-md"
          >
            Login
          </button>
        </p>
      ) : (
        <p className="mb-2 px-1.5">
          Already have an account ?
          <button
            onClick={() => toggle(!loginView)}
            className="ml-2 text-pr/600 bg-pr/300 px-3 py-0.125 rounded-md"
          >
            Login
          </button>
        </p>
      )}
    </>
  );
}