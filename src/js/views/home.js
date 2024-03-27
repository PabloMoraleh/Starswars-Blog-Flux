import React, { useEffect } from "react";
import "../../styles/home.css";
// import { Context } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import {Card} from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople(); 
	// actions.getVehicles(), 
	// actions.getPlanets(),
	// actions.getProperties();
  }, []);
  console.log(store.people);
  return (
  <div>
	<h1>Characters</h1>
	<div className="d-flex" style={{overflowX:"scroll"}}>
	{store.people.map((item, index) => (
					<Card/>))}
					</div>
  </div>);
};