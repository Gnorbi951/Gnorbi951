import React from "react";
import { Link } from "react-router-dom";
import "./navbar_style.css";

export default function Navbar() {
  return (
    <div class="navbar">
      <img
        alt="navbar_picture"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
      ></img>
      <Link class="left_link" style={linkStyle} to="/pokemons">
        Pokémons
      </Link>
      <Link class="right_link" style={linkStyle} to="/types">
        Types
      </Link>
    </div>
  );
}

const linkStyle = {
  color: "grey",
  textDecoration: "none"
};
