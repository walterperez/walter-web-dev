import React from "react";
import styled from "styled-components";
//Images
import logo from "./../logo.svg";
import hamburgerIconImg from "./../img/hamburgerIcon.svg";

const HeaderMainDiv = styled.header`
  position: relative;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: hsl(203, 89%, 63%);
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HeaderHamburger = styled.div`
  flex: 1;
  max-width: 40px;
  height: auto;
  padding: 0;
  margin: 0;
  z-index: 100;
`;

const HamburgerIcon = styled.img``;

const HeaderLogo = styled.img`
  height: 50px;
  pointer-events: none;
`;

export default function Header() {
  return (
    <HeaderMainDiv>
      <HeaderHamburger>
        <HamburgerIcon src={hamburgerIconImg} alt="hamburger icon" />
      </HeaderHamburger>
      <HeaderLogo src={logo} className="App-logo" alt="logo" />
    </HeaderMainDiv>
  );
}
