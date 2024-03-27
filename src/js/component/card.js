import React, { useEffect } from "react";
import "../../styles/home.css";
// import { Context } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = () => {
   return (

	<div className="card" style={{width: '300px'}} >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">titulo</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <button type="button" className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
  </div>
</div>);
};
