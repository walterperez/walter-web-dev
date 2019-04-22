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
          icon={kodflixProject}
          title={"Kodflix"}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          icon={walterrepoProject}
          title={"Kodflix"}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          icon={cuttingGuruProject}
          title={"Kodflix"}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          icon={walkerbarbershopProject}
          title={"Kodflix"}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
        <Project
          icon={wd1ProjectProject}
          title={"Kodflix"}
          description={
            "Rest full API pretending to clone Netflix, the movies are fetch from MongoAthlasDB, for the server I used express and for the frontend I used Reactjs."
          }
        />
      </ProjectsContContainers>
    </ProjectsMainDiv>
  );
}
