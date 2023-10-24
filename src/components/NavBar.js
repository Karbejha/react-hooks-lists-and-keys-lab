import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksView = links.map((link)=>(
    <li key={link}>{link}</li>
  ));

  return <nav>{/* display an <a> tag for each link here */
  [<a href="#home" key={"1"}>home</a>,
  <a href="#about" key={"2"}>about</a>,
  <a href="#projects" key={"3"}>projects</a>]
  }</nav>;
}

export default NavBar;
