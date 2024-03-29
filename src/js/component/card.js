import React, { useEffect } from "react";
import "../../styles/home.css";
// import { Context } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({ name, gender }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="."
        className="card-img-top mx-0"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text my-0">
          <span>Gender:{gender}</span>
        </p>
        <a href="#" className="btn btn-primary">
          Learn more!
        </a>
        <button
          className="btn btn-outline-warning"
          onClick={() => actions.addFavourite()}
        >
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;