import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Pro from "./Pro";
//Images
import globeIcon from "./../img/internet.png";
import paperPlaneIcon from "./../img/paper-plane.png";
import chatsIcon from "./../img/chat.png";
import paintIcon from "./../img/paint-palette.png";
import TopWave from "./../img/wave.png";
//Styles
const ProsDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 0 -4px 0;
  padding: 0 0 0 0;
  background-color: rgb(61, 152, 209);
`;

const ProsBox = styled.div`
  background-color: #f7f7f7;
  padding: 30px;
  width: 100%;
  height: auto;
  border-radius: 50px 50px 0 0;
`;

const ProsTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.8);
`;

const ProsContainer = styled.div`
width: 100%;
height: auto;
@media (min-width: 401px) {
  display:grid;
  min-width:100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  
`;

const WaveImg = styled.img`
  min-width: 100vw;
  position: relative;
  background: #f7f7f7;
  height: auto;
  margin: -5px 0;
`;

const UnderLine = styled.div`
  position: relative;
  width: 100px;
  height: 10px;
  border-radius: 10px;
  background: linear-gradient(to right, #b3c100, yellow);
  z-index: 10;
`;

export default function Pros() {
  return (
    <ProsDiv>
      <ProsBox>
        <ProsTitle>
          About
          <ScrollAnimation
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce={true}
          >
            <UnderLine />
          </ScrollAnimation>
        </ProsTitle>
        <ProsContainer>
          <Pro
            icon={globeIcon}
            title={"Multilingual"}
            description={"Fluent in English and Spanish."}
          />
          <Pro
            icon={chatsIcon}
            title={"Customer Service"}
            description={"Fluent in English and Spanish."}
          />
          <Pro
            icon={paintIcon}
            title={"Natural talent for arts"}
            description={"Fluent in English and Spanish."}
          />
          <Pro
            icon={paperPlaneIcon}
            title={"Afordable junior with senior skills"}
            description={"I can write front end as well back end."}
          />
        </ProsContainer>
      </ProsBox>
      <WaveImg src={TopWave} alt={"wave for transition"} />
    </ProsDiv>
  );
}
