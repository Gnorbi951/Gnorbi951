import React, { Component } from "react";

export default class Pokemon extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
  }

  render() {
    return (
      <div>
        <h1>kek</h1>
      </div>
    );
  }
}
