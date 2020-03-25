import React from "react";
import { Link } from "react-router-dom";
import "./navbar_style.css";

export default function Navbar() {
  return (
    <div class="navbar">
      <img
        alt="navbar_picture"
        src="https://lh3.googleusercontent.com/proxy/jC2wXWqrTjVxTMdgqEAc_gV0YCJ-xm1kuvYHGbEk23Gz6U_Xz8Glm2TPwvnYCAORl8RE1LkCHv-gS2rp3A1qzYFixcq6NpEQrqiHN0d67SlnJwRi1EKhSq0e2XB_XJfAmy8aPE86zK_pog"
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
