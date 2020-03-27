import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class Pokemon extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://pokeapi.co/api/v2/type/${id}/`)
      .then(resp => console.log(resp));
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>kek</h1>
      </div>
    );
  }
}
