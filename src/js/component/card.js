import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Card = ({ name,uid,type }) => {
  const {store, actions} = useContext(Context)
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`}
        className="card-img-top mx-0"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text my-0">
        </p>
        <div className="d-flex justify-content-between">
        <a href={`/views/${type}/${uid}`} className="btn btn-primary">
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
    </div>
  );
};

export default Card;