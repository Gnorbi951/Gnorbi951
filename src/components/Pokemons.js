import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";

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
        let pokemon = { name: nameCapitalized, picture: "", id: 0 };
        axios.get(data.url).then(url => {
          pokemon.picture = url.data.sprites.front_default;
          pokemon.id = url.data.id;
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
      return (
        <BrowserRouter>
          <div>
            <Navbar />
            <div class="card_container">
              {this.state.pokemons.map(pok => (
                <div class="card">
                  <img
                    class="pokemon_picture"
                    alt="pokemon_picture"
                    src={pok.picture}
                  ></img>
                  <Link path={`pokemon/${pok.id}`} class="pokemon_name">
                    <p>{pok.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default Pokemons;
