import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
// Components
import Project from './Project';
// Projects
import cuttingGuruProject from '../img/projects/cuttingguru.png';
import walkerbarbershopProject from '../img/projects/walkerbarbershop.png';
import walterrepoProject from '../img/projects/walterrepo.png';
// import wd1ProjectProject from '../img/projects/wd1.png';
import kodflixProject from '../img/projects/kodflix.png';
import accesibilityLiveProject from '../img/projects/accessibility-live.png';
import falcon9Project from '../img/projects/Falcon9.png';
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
import iconCordova from '../img/icons_tools/Cordova.png';
import iconTs from '../img/icons_tools/ts.jpg';

const ProjectsMainDiv = styled.div`
  background-color: #f7f7f7;
  z-index: -2;
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
  @media (min-width: 1401px) {
    display: grid;
    column-gap: 3rem;
    row-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
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
              iconCordova
            ]}
            url="https://kodflix-walterperez.herokuapp.com/"
            git="https://github.com/walterperez/kodflix"
            description="Rest full API pretending to clone Netflix, all the movies are fetched from Mongo Atlas DB. I used Express.js for the node server, and React.js for the UI. Credentials for Admin: Email: super-admin@gmail.com Password: super-password"
          />
          <Project
            photo={accesibilityLiveProject}
            title="Accessibility Live"
            stacks={[
              iconReact,
              iconNodejs,
              iconHeroku,
              iconCss3,
              iconJs,
              iconCordova
            ]}
            url="https://accessibilitylive.herokuapp.com/"
            git="https://github.com/kodiri/accessibility-live"
            description="Accessibility Live is a web app that helps people with a disability to plan better their journey, providing information about the working lifts in certain stations. I used Cordova to make the app native for android devices. For the Frontend React, and for the Backend I use Node, with Express.js framework. It fetches data from TFL and Twitter APIs."
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
              iconJs
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
            description="This was a project for a hairdresser salon in London, the owner wanted to keep the website with updates and have the total control of the website, so I decide to use Wordpress for this."
          />
          <Project
            photo={falcon9Project}
            title="Falcon 9"
            stacks={[iconTs, iconReact, iconJs, iconHtml5, iconCss3, iconSass]}
            url="https://walterperez.github.io/Falcon9/"
            git="https://github.com/walterperez/Falcon9"
            description="In this project I was learnig Typescript, I used React for the front end in combination with Sass."
          />
          <Project
            photo={walkerbarbershopProject}
            title="Walker Barbershop"
            stacks={[iconJs, iconHtml5, iconCss3]}
            git="https://github.com/walterperez/walker-barbershop"
            url="https://walterperez.github.io/walker-barbershop/"
            description="This was the first project I ever made with flat HTML5, CSS3 and a bit of Javascript, it was for a barbershop owner in Spain, the owner just wanted a flat website and he was not really interested in update it."
          />
          {/* <Project
            photo={wd1ProjectProject}
            title="Walter Designs"
            stacks={[iconHtml5, iconCss3]}
            url="https://walterperez.github.io/Walter-Designs-original/"
            git="https://github.com/walterperez/Walter-Designs-original"
            description="This was going to be my first website when I just knew HTML and CSS3."
          /> */}
        </GridForProjects>
      </ProjectsContContainers>
    </ProjectsMainDiv>
  );
}
