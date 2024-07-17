const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      getVehicles: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/vehicles");
          const data = await response.json();
          console.log("Hola soy una prueba de Vehicles");

          console.log(data.results);  
          if (response.ok) {
            setStore({ vehicles: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people");
          const data = await response.json();
          console.log("Hola soy una prueba de person")
          console.log(data.results);
          if (response.ok) {
            setStore({ characters: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/planets");
          const data = await response.json();
          console.log(data.results);
          if (response.ok) {
            setStore({ planets: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },
      addFavoritesCharacters: (character) => {
        const store = getStore();
        const addFavoriteCharacter = [...store.favorites, character];
        setStore({ favorites: addFavoriteCharacter });
      },
      addFavoritesPlanets: (planet) => {
        const store = getStore();
        const addFavoritePlanet = [...store.favorites, planet];
        setStore({ favorites: addFavoritePlanet });
      },
      deleteFavorites: (character) => {
        const store = getStore();
        const deletFavorite = store.favorites.filter(
          (fav) => fav.name !== character
        );
        setStore({ favorites: deletFavorite });
      },
      addFavoritesVehicles: (vehicle) => {
        const store = getStore();
        const addFavoriteVehicle = [...store.favorites, vehicle];
        setStore({ favorites: addFavoriteVehicle });
      },
    },
  };
};

export default getState;
