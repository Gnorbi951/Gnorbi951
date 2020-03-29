import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

const Pokemons = () => {
  const [state, setState] = useState({
    pokemons: []
  });

  useEffect(() => {
    console.log("steps in");
    const fetchData = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon").then(resp => {
        const pokemonData = resp.data.results;
        let pokemons = [];
        pokemonData.map(async data => {
          const pokemonName = data.name;
          const nameCapitalized =
            pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
          let pokemon = { name: nameCapitalized, picture: "", id: 0 };
          axios.get(data.url).then(url => {
            pokemon.picture = url.data.sprites.front_default;
            pokemon.id = url.data.id;
            pokemons.push(pokemon);
            setState({ ...state, pokemons: pokemons });
          });
        });
      });
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div class="card_container">
          {state.pokemons.map(pok => (
            <div class="card">
              <img
                class="pokemon_picture"
                alt="pokemon_picture"
                src={pok.picture}
              ></img>
              <a href={`/pokemon/${pok.id}`} class="pokemon_name">
                <p>{pok.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Pokemons;
