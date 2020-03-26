import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

class Pokemons extends Component {
  state = {
    pokemons: [],
    next: "",
    prev: ""
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resp => {
      this.setState({ next: resp.data.next });
      this.setState({ prev: resp.data.previous });
      const pokemonData = resp.data.results;
      pokemonData.map(data => {
        let pokemon = { name: data.name, picture: "" };
        axios
          .get(data.url)
          .then(url => (pokemon.picture = url.data.sprites.front_default));
        this.state.pokemons.push(pokemon);
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.pokemons.map(pok => (
            <div class="card">
              <img alt="pokemon_picture" src={pok.picture}></img>
              <p>{pok.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokemons;
