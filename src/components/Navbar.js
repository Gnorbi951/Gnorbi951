import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <div class="navbar">
      <img
        class="navbar_img"
        alt="navbar_picture"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
      ></img>
      <div class="navbar_bottom">
        <Link class="left_link" style={linkStyle} to="/pokemons">
          Pokémons
        </Link>
        <a class="right_link" style={linkStyle} href="/types">
          Types
        </a>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "#ffac41",
  textDecoration: "none"
};
