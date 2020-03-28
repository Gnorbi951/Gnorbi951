import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class Pokemon extends Component {
  state = {
    name: null,
    height: null,
    abilities: [],
    image: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(resp => {
      const data = resp.data;
      console.log(data);
      const pokemonName = data.name;
      const nameCapitalized =
        pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      this.setState({ name: nameCapitalized });
      this.setState({ height: data.height });
      this.setState({ abilities: data.abilities });
      this.setState({ image: data.sprites.front_default });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="card_container">
          <h1 id="poke_name">Name: {this.state.name}</h1>
          <h2 id="poke_height">Height: {this.state.height}"</h2>
          <h3 id="pokebilities">Abilities:</h3>
          {this.state.abilities.map(array => (
            <li class="poke_list_item">{array.ability.name}</li>
          ))}
          <img alt="pokemon_image" id="poke_img" src={this.state.image}></img>
        </div>
      </div>
    );
  }
}
