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
      axios.get(this.state.types[0].url).then(resp => console.log(resp.data));
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>This will be the types page</h1>
      </div>
    );
  }
}
