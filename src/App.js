import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <div className="container">
              <h1>Test</h1>
            </div>
          </React.Fragment>
        )}
      />
      <Route path="/pokemons" exact component={Pokemons}></Route>
      <Route path="/types" exact component={Types}></Route>
      <Route path="/pokemon/:id" component={Pokemon}></Route>
    </Router>
  );
};

export default App;
