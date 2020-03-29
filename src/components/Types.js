import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Types = () => {
  const [state, setState] = useState({ types: [] });

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://pokeapi.co/api/v2/type").then(resp => {
        setState({ types: resp.data.results });
      });
    };
    fetchData();
  }, [state.types]);

  return (
    <div>
      <Navbar />
      <div class="card_container">
        {state.types.map(type => (
          <div class="card">
            <p class="type_name">{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
