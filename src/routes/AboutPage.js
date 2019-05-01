import React from "react";
import styled from "styled-components";
//Images
import mainPhoto from "./../img/walterperez.jpg";

const MainDivAbout = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: #4db4f5;
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.35)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10em 2em 5em 2em;
`;

const MainContainer = styled.div`
  position: relative;
  max-width: 400px;
  heigh: auto;
  background-color: #f6f6f6;
  transition: all linear 0.5s;
  &:hover {
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.25);
  }
`;

const PhotoProfile = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10em;
  heigh: 10em;
  margin-top: -20em; /* Half the height */
  margin-left: -5em;
  border-radius: 50%;
  z-index: 2;
  transition: all linear 0.5s;
  &:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ProfileDescription = styled.div`
  padding: 3em 2em;
`;

const TitleAbout = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.3em;
  text-align: center;
  margin-bottom: 2em;
  margin-top: 3em;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 33%;
    width: 33%;
    heigh: 4px;
    box-shadow: 0 0 0 1px rgba(0, 200, 100, 0.7),
      0 6px 0 2px rgba(0, 200, 100, 0.9);
  }
`;

export default function About() {
  return (
    <MainDivAbout>
      <MainContainer>
        <PhotoProfile src={mainPhoto} />
        <ProfileDescription>
          <TitleAbout>Walter Perez</TitleAbout>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>ADD SIGN HERE</p>
        </ProfileDescription>
      </MainContainer>
    </MainDivAbout>
  );
}
