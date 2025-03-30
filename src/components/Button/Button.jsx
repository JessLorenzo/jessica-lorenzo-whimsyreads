import { Link } from "react-router-dom";
import "./Button.scss";

import React from "react";

export default function Button({ children, onClick }) {
  return (
    <Link to="/" className="button" type="submit" onClick={onClick}>
      {children}
    </Link>
  );
}
