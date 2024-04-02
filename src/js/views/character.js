import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Character = () => {
    const params = useParams()
    const {store,actions} = useContext(Context)
    useEffect(() => {
        actions.getCharacter(params.uid)
      }, []);
console.log(store.character);
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.character?.properties?.name}</h5>
            <p className="card-text">
              {store.character?.description}
            </p>
            
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div>
            Name
        </div>
        <div>
            Birth Year
        </div>
      </div>
    </div>
  );
};
