import React from "react";
import styled from "styled-components";
//Images
import mainPhoto from "./../img/walterperez.jpg";
import signSVG from "./../img/walterSign.svg";

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
            I am a self taught web developer but currently finishing an
            intensive full stack web development bootcamp at Kodiri.com. I have
            been for the last year programing with JavaScript, React, Redux,
            Node, Express, HTML, CSS and others web technologies. I am motivated
            to keep improving and learning every day. I could offer you
            enthusiasm, reliability, good capacity to work under pressure, an
            excellent approach in working with an international clientele and
            overall passion for the job.
          </p>
          <Sign src={signSVG} />
        </ProfileDescription>
      </MainContainer>
    </MainDivAbout>
  );
}
