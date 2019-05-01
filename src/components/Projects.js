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
import iconMongoDB from "./../img/mongodb.png";
import iconHeroku from "./../img/heroku.png";
import iconFirebase from "./../img/firebase.png";

const ProjectsMainDiv = styled.div`
  background-color: #f7f7f7;
`;

const ProjectsContContainers = styled.div`
  margin: 0;
  padding: 0 5%;
  background: linear-gradient(#b3c100, #68c300);
  padding: 0 5% 5% 5%;
`;

const ProjectTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  color: rgba(250, 250, 250, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0;
  margin-bottom: 2rem;
`;

const GridForProjects = styled.div`
  @media (min-width: 401px) {
    display: grid;
    column-gap: 3rem;
    row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const UnderLine = styled.div`
  position: relative;
  flex: 1;
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(to right, #4cb5f5, #9fd7f9);
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
            stacks={[
              iconReact,
              iconNodejs,
              iconHeroku,
              iconMongoDB,
              iconCss3,
              iconJs
            ]}
            url={"https://kodflix-walterperez.herokuapp.com/"}
            git={"https://github.com/walterperez/kodflix"}
            description={
              "Rest full API pretending to clone Netflix, all the movies are fetched from Mongo Atlas DB. I used Express.js for the node server, and React.js for the UI."
            }
          />
          <Project
            photo={walterrepoProject}
            title={"WalterRepo"}
            stacks={[
              iconReact,
              iconRedux,
              iconNodejs,
              iconFirebase,
              iconSass,
              iconJs
            ]}
            url={"http://www.walterrepo.co.uk"}
            git={"https://github.com/walterperez/walterrepo"}
            description={
              "This used to be my portfolio, It was the first time I ever used React, I also manage to learn how to use redux when I made it."
            }
          />
          <Project
            photo={cuttingGuruProject}
            title={"Cutting Guru"}
            stacks={[iconWordpress, iconCss3]}
            url={"https://www.cuttingguru.co.uk"}
            git={"#"}
            description={
              "This was a project for a hairdresser salon in London, the owner wanted to keep the website with updates and have the total control of the website, so I decide to use Wordpress for this."
            }
          />
          <Project
            photo={walkerbarbershopProject}
            title={"Walker Barbershop"}
            stacks={[iconHtml5, iconCss3, iconJs]}
            url={"#"}
            git={"https://github.com/walterperez/"}
            description={
              "This was the first project I ever made with flat HTML5, CSS3 and a bit of Javascript, it was for a barbershop owner in Spain, the owner just wanted a flat website and he was not really interested in update it."
            }
          />
          <Project
            photo={wd1ProjectProject}
            title={"Walter Designs"}
            stacks={[iconHtml5, iconCss3, iconJs]}
            url={"#"}
            git={"https://github.com/walterperez/"}
            description={
              "This was going to be my first website when I just knew HTML and CSS3."
            }
          />
        </GridForProjects>
      </ProjectsContContainers>
    </ProjectsMainDiv>
  );
}
