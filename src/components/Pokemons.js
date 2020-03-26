import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

class Pokemons extends Component {
  state = {
    pokemons: [],
    next: "",
    prev: "",
    isLoaded: false
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resp => {
      this.setState({ next: resp.data.next });
      this.setState({ prev: resp.data.previous });
      const pokemonData = resp.data.results;
      let pokemons = [];
      pokemonData.map(data => {
        const pokemonName = data.name;
        const nameCapitalized =
          pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        let pokemon = { name: nameCapitalized, picture: "" };
        axios.get(data.url).then(url => {
          pokemon.picture = url.data.sprites.front_default;
          pokemons.push(pokemon);
          this.setState({ isLoaded: true });
        });
      });
      this.setState({ pokemons: pokemons });
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div>
          <Navbar />
          Loading...
        </div>
      );
    } else {
      this.state.pokemons.forEach(pokemon => {
        console.log(pokemon);
      });
      return (
        <div>
          <Navbar />
          <div>
            {this.state.pokemons.map(pok => (
              <div class="card">
                <p>{pok.name}</p>
                <img alt="pokemon_picture" src={pok.picture}></img>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Pokemons;
