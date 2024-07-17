import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
const Planet = () => {
  const [planetSelect, setplanetSelect] = useState();
  const { store } = useContext(Context);
  const { planetName } = useParams();

  console.log(planetSelect);
  useEffect(() => {
    const select = store.planets.find(
      (planet) => planet.url.split("/")[5] == planetName
    );
    if(select){
      setplanetSelect(select)
    }
  }, [store.planets, planetName]);
  return (
    <div className="container ">
    
    {planetSelect ?
    <>
      <div className="card mb-3 individual-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                planetSelect.url.split("/")[5] +
                ".jpg"
              }
              className="card-img-top"
              alt="..."
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{planetSelect.name}</h5>
              <ul>
                <li>Rotation period: {planetSelect.rotation_period}</li>
                <li>Orbital period: {planetSelect.orbital_period}</li>
                <li>Diameter: {planetSelect.diameter}</li>
                <li>Climate: {planetSelect.climate}</li>
                <li>Gravity: {planetSelect.gravity}</li>
                <li>Terrain: {planetSelect.terrain}</li>
                <li>Surface water: {planetSelect.surface_water}</li>
                <li>Population: {planetSelect.population}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md individual-card">
        <h3>Films</h3>
        <p className="text-break"> {planetSelect.films}</p>
      </div> </> : <h1>No hay planeta</h1>}
    </div>
  );
};

export default Planet;
