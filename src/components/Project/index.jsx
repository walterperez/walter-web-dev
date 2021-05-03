import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
// Constants
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK } from "../../styles/constants";

const ProjectContainer = styled.div`
  transition: all 0.3s ease-in;
  width: 100%;
  margin-bottom: 1em;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  background: rgba(250, 250, 250, 0.8);
  font-weight: 800;
  padding: 0 0 2em 0;
  &:hover {
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.3);
    background: #f9f9f9;
  }
  @media (min-width: 401px) {
    margin-top: 10%;
  }
  @media (max-width: 1400px) {
    max-height: 650px;
  }
`;
const ProjectPhotoContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 50%;
`;
const ProjectPhoto = styled.img`
  width: 100%;
  height: 100%;
`;
const Description = styled.div`
  flex: 1;
  padding: 10px 20px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  color: ${PRIMARY_COLOR_DARK};
  display: inline-block;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const ProjectDescription = styled.p`
  font-size: 1rem;
  overflow-y: scroll;
  padding: 0.5em 1em;
  height: 100%;
  min-height: 100%;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1.5rem;
`;
const Urls = styled.div``;
const StackUsed = styled.div``;
const StackImg = styled.img`
  max-width: 30px;
  height: auto;
  margin: 0 0.5rem 1rem 0;
`;
const GitHub = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: #f9f9f9;
  background-color: ${PRIMARY_COLOR};
  padding: 0.5em 1em;

  &:hover {
    color: #f9f9f9;
    background-color: ${PRIMARY_COLOR_DARK};
  }
`;
const Demo = styled.a`
  text-decoration: none;
  color: #f9f9f9;
  padding: 0.5em 1em;
  background-color: ${PRIMARY_COLOR};
  &:hover {
    color: #f9f9f9;
    background-color: ${PRIMARY_COLOR_DARK};
  }
`;

function Project({ photo, title, description, stacks, git, url }) {
  return (
    <ScrollAnimation duration={0.5} animateIn="fadeIn" animateOnce>
      <ProjectContainer>
        <ProjectPhotoContainer>
          <ProjectPhoto src={photo} alt={title} />
        </ProjectPhotoContainer>

        <Description>
          <Title>{title}</Title>
          <ProjectDescription>{description}</ProjectDescription>
          <StackUsed>
            {stacks
              ? stacks.map((stack, indx) => (
                  <StackImg
                    src={stack}
                    alt="stack icon"
                    key={`stackUsed${indx}`}
                  />
                ))
              : null}
          </StackUsed>
          <Urls>
            {git && (
              <GitHub href={git} target="_blank">
                GitHub
              </GitHub>
            )}

            {url && (
              <Demo href={url} target="_blank">
                Demo
              </Demo>
            )}
          </Urls>
        </Description>
      </ProjectContainer>
    </ScrollAnimation>
  );
}

Project.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stacks: PropTypes.array.isRequired,
  git: PropTypes.string,
  url: PropTypes.string
};

export default Project;
