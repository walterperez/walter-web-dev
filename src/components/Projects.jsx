import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
// Components
import Project from './Project';
// Projects
import cuttingGuruProject from '../img/projects/cuttingguru.png';
import walkerbarbershopProject from '../img/projects/walkerbarbershop.png';
import walterrepoProject from '../img/projects/walterrepo.png';
import wd1ProjectProject from '../img/projects/wd1.png';
import kodflixProject from '../img/projects/kodflix.png';
// Icons
import iconHtml5 from '../img/icons_tools/html5.png';
import iconNodejs from '../img/icons_tools/nodejs.png';
import iconReact from '../img/icons_tools/react.png';
import iconCss3 from '../img/icons_tools/css-3.png';
import iconJs from '../img/icons_tools/js.png';
import iconRedux from '../img/icons_tools/redux.png';
import iconWordpress from '../img/icons_tools/wordpress.png';
import iconSass from '../img/icons_tools/sass.jpg';
import iconMongoDB from '../img/icons_tools/mongodb.png';
import iconHeroku from '../img/icons_tools/heroku.png';
import iconFirebase from '../img/icons_tools/firebase.png';

const ProjectsMainDiv = styled.div`
  background-color: #f7f7f7;
`;

const ProjectsContContainers = styled.div`
  margin: 0;
  padding: 0 5%;
  background: linear-gradient(rgba(250, 250, 250, 0), rgba(0, 0, 0, 0.2)),
    #ff6969;
  padding: 1em 10% 5% 10%;
`;

const ProjectTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  color: rgba(250, 250, 250, 0.9);
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
            animateOnce
          >
            <UnderLine />
          </ScrollAnimation>
        </ProjectTitle>
        <GridForProjects>
          <Project
            photo={kodflixProject}
            title="Kodflix"
            stacks={[
              iconReact,
              iconNodejs,
              iconHeroku,
              iconMongoDB,
              iconCss3,
              iconJs,
            ]}
            url="https://kodflix-walterperez.herokuapp.com/"
            git="https://github.com/walterperez/kodflix"
            description="Rest full API pretending to clone Netflix, all the movies are fetched from Mongo Atlas DB. I used Express.js for the node server, and React.js for the UI."
          />
          <Project
            photo={walterrepoProject}
            title="WalterRepo"
            stacks={[
              iconReact,
              iconRedux,
              iconNodejs,
              iconFirebase,
              iconSass,
              iconJs,
            ]}
            url="http://www.walterrepo.co.uk"
            git="https://github.com/walterperez/walterrepo"
            description="This used to be my portfolio, It was the first time I ever used React, I also manage to learn how to use redux when I made it."
          />
          <Project
            photo={cuttingGuruProject}
            title="Cutting Guru"
            stacks={[iconWordpress, iconCss3]}
            url="https://www.cuttingguru.co.uk"
            git="#"
            description="This was a project for a hairdresser salon in London, the owner wanted to keep the website with updates and have the total control of the website, so I decide to use Wordpress for this."
          />
          <Project
            photo={walkerbarbershopProject}
            title="Walker Barbershop"
            stacks={[iconHtml5, iconCss3, iconJs]}
            url="#"
            git="https://github.com/walterperez/"
            description="This was the first project I ever made with flat HTML5, CSS3 and a bit of Javascript, it was for a barbershop owner in Spain, the owner just wanted a flat website and he was not really interested in update it."
          />
          <Project
            photo={wd1ProjectProject}
            title="Walter Designs"
            stacks={[iconHtml5, iconCss3, iconJs]}
            url="#"
            git="https://github.com/walterperez/"
            description="This was going to be my first website when I just knew HTML and CSS3."
          />
        </GridForProjects>
      </ProjectsContContainers>
    </ProjectsMainDiv>
  );
}
