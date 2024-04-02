import React, { useEffect } from "react";
import "../../styles/home.css";
// import { Context } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
    actions.getVehicles();
    actions.getPlanets();
  }, []);
  return (
    <div className="mt-5">
      <h1>Characters</h1>
      <div className="row flex-nowrap" style={{ overflowX: "scroll" }}>
        {store.people.map((item, index) => (
          <div className="col" key={item.uid}>
            
            <Card name={item.name} type="characters" uid={item.uid} />
          </div>
        ))}
      </div>
      <h1>Planets</h1>
      <div className="row flex-nowrap" style={{ overflowX: "scroll" }}>
        {store.planets.map((item, index) => (
          <div className="col" key={item.uid}>
            
            <Card name={item.name} type="planets" uid={item.uid} />
          </div>
        ))}
      </div>
      <h1>Starships</h1>
      <div className="row flex-nowrap" style={{ overflowX: "scroll" }}>
        {store.starships.map((item, index) => (
          <div className="col" key={item.uid} >
            
            <Card name={item.name} type="starships" uid={item.uid} />
          </div>
        ))}
      </div>
    </div>
  );
};
