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
	actions.getVehicles();
	actions.getPlanets();
	// actions.getProperties();
  }, []);
  // console.log(store.people);
  // console.log(store.planets);
  // console.log(store.starships);
  return (
  <div>
	<h1>Characters</h1>
  <div className="row flex-nowrap" style={{overflowX:"scroll"}}>
  {store.people.map((item, index) => (
					<div className="col" key={item.uid}> <Card name={item.name} /> </div>))}
  </div>
  <h1>Planets</h1>
  <div className="row flex-nowrap" style={{overflowX:"scroll"}}>
  {store.planets.map((item, index) => (
					<div className="col" key={item.uid}> <Card name={item.name} /> </div>))}
  </div>
  <h1>Vehicles</h1>
  <div className="row flex-nowrap" style={{overflowX:"scroll"}}>
  {store.starships.map((item, index) => (
					<div className="col" key={item.uid}> <Card name={item.name} /> </div>))}
  </div>  
  </div>);
};