import React from "react";
import mainPhoto from "./../img/hero.svg";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
//Components
import Pros from "./../components/Pros";
import Projects from "./../components/Projects";
import Footer from "./../components/Footer"

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
  background: linear-gradient(#4cb5f5, rgb(61, 152, 209));
`;

const HomeMainLetters = styled.div`
  flex: 1;
  width: 100%;
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
`;

const HomeSubtitle = styled.h3`
  width: 100%;
  height: auto;
  text-align: start;
  font-size: 1.3rem;
  flex: 0;
  color: rgb(216, 216, 216);
  margin-top: 0.5rem;
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
        </HomeMainLetters>
        <HomeMainImg src={mainPhoto} alt="Earth planet" />
      </HomeContainer>
      <Pros />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
