import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { withRouter } from "react-router";

class Types extends Component {
  state = {
    types: []
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then(resp => {
      this.setState({ types: resp.data.results });
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

export default Types;
