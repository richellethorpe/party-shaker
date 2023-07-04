import React from "react";
import cocktailBanner from "./../img/cocktail-banner.jpeg";

function Header(){
  return (
    <React.Fragment>
      <img src={cocktailBanner} alt="cocktails" />
      <h1>COCKTAIL PARTY</h1>
    </React.Fragment>
  );
}

export default Header;