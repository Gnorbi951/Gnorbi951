import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log("steps in");
    const fetchData = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon").then(resp => {
        const pokemonData = resp.data.results;
        pokemonData.forEach(data => {
          const pokemonName = data.name;
          const nameCapitalized =
            pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
          axios.get(data.url).then(url => {
            console.log(data);

            let pokemon = { name: nameCapitalized, picture: "", id: 0 };
            pokemon.picture = url.data.sprites.front_default;
            pokemon.id = url.data.id;
            setState(st => [...st, pokemon]);
          });
        });
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div class="card_container">
        {state.map(pok => (
          <div class="card" key={pok.id}>
            <img
              class="pokemon_picture"
              alt="pokemon_picture"
              src={pok.picture}
            ></img>
            <Link to={`/pokemon/${pok.id}`} class="pokemon_name">
              <p>{pok.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
