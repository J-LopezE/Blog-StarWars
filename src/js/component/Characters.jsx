import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Characters = () => {
  const { store, actions } = useContext(Context);
  const addFav = (character) => {
    actions.addFavoritesCharacters(character);
    console.log(character)
  };
  const isFavorite = (character) => {
    return store.favorites.some((fav) => fav.name === character.name);
  };
  return (
    <>
      {store.characters.map((character) => {
        return (
          <div
            className="card card-character"
            key={character.url.split("/")[5]}
          >
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                character.url.split("/")[5] +
                ".jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title characters">{character.name}</h5>

              <h6>Gender: {character.gender}</h6>
              <h6>Hair color: {character.hair_color}</h6>
              <h6>Eye color: {character.eye_color}</h6>
            </div>
            <div className="card-footer d-flex justify-content-between mb-2">
              <Link
                to={`/character/${character.url.split("/")[5]}`}
                className="btn  text-center learn"
              >
                <p>Learn More..</p>
              </Link>
              <i
                className={`fa${isFavorite(character) ? "s" : "r"} fa-heart btn  fav`}
                onClick={() => addFav(character)}
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Characters;
