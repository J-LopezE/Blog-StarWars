import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const addFav = (vehicle) => {
      actions.addFavoritesVehicles(vehicle);
      console.log(vehicle)
    };
    const isFavorite = (vehicle) => {
      return store.favorites.some((fav) => fav.name === vehicle.name);
    };
  return (
    <>
      {store.vehicles.map((vehicle) => {
        return (
          <div className="card card-vehicles" key={vehicle.url.split("/")[5]}>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                vehicle.url.split("/")[5] +
                ".jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title vehicles">{vehicle.name}</h5>

              <h6>Model: {vehicle.model}</h6>
              <h6>Manufacturer: {vehicle.manufacturer}</h6>
              <h6>Cost in credits: {vehicle.cost_in_credits}</h6>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link
                to={`/vehicle/${vehicle.url.split("/")[5]}`}
                className="btn text-center learn"
              >
                <p>Learn More..</p>
              </Link>
              <i
                className={`fa${
                  isFavorite(vehicle) ? "s" : "r"
                } fa-heart btn fav`}
                onClick={() => addFav(vehicle)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Vehicles;
