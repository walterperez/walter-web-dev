import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Images
import logo from '../logo.svg';
import hamburgerIconImg from '../img/icons_svg/hamburgerIcon.svg';

const HeaderMainDiv = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 0 1.5em;
  background-color: #4fbcff;
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.5em 0.5em rgba(0, 0, 0, 0.2);
`;

const HeaderHamburger = styled.div`
  max-width: 1.5em;
  max-height: 1.5em;
  cursor: pointer;
`;

const HamburgerIcon = styled.img``;

const HeaderLogo = styled.img`
  flex: 1;
  height: 90%;
  pointer-events: none;
`;

const MenuHamburger = styled.div`
  position: fixed;
  top: 3em;
  left: 0;
  width: 20%;
  height: 100%;
  min-width: 250px;
  z-index: 100;
  background-color: #4fbcff;
`;

const MenuHamburgerList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const MenuHamburgerListElment = styled.li`
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  font-weight: bolder;
  text-align: center;
  transition: all linear 0.3s;
  &:hover {
    background-color: #0d8bd9;
    color: white;
    cursor: pointer;
    border-right: solid 5px #b0bd00;
  }
`;
const BlurBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  handleHamburgerClick() {
    this.setState({
      listLinks: [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Designs', route: '/designs' },
        { name: 'Books', route: '/books' },
      ],
      isActive: !this.state.isActive,
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
            {this.state.listLinks.map((link, index) => (
              <Link to={link.route} style={{ textDecoration: 'none' }}>
                <MenuHamburgerListElment key={link.name + index}>
                  {link.name}
                </MenuHamburgerListElment>
              </Link>
            ))}
            <a href="#footer" style={{ textDecoration: 'none' }}>
              <MenuHamburgerListElment key="conctact">Contact</MenuHamburgerListElment>
            </a>
          </MenuHamburgerList>
        </MenuHamburger>,
        <BlurBackground onClick={() => this.handleHamburgerClick()} />,
      ]
    );
  }

  render() {
    return <Fragment>{this.renderHeader()}</Fragment>;
  }
}
