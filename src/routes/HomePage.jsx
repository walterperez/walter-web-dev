import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
// Components
import Pros from '../components/Pros';
import Projects from '../components/Projects';
import ContactButtons from '../components/ContactButtons';
import Reviews from '../components/Reviews';
// Img
import mainPhoto from '../img/hero.svg';
import waveBackground from '../img/Home_Bckground/waveBackground2.png';
import paperPlaneIcon from '../img/icons_svg/sent-mail.svg';

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
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url(${waveBackground}) center center/1500px 1600px no-repeat,
      linear-gradient(to right, #007cc2 0%, #0e70ae 100%);
    -webkit-transform: rotate(30deg);
    transform: rotate(-10deg);
  }
  @media (min-width: 801px) {
    flex-direction: row;
    padding: 0 10%;
    &:before {
      background: url(${waveBackground}) center center/3000px 2000px no-repeat,
        linear-gradient(to right, #007cc2 0%, #0e70ae 100%);
    }
  }
`;
//  background: linear-gradient(#4cb5f5, rgb(61, 152, 209));

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
  background: linear-gradient(155deg, #b3c100, #9aa500);
  text-decoration: none;
  border: 0;
  font-weight: bolder;
  border-radius: 50px;
  padding: 1em 3em;
  margin-bottom: 1em;
  transition: all 0.2s ease-in;
  box-shadow: 0 5px 15px 1px rgba(150, 200, 100, 0.3);

  &:hover {
    background: linear-gradient(#b3c100, #9aa500);
    box-shadow: 0 5px 15px 5px rgba(150, 200, 100, 0.55);
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const PaperIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const HomeMainImg = styled.img`
  flex: 1;
  width: 100%;
  height: auto;
  @media (min-width: 1201px) {
    max-width: 50%;
    max-height: 100%;
  }
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
            animateOnce
          >
            <HomeTitle>Walter Perez</HomeTitle>
          </ScrollAnimation>
          <ScrollAnimation
            delay={500}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
          >
            <HomeSubtitle>Web Developer</HomeSubtitle>
          </ScrollAnimation>
          <ScrollAnimation
            delay={1000}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
          >
            <HomeButtonStart href="mailto:walter_cph93@outlook.com">
              Contact now!
              {' '}
              <PaperIcon src={paperPlaneIcon} />
            </HomeButtonStart>
          </ScrollAnimation>

          <ScrollAnimation
            delay={1500}
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce
          >
            <ContactButtons />
          </ScrollAnimation>
        </HomeMainLetters>
        <HomeMainImg src={mainPhoto} alt="Main Img" />
      </HomeContainer>
      <Pros />
      <Projects />
      {/* WIP <Reviews /> */}
    </React.Fragment>
  );
}
