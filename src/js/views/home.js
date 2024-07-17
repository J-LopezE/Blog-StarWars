import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => {
  return (
    
      <div className="container">
        <div className="header">
        <h1 id="characters">Characters</h1>
        </div>
        <div className="row flex-nowrap overflow-auto mb-3">
          <Characters />
        </div>
        <div className="header">
        <h1 id="planets">Planets</h1>
        </div>
        <div className="row flex-nowrap overflow-auto">
          <Planets />
        </div >
        <div className="header">
        <h1 id="vehicles">Vehicles</h1>
        </div>
        <div className="row flex-nowrap overflow-auto">
          <Vehicles />
        </div>
      </div>
    
  );
};
