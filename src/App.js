import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <div className="container">
                <Navbar />
                <h1>Test</h1>
              </div>
            </React.Fragment>
          )}
        />
        <Switch>
          <Route path="/pokemons" component={Pokemons}></Route>
          <Route path="/types" component={Types}></Route>
          <Route path="/pokemon/:id" component={Pokemon}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
