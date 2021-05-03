import React from 'react';
import styled from 'styled-components';
// Images
import mainPhoto from '../img/walterperez.jpg';
import signSVG from '../img/walterSign.svg';
// Constants
import { ABOUT_BACKGROUND, ABOUT_HEADER, ABOUT_LINE_1, ABOUT_LINE_2 } from "../styles/constants";

const MainDivAbout = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: ${ABOUT_BACKGROUND};
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.15)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10em 2em 5em 2em;
`;

const MainContainer = styled.div`
  position: relative;
  max-width: 400px;
  height: auto;
  min-width: 30%;
  background-color: #f6f6f6;
  transition: all linear 0.5s;
  &:hover {
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.25);
  }
`;

const PhotoProfile = styled.img`
  position: absolute;
  top: 47%;
  left: 50%;
  width: 10em;
  height: 10em;
  margin-top: -20em; /* Half the height */
  margin-left: -5em;
  border-radius: 50%;
  transform: translateY(-3em);
  z-index: 2;
  transition: all linear 0.5s;
  box-shadow: 0 5px 15px 10px rgba(50, 100, 150, 0.3);
  &:hover {
    box-shadow: 0 5px 15px 0 rgba(50, 100, 150, 0.4);
  }
`;

const ProfileDescription = styled.div`
  padding: 3em 2em;
`;

const TitleAbout = styled.h3`
  color: ${ABOUT_HEADER};
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
    box-shadow: 0 0 0 1px ${ABOUT_LINE_1},
      0 6px 0 2px ${ABOUT_LINE_2};
  }
`;

const Sign = styled.img`
  display: block;
  width: 50%;
  height: auto;
  margin: 0 auto;
`;

export default function About() {
  return (
    <MainDivAbout>
      <MainContainer>
        <PhotoProfile src={mainPhoto} />
        <ProfileDescription>
          <TitleAbout>Walter Perez</TitleAbout>
          <p>
            I am a self-taught web developer and I've been developing products
            for almost 2 years using web technologies like JavaScript, React.js,
            Redux, Node, Koa, Flow JS, Next JS, Gatsby, HTML, CSS and other web
            technologies. I am highly motivated, continuously improving my
            skills daily. I am enthusiastic, reliable and I can work under
            pressure due to my background in customer service management roles.
            My passion for working hard and to a high standard in varied
            environments and companies of different sizes has helped me to excel
            in my career.
          </p>
          <Sign src={signSVG} />
        </ProfileDescription>
      </MainContainer>
    </MainDivAbout>
  );
}
