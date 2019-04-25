import React, { Component, Fragment } from "react";
import styled from "styled-components";
//Images
import logo from "./../logo.svg";
import hamburgerIconImg from "./../img/hamburgerIcon.svg";

const HeaderMainDiv = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 0 5%;
  background-color: hsl(203, 89%, 63%);
  height: 80px;
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
  max-height: 40px;
  cursor: pointer;
`;

const HamburgerIcon = styled.img``;

const HeaderLogo = styled.img`
  flex: 1;
  height: 50px;
  pointer-events: none;
`;

const MenuHamburger = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 20%;
  height: 100%;
  min-width: 250px;
  z-index: 100;
  background-color: hsl(203, 89%, 63%);
`;

const MenuHamburgerList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const MenuHamburgerListElment = styled.li`
  display: block;
  padding: 1rem 16px;
  text-decoration: none;
  &:hover {
    background-color: #0d8bd9;
    color: white;
    cursor: pointer;
  }
`;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  handleHamburgerClick() {
    this.setState({
      listLinks: ["Home", "About", "Projects", "Designs", "Contact"],
      isActive: !this.state.isActive
    });
  }

  renderHeader() {
    return !this.state.isActive ? (
      <HeaderMainDiv>
        <HeaderHamburger onClick={() => this.handleHamburgerClick()}>
          <HamburgerIcon src={hamburgerIconImg} alt="hamburger icon" />
        </HeaderHamburger>
        <HeaderLogo src={logo} alt="logo" />
      </HeaderMainDiv>
    ) : (
      [
        <HeaderMainDiv>
          <HeaderHamburger onClick={() => this.handleHamburgerClick()}>
            <HamburgerIcon src={hamburgerIconImg} alt="hamburger icon" />
          </HeaderHamburger>
          <HeaderLogo src={logo} alt="logo" />
        </HeaderMainDiv>,
        <MenuHamburger>
          <MenuHamburgerList>
            {this.state.listLinks.map(link => {
              return (
                <MenuHamburgerListElment key={link}>
                  {link}
                </MenuHamburgerListElment>
              );
            })}
          </MenuHamburgerList>
        </MenuHamburger>
      ]
    );
  }

  render() {
    return <Fragment>{this.renderHeader()}</Fragment>;
  }
}
