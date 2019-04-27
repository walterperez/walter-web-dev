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
  background: linear-gradient(to right, #007cc2 0%, #0e70ae 100%);
`;

const ProsBox = styled.div`
  background-color: #f7f7f7;
  padding: 3em 5em;
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
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
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
  min-width: 100%;
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
            animateIn="fadeIn"
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
            description={"Over a half-decade providing an excellent service. "}
          />
          <Pro
            icon={paintIcon}
            title={"Natural talent for arts"}
            description={
              "I draw, paint, and take photos in my free time, so I have a special eye for creating beautiful UI."
            }
          />
          <Pro
            icon={paperPlaneIcon}
            title={"Excellent problem solver"}
            description={
              "I love solving new problems and sharing Knowledge about how to improve the already solved problems."
            }
          />
        </ProsContainer>
      </ProsBox>
      <WaveImg src={TopWave} alt={"wave for transition"} />
    </ProsDiv>
  );
}
