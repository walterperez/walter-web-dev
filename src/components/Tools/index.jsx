import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
// Components
import TechStack from "../TechStack";
// Icons
import iconHtml5 from "../../img/icons_tools/html5.png";
import iconNodejs from "../../img/icons_tools/nodejs.png";
import iconReact from "../../img/icons_tools/react.png";
import iconCss3 from "../../img/icons_tools/css-3.png";
import iconJs from "../../img/icons_tools/js.png";
import iconRedux from "../../img/icons_tools/redux.png";
import iconWordpress from "../../img/icons_tools/wordpress.png";
import iconSass from "../../img/icons_tools/sass.jpg";
import iconMongoDB from "../../img/icons_tools/mongodb.png";
import iconHeroku from "../../img/icons_tools/heroku.png";
import iconFirebase from "../../img/icons_tools/firebase.png";
import iconCordova from "../../img/icons_tools/Cordova.png";
import iconAdobeXD from "../../img/icons_tools/adobexd.png";
import iconIllustrator from "../../img/icons_tools/illustrator.png";
import iconPhotoshop from "../../img/icons_tools/photoshop.png";
import iconSlack from "../../img/icons_tools/slack.jpg";
import iconGitLogo from "../../img/icons_tools/gitlogo.png";
import iconVSC from "../../img/icons_tools/vsc.png";
import iconPostman from "../../img/icons_tools/postman.png";

const ToolsMainDiv = styled.div`
  background-color: #f7f7f7;
  padding: 2em 2em 0 2em;
  justify-content: center;
  align-items: center;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 1;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -1em;
    left: -1em;
    width: 110%;
    height: 15%;
    background-color: #f7f7f7;
    z-index: -1;
    transform: rotate(-2deg);
  }
`;

const ToolsMainFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const ToolsFlex1 = styled.div`
  padding: 2em;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UnderLine = styled.div`
  position: relative;
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(to right, #66c4ff, #4fbcff);
  z-index: 10;
`;

const ToolsTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  z-index: 10;
`;

export default function Tools() {
  return (
    <ToolsMainDiv>
      <ToolsTitle>
        Tools
        <ScrollAnimation
          duration={0.5}
          animateIn="fadeIn"
          animateOut="fadeOut"
          animateOnce
        >
          <UnderLine />
        </ScrollAnimation>
      </ToolsTitle>
      <ToolsMainFlex>
        <ToolsFlex1>
          <TechStack
            title="Front End Development"
            icons={[
              iconJs,
              iconCss3,
              iconHtml5,
              iconReact,
              iconRedux,
              iconSass,
            ]}
          />
          <TechStack
            title="Back End Development"
            icons={[iconNodejs, iconMongoDB, iconHeroku, iconFirebase]}
          />
        </ToolsFlex1>
        <ToolsFlex1>
          <TechStack
            title="Ui/UX Design"
            icons={[iconAdobeXD, iconPhotoshop, iconIllustrator]}
          />
          <TechStack
            title="Other tools"
            icons={[
              iconGitLogo,
              iconSlack,
              iconCordova,
              iconWordpress,
              iconVSC,
              iconPostman,
            ]}
          />
        </ToolsFlex1>
      </ToolsMainFlex>
    </ToolsMainDiv>
  );
}
