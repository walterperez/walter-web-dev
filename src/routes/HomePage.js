import React from "react";
import mainPhoto from "./../img/hero.svg";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
//Components
import Pros from "./../components/Pros";
import Projects from "./../components/Projects";
import Footer from "./../components/Footer";
import ContactButtons from "../components/ContactButtons";
import waveBackground from "./../img/waveBackground2.png";

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url(${waveBackground}) center center/1500px 1600px no-repeat,
      linear-gradient(30deg, #4cb5f5 0%, #0a6ca9 50%, #063e60 99%);
    -webkit-transform: rotate(30deg);
    transform: rotate(-10deg);
  }
  @media (min-width: 801px) {
    flex-direction: row;

    &:before {
      background: url(${waveBackground}) center center/3000px 2000px no-repeat,
        linear-gradient(30deg, #4cb5f5 0%, #0a6ca9 50%, #063e60 99%);
    }
  }
`;
//  background: linear-gradient(#4cb5f5, rgb(61, 152, 209));

const HomeMainLetters = styled.div`
  flex: 1;
  width: 100%;
  min-height: 300px;
  color: rgb(92, 69, 22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const HomeTitle = styled.h1`
  flex: 0;
  width: 100%;
  height: auto;
  text-align: start;
  font-size: 2.5rem;
  color: aliceblue;
  @media (min-width: 801px) {
    font-size: 3.5rem;
  }
`;

const HomeSubtitle = styled.h3`
  width: 100%;
  height: auto;
  text-align: start;
  font-size: 1.3rem;
  flex: 0;
  color: rgba(226, 226, 226, 0.8);
  margin-top: 0.5rem;
  @media (min-width: 801px) {
    font-size: 2rem;
  }
`;

const HomeButtonStart = styled.button`
  flex: 1;
  font-size: 1.2rem;
  color: rgb(254, 255, 255);
  background-color: #b3c100;
  border: 0;
  max-width: 200px;
  max-height: 100px;
  border-radius: 10px;
  padding: 20px 40px;
  margin-top: 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    background: linear-gradient(#b3c100, #9aa500);
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
`;

const HomeMainImg = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export default function HomePage() {
  return (
    <React.Fragment>
      <HomeContainer>
        <HomeMainLetters>
          <ScrollAnimation
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce={true}
          >
            <HomeTitle>Walter Perez</HomeTitle>
          </ScrollAnimation>
          <ScrollAnimation
            delay={500}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce={true}
          >
            <HomeSubtitle>Front End Web Developer</HomeSubtitle>
          </ScrollAnimation>
          <ScrollAnimation
            delay={1000}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce={true}
          >
            <HomeButtonStart>Contact now!</HomeButtonStart>
          </ScrollAnimation>

          <ScrollAnimation
            delay={1500}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce={true}
          >
            <ContactButtons />
          </ScrollAnimation>
        </HomeMainLetters>
        <HomeMainImg src={mainPhoto} alt="Main Img" />
      </HomeContainer>
      <Pros />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
