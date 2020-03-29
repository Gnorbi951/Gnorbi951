import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Pokemon = props => {
  const [name, setName] = useState({ name: "" });
  const [height, setHeight] = useState({ height: 0 });
  const [abilities, setAbilities] = useState({ abilities: [] });
  const [image, setImage] = useState({ image: "" });

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(resp => {
      const data = resp.data;
      const pokemonName = data.name;
      const nameCapitalized =
        pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      setName({ name: nameCapitalized });
      setHeight({ height: data.height });
      setAbilities({ abilities: data.abilities });
      setImage({ image: data.sprites.front_default });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div class="card_container">
        <h1 id="poke_name"> {name.name}</h1>
        <h2 id="poke_height">Height: {height.height}"</h2>
        <h3 id="pokebilities">Abilities:</h3>
        {abilities.abilities.map(array => (
          <li class="poke_list_item">{array.ability.name}</li>
        ))}
        <img alt="pokemon_image" id="poke_img" src={image.image}></img>
      </div>
    </div>
  );
};

export default Pokemon;
