import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Planets = () => {
  const { store, actions } = useContext(Context);
  const addFavo = (planet) => {
    actions.addFavoritesPlanets(planet);
    console.log(planet);
  };
  const isFavorite = (planet) => {
    return store.favorites.some((fav) => fav.name === planet.name);
  };
  return (
    <>
      {store.planets.map((planet) => {
        return (
          <div className="card card-planets" key={planet.url.split("/")[5]}>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                planet.url.split("/")[5] +
                ".jpg"
              }
              className="card-img imgplanets"
              alt="..."
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <h6>Rotation period: {planet.rotation_period}</h6>
              <h6>Orbital period: {planet.orbital_period}</h6>
              <h6>Diameter: {planet.diameter}</h6>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <Link
                  to={`/planet/${planet.url.split("/")[5]}`}
                  className="btn text-center learn"
                >
                  Learn More..
                </Link>
                <i
                  className={`fa${
                    isFavorite(planet) ? "s" : "r"
                  } fa-heart btn fav`}
                  onClick={() => addFavo(planet)}
                ></i>
              </div>
            
          </div>
        );
      })}
    </>
  );
};
export default Planets;
