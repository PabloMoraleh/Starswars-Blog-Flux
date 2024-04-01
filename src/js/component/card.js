import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Card = ({ name }) => {
  const {store, actions} = useContext(Context)
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
          <span>Gender:</span>
          <span>Hair-color:</span>
          <span>Eye color:</span>
        </p>
        <a href="#" className="btn btn-primary">
          Learn more!
        </a>
        <button
          className="btn btn-outline-warning"
          onClick={() => actions.addFavorite(name)}
        >
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;