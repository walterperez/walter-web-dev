import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
//Components
import Project from "./Project";
//Projects
import cuttingGuruProject from "./../img/cuttingguru.png";
import walkerbarbershopProject from "./../img/walkerbarbershop.png";
import walterrepoProject from "./../img/walterrepo.png";
import wd1ProjectProject from "./../img/wd1.png";
import kodflixProject from "./../img/kodflix.png";
//Icons
import iconHtml5 from "./../img/html5.png";
import iconNodejs from "./../img/nodejs.png";
import iconReact from "./../img/react.png";
import iconCss3 from "./../img/css-3.png";
import iconJs from "./../img/js.png";
import iconRedux from "./../img/redux.png";
import iconWordpress from "./../img/wordpress.png";
import iconSass from "./../img/sass.jpg";

const ProjectsMainDiv = styled.div`
  background-color: #f7f7f7;
`;

const ProjectsContContainers = styled.div`
  margin: 0;
  padding: 0 5%;
  background: linear-gradient(#b3c100, #68c300);
  padding: 0 5% 10% 5%;
`;

const ProjectTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
`;

const GridForProjects = styled.div`
  @media (min-width: 401px) {
    display: grid;
    column-gap: 5%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const UnderLine = styled.div`
  position: relative;
  flex: 1;
  width: 100px;
  height: 10px;
  border-radius: 10px;
  background: linear-gradient(to right, #4cb5f5, #e1e1e1);
  z-index: 10;
`;

export default function Projects() {
  return (
    <ProjectsMainDiv>
      <ProjectsContContainers>
        <ProjectTitle>
          Projects
          <ScrollAnimation
            duration={0.5}
            animateIn="fadeInLeftBig"
            animateOut="fadeOut"
            animateOnce={true}
          >
            <UnderLine />
          </ScrollAnimation>
        </ProjectTitle>
        <GridForProjects>
          <Project
            photo={kodflixProject}
            title={"Kodflix"}
            stacks={[iconReact, iconRedux, iconNodejs, iconCss3]}
            description={
              "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
            }
          />
          <Project
            photo={walterrepoProject}
            title={"WalterRepo"}
            stacks={[iconReact, iconRedux, iconNodejs, iconSass]}
            description={
              "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
            }
          />
          <Project
            photo={cuttingGuruProject}
            title={"Kodflix"}
            stacks={[iconWordpress, iconCss3]}
            description={
              "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
            }
          />
          <Project
            photo={walkerbarbershopProject}
            title={"Kodflix"}
            stacks={[iconHtml5, iconCss3, iconJs]}
            description={
              "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
            }
          />
          <Project
            photo={wd1ProjectProject}
            title={"Kodflix"}
            stacks={[iconHtml5, iconCss3, iconJs]}
            description={
              "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
            }
          />
        </GridForProjects>
      </ProjectsContContainers>
    </ProjectsMainDiv>
  );
}
