import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
const Vehicle = () => {
  const [vehicleSelect, setVehicleSelect] = useState();
  const { store } = useContext(Context);
  const { vehicleName } = useParams();
  console.log(vehicleSelect);
  useEffect(() => {
    const select = store.vehicles.find(
      (vehicle) => vehicle.url.split("/")[5] == vehicleName

    );
    if(select){
      setVehicleSelect(select);
    }

  }, [store.vehicles, vehicleName]);
  return (
    <div className="container ">
      {vehicleSelect ? 
      <><div className="card mb-3 individual-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                vehicleSelect.url.split("/")[5] +
                ".jpg"
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{vehicleSelect.name}</h5>
              <ul>
                <li>Model: {vehicleSelect.model}</li>
                <li>Manofacturer: {vehicleSelect.manofacturer}</li>
                <li>Cost in credits: {vehicleSelect.cost_in_credits}</li>
                <li>Max atmosphering speed: {vehicleSelect.max_atmosphering_speed}</li>
                <li>Crew: {vehicleSelect.crew}</li>
                <li>Passengers: {vehicleSelect.passengers}</li>
                <li>Cargo capacity: {vehicleSelect.cargo_capacity}</li>
                <li>Consumables: {vehicleSelect.consumables}</li>
                <li>Vehicle class: {vehicleSelect.vehicle_class}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex g-0 individual-card">
        <div className="col-md-2">
          <h3>Films</h3>
          <p className="text-break"> {vehicleSelect.films}</p>
        </div>
        <div className="col-md-2">
          <h3>Species</h3>
          <p className="text-break"> {vehicleSelect.species}</p>
        </div>
        <div className="col-md-3">
          <h3>Vehicles</h3>
          <p className="text-break">{vehicleSelect.vehicles}</p>
        </div>
        <div className="col-md-3">
          <h3>Starships</h3>
          <p className="text-break">{vehicleSelect.starships}</p>
        </div>
      </div></> : <h1>No hay Personaje</h1>}
    </div>
  );
};
export default Vehicle;
