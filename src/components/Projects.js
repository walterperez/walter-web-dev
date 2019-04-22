import React from "react";
import styled from "styled-components";
//Components
import Project from "./Project";
//Images
import TopWave from "./../img/wave.png";
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

const ProjectsMainDiv = styled.div`
  background-color: #f7f7f7;
`;

const ProjectsContContainers = styled.div`
  margin: 0;
  background-color: #b3c100;
`;

const ProjectTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 0;
`;

export default function Projects() {
  return (
    <ProjectsMainDiv>
      <ProjectsContContainers>
        <ProjectTitle>Projects</ProjectTitle>
        <Project
          photo={kodflixProject}
          title={"Kodflix"}
          stacks={[iconNodejs, iconReact, iconCss3]}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          photo={walterrepoProject}
          title={"WalterRepo"}
          stacks={[iconNodejs, iconReact, iconCss3]}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          photo={cuttingGuruProject}
          title={"Kodflix"}
          stacks={[iconHtml5, iconNodejs, iconReact, iconCss3]}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          photo={walkerbarbershopProject}
          title={"Kodflix"}
          stacks={[iconHtml5, iconNodejs, iconReact, iconCss3]}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          photo={wd1ProjectProject}
          title={"Kodflix"}
          stacks={[iconHtml5, iconNodejs, iconReact, iconCss3]}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
      </ProjectsContContainers>
    </ProjectsMainDiv>
  );
}
