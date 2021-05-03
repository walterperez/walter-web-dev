import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Pro from "../Pro";
// Components
import WaveTopPink2 from "../../img/Home_Bckground/waveTopPink2";
// Icons 2
import chatIcon from "../../img/icons_svg/chat.svg";
import loupeIcon from "../../img/icons_svg/loupe.svg";
import trophyIcon from "../../img/icons_svg/trophy.svg";
import checkedIcon from "../../img/icons_svg/checked.svg";
import ideaIcon from "../../img/icons_svg/idea.svg";
import brushIcon from "../../img/icons_svg/paint-brush.svg";
// Constants
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK } from "../../styles/constants";


const ProsDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 0 -4px 0;
  padding: 0 0 0 0;
  background-color: #f7f7f7;
`;

const ProsBox = styled.div`
  background-color: #f7f7f7;
  padding: 7em 15% 3em 15%;
  width: 100%;
  height: auto;
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

const UnderLine = styled.div`
  position: relative;
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${PRIMARY_COLOR},
    ${PRIMARY_COLOR_DARK}
  );
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
            animateOnce
          >
            <UnderLine />
          </ScrollAnimation>
        </ProsTitle>
        <ProsContainer>
          <Pro
            icon={checkedIcon}
            title="High quality code"
            description="I write clean code, following the latest industry standards in the current market (ESLint)."
          />
          <Pro
            icon={trophyIcon}
            title="Excellent problem solver"
            description="Won an advanced Kodiri Coding Challenge with a score of 100."
          />
          <Pro
            icon={chatIcon}
            title="Team player"
            description="Have experience working in a team, using pair programming to solve issues on Git and Github."
          />
          <Pro
            icon={loupeIcon}
            title="Passion for learning"
            description="I enjoy learning new languages, technologies and frameworks. I love reading books and learning in my free time."
          />
          <Pro
            icon={ideaIcon}
            title="Full Stack Web Developer"
            description="Deep knowledge of Front end (JavaScript ES6+ and React.js) as well a high level of server side with Node.js technologies."
          />
          <Pro
            icon={brushIcon}
            title="Natural talent for arts"
            description="I draw, paint, and take photos in my free time, so I have a special eye for creating beautiful UI."
          />
        </ProsContainer>
      </ProsBox>
      <WaveTopPink2 />
    </ProsDiv>
  );
}
