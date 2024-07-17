import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
const Character = () => {
  const [characterSelect, setCharacterSelect] = useState();
  const { store } = useContext(Context);
  const { characterName } = useParams();
  console.log(characterSelect);
  useEffect(() => {
    const select = store.characters.find(
      (character) => character.url.split("/")[5] == characterName

    );
    if(select){
      setCharacterSelect(select);
    }

  }, [store.characters, characterName]);
  return (
    <div className="container ">
      {characterSelect ? 
      <><div className="card mb-3 individual-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                characterSelect.url.split("/")[5] +
                ".jpg"
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{characterSelect.name}</h5>
              <ul>
                <li>Height: {characterSelect.height}</li>
                <li>Mass: {characterSelect.mass}</li>
                <li>Hair color: {characterSelect.hair_color}</li>
                <li>Skin color: {characterSelect.skin_color}</li>
                <li>Eye color: {characterSelect.eye_color}</li>
                <li>Birth year: {characterSelect.birth_year}</li>
                <li>Gender: {characterSelect.gender}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex g-0 individual-card">
        <div className="col-md-2">
          <h3>Films</h3>
          <p className="text-break"> {characterSelect.films}</p>
        </div>
        <div className="col-md-2">
          <h3>Species</h3>
          <p className="text-break"> {characterSelect.species}</p>
        </div>
        <div className="col-md-3">
          <h3>Vehicles</h3>
          <p className="text-break">{characterSelect.vehicles}</p>
        </div>
        <div className="col-md-3">
          <h3>Starships</h3>
          <p className="text-break">{characterSelect.starships}</p>
        </div>
      </div></> : <h1>No hay Personaje</h1>}
    </div>
  );
};
export default Character;
