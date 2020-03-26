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
      this.setState({ pokemons: resp.data.results });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.pokemons.map(pok => (
            <p attr={pok.url}>{pok.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokemons;
