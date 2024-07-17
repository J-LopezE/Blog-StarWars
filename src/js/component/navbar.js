import React, { useContext } from "react";
import logo from "../../img/Starwarslogo.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = (character) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bar mb-3">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} className="logo"></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-2  mb-2 mb-lg-0">
            <a className="nav-link active header" aria-current="page" href="#characters">
              Characters
            </a>
            <a className="nav-link active header" aria-current="page" href="#planets">
              Planets
            </a>
            <a className="nav-link active header" aria-current="page" href="#vehicles">
              Vehicles
            </a>
          </ul>
          <form className="d-flex" role="favorites">
            <div className="btn-group dropstart">
              <button
                className="btn dropdown-toggle fav"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="far fa-heart">
                  {" "}
                  Favorites <span>{store.favorites.length}</span>{" "}
                </i>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark z-3 menu position-absolute">
                {store.favorites.length > 0 ? (
                  store.favorites.map((favorite) => (
                    <li className="dropdown-item" key={favorite.name}>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start items-center text-center">
                          <img
                            src={
                              "https://starwars-visualguide.com/assets/img/" +
                              favorite.url.split("/")[4] +
                              "/" +
                              favorite.url.split("/")[5] +
                              ".jpg"
                            }
                            className="card-img-top rounded-start icoFav"
                            alt="..."
                            onError={(e) => {
                              e.target.src =
                                "https://starwars-visualguide.com/assets/img/characters/" +
                                favorite.url.split("/")[5] +
                                ".jpg";
                            }}
                          />
                          <span className="ms-4 me-4">{favorite.name}</span>
                        </div>
                        <div className="">
                          <i
                            className="fas fa-trash btn btn-danger"
                            onClick={() => {
                              actions.deleteFavorites(favorite.name);
                            }}
                          ></i>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <h6 className="text-center">Sin favoritos</h6>
                )}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
