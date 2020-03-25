import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

class Pokemons extends Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(resp => this.setState({ pokemon: resp.data.results }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.pokemon.map(pok => (
            <li>{pok.name}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokemons;
