import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Pro from "../Pro";
// Components
import WaveTopPink2 from "../../img/Home_Bckground/waveTopPink2";
import UnderLine from "../shared/underline";
// Constants
import {
  HERO_SECTION_WHY_BACKGROUND,
  HERO_SECTION_WHY_HEADER,
  HERO_SECTION_WHY_ICONS,
  HERO_SECTION_PROJECTS_BACKGROUND,
} from "../../styles/constants";
// Icons
import ChatIcon from "./icons/ChatIcon";
import LoupeIcon from "./icons/LoupeIcon";
import TrophyIcon from "./icons/TrophyIcon";
import IdeaIcon from "./icons/IdeaIcon";
import BrushIcon from "./icons/BrushIcon";
import CheckedIcon from "./icons/CheckedIcon";

const ProsDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 0 -4px 0;
  padding: 0 0 0 0;
  background-color: ${HERO_SECTION_WHY_BACKGROUND};
`;

const ProsBox = styled.div`
  background-color: ${HERO_SECTION_WHY_BACKGROUND};
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
  color: ${HERO_SECTION_WHY_HEADER};
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
            icon={<CheckedIcon color={HERO_SECTION_WHY_ICONS} />}
            title="High quality code"
            description="I write clean code, following the latest industry standards in the current market (ESLint)."
          />
          <Pro
            icon={<TrophyIcon color={HERO_SECTION_WHY_ICONS} />}
            title="Excellent problem solver"
            description="Won an advanced Kodiri Coding Challenge with a score of 100."
          />
          <Pro
            icon={<ChatIcon color={HERO_SECTION_WHY_ICONS} />}
            title="Team player"
            description="Have experience working in a team, using pair programming to solve issues on Git and Github."
          />
          <Pro
            icon={<LoupeIcon color={HERO_SECTION_WHY_ICONS} />}
            title="Passion for learning"
            description="I enjoy learning new languages, technologies and frameworks. I love reading books and learning in my free time."
          />
          <Pro
            icon={<IdeaIcon color={HERO_SECTION_WHY_ICONS} />}
            title="Full Stack Web Developer"
            description="Deep knowledge of Front end (JavaScript ES6+ and React.js) as well a high level of server side with Node.js technologies."
          />
          <Pro
            icon={<BrushIcon color={HERO_SECTION_WHY_ICONS} />}
            title="Natural talent for arts"
            description="I draw, paint, and take photos in my free time, so I have a special eye for creating beautiful UI."
          />
        </ProsContainer>
      </ProsBox>
      <WaveTopPink2 color1={HERO_SECTION_PROJECTS_BACKGROUND} />
    </ProsDiv>
  );
}
