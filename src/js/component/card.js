import React, { useEffect } from "react";
import "../../styles/home.css";
// import { Context } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({name}) => {
   return (

	<div className="card" style={{width: '18rem'}} >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <button type="button" className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
  </div>
</div>);
};
