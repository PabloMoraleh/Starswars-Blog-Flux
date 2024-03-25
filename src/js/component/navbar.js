import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      Logo should be here
        <div>
		<button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
      </div>
    </nav>
  );
};
