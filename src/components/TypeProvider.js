import React, { useState, createContext } from "react";
import axios from "axios";

export const TypeContext = createContext();

export const TypeProvider = props => {
  const [types, setType] = useState([{ types: [] }]);

  axios.get("https://pokeapi.co/api/v2/type").then(resp => {
    setType({ types: resp.data.results });
  });

  return (
    <TypeContext.Provider value={"kek"}>{props.children}</TypeContext.Provider>
  );
};
