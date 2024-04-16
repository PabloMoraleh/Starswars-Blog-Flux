import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Planet = () => {
    const params = useParams()
    const {store,actions} = useContext(Context)
    useEffect(() => {
        actions.getPlanet(params.uid)
      }, []);
console.log(store.planet);
  return (
    <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.planet?.properties?.name}</h5>
            <p className="card-text">
              {store.planet?.description}
            </p>
            
          </div>
        </div>
      </div>
      <div className="g-0 d-flex justify-content-around p-1 border-top">
        <div>
            Population: {store.planet?.properties?.population}
        </div>
        <div>
            Diameter: {store.planet?.properties?.diameter}
        </div>
        <div>
            Rotation period: {store.planet?.properties?.rotation_period}
        </div>
        <div>
            Orbital period: {store.planet?.properties?.orbital_period}
        </div>
        <div>
            Gravity: {store.planet?.properties?.gravity}
        </div>
      </div>
    </div>
  );
};
