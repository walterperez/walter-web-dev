import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
// Components
import ContactButtons from "../ContactButtons";
import CanvasRender from "../CanvasRender";
// Img
import paperPlaneIcon from "../../img/icons_svg/sent-mail.svg";
// Constants
import { HERO_BUTTON_1, HERO_BUTTON_2 } from "../../styles/constants";

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const HomeMainLetters = styled.div`
  flex: 1;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  padding: 0 3em;
`;

const HomeTitle = styled.h1`
  flex: 0;
  width: 100%;
  height: auto;
  font-size: 2.5em;
  color: aliceblue;
  margin-bottom: 0.5rem;
`;

const HomeSubtitle = styled.h3`
  width: 100%;
  height: auto;
  font-size: 1.5em;
  flex: 0;
  color: rgba(226, 226, 226, 0.9);
  margin-bottom: 1em;
`;

const HomeButtonStart = styled.a`
  flex: 1;
  font-size: 1em;
  color: rgb(254, 255, 255);
  background: linear-gradient(
    
    155deg,
  
     ${HERO_BUTTON_2},
  
     ${HERO_BUTTON_1}
  
  );
  text-decoration: none;
  border: 0;
  font-weight: bolder;
  border-radius: 50px;
  padding: 0.75em 2em;
  margin-bottom: 1em;
  transition: all 0.2s ease-in;
  box-shadow: 0 5px 15px 1px rgba(150, 200, 100, 0.3);

  &:hover {
    background: linear-gradient(${HERO_BUTTON_1}, ${HERO_BUTTON_2});
    box-shadow: 0 5px 15px 5px rgba(150, 200, 100, 0.55);
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const PaperIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export default function HeroSplash() {
  return (
    <>
      <CanvasRender />
      <HomeContainer>
        <HomeMainLetters>
          <ScrollAnimation
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
          >
            <HomeTitle>Walter Hernandez</HomeTitle>
          </ScrollAnimation>
          <ScrollAnimation
            delay={500}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
          >
            <HomeSubtitle>Full Stack Web Developer</HomeSubtitle>
          </ScrollAnimation>
          <ScrollAnimation
            delay={1000}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
          >
            <HomeButtonStart href="mailto:walter_cph93@outlook.com">
              Contact now! <PaperIcon src={paperPlaneIcon} />
            </HomeButtonStart>
          </ScrollAnimation>

          <ScrollAnimation
            delay={1500}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ContactButtons />
          </ScrollAnimation>
        </HomeMainLetters>
      </HomeContainer>
    </>
  );
}
