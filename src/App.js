import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>Test</h1>
      </div>
    );
  }
}

export default App;
