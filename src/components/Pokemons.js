import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Pokemons() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(resp => console.log(resp));

  return (
    <div>
      <Navbar />
      <h1>This will be the pokemon page</h1>
    </div>
  );
}

export default Pokemons;
