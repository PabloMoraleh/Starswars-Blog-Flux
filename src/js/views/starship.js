import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Starship = () => {
    const params = useParams()
    const {store,actions} = useContext(Context)
    useEffect(() => {
        actions.getStarship(params.uid)
      }, []);
console.log(store.starship);
  return (
    <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.starship?.properties?.name}</h5>
            <p className="card-text">
              {store.starship?.description}
            </p>
            
          </div>
        </div>
      </div>
      <div className="g-0 d-flex justify-content-around p-1 border-top">
        <div>
            MGLT: {store.starship?.properties?.MGLT}
        </div>
        <div>
            Cargo Capacity: {store.starship?.properties?.cargo_capacity}
        </div>
        <div>
            Consumables: {store.starship?.properties?.consumables}
        </div>
        <div>
            Crew: {store.starship?.properties?.crew}
        </div>
        <div>
            Passengers: {store.starship?.properties?.passengers}
        </div>
      </div>
    </div>
  );
};
