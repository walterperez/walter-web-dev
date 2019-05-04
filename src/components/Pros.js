import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Pro from "./Pro";
//Icons
import globeIcon from "./../img/pros/internet.png";
import paperPlaneIcon from "./../img/pros/paper-plane.png";
import chatsIcon from "./../img/pros/chat.png";
import paintIcon from "./../img/pros/paint-palette.png";
//Images
import TopWave from "./../img/Home_Bckground/wave-top-pink2.svg";
//Icons 2
import chatIcon from "./../img/icons_svg/chat.svg";
import loupeIcon from "./../img/icons_svg/loupe.svg";
import trophyIcon from "./../img/icons_svg/trophy.svg";
import checkedIcon from "./../img/icons_svg/checked.svg";
import ideaIcon from "./../img/icons_svg/idea.svg";
import brushIcon from "./../img/icons_svg/paint-brush.svg";
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
  padding: 7em 15% 3em 15%;
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
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 4rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const ProsContainer = styled.div`
  width: 100%;
  height: auto;
  @media (min-width: 401px) {
    display: grid;
    min-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const WaveImg = styled.img`
  min-width: 100%;
  position: relative;
  background: #f7f7f7;
  max-height: 10%;
  margin: -5px 0;
`;

const UnderLine = styled.div`
  position: relative;
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(to right, #66c4ff, #4fbcff);
  z-index: 10;
`;

export default function Pros() {
  return (
    <ProsDiv>
      <ProsBox>
        <ProsTitle>
          Why
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
            icon={checkedIcon}
            title={"High quality code"}
            description={
              "I write clean code with the latest standards updates in the current market (ESLint)."
            }
          />
          <Pro
            icon={trophyIcon}
            title={"Excellent problem solver"}
            description={
              "Won a Kodiri Coding Challenge in Advance with 100 score."
            }
          />
          <Pro
            icon={chatIcon}
            title={"Team player"}
            description={
              "Experience working as a part of a team using issues of Git and Github."
            }
          />
          <Pro
            icon={loupeIcon}
            title={"Passion for learning"}
            description={
              "I enjoy learning new languages, technologies and frameworks. I always have a book to learn in my free time."
            }
          />
          <Pro
            icon={ideaIcon}
            title={"Full Stack Web Developer"}
            description={
              "Deep knowledge of Front end (JavaScript ES6+ and React.js) as well a high level of server side with Node.js technologies."
            }
          />
          <Pro
            icon={brushIcon}
            title={"Natural talent for arts"}
            description={
              "I draw, paint, and take photos in my free time, so I have a special eye for creating beautiful UI."
            }
          />
        </ProsContainer>
      </ProsBox>
      <WaveImg src={TopWave} alt={"wave for transition"} />
    </ProsDiv>
  );
}
