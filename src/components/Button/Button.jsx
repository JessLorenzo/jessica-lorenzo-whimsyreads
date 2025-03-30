import "./Button.scss";

import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button className="button" type="submit" onClick={onClick}>
      {children}
    </button>
  );
}
