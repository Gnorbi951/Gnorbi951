import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class Types extends Component {
  state = {
    types: []
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then(resp => {
      this.setState({ types: resp.data.results });
      console.log(this.state.types);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="card_container">
          {this.state.types.map(type => (
            <div class="card">
              <p class="type_name">{type.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
