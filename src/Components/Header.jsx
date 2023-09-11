// Description: This file contains the header component of the website.
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "#CBF1F5",
        fontSize: "1.2rem",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#blog">Blog</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
