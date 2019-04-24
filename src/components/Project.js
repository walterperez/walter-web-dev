import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const ProjectContainer = styled.div`
  margin-top: 5%;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 401px) {
    &:nth-child(even) {
      margin-right: 5%;
    }
  }
`;
const ProjectPhoto = styled.img`
  width: 100%;
  min-height: auto;
  height: auto;
  margin-bottom: -4px;
`;
const Description = styled.div`
  padding: 10px 20px;
  background: rgba(250, 250, 250, 0.5);
`;
const Title = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 1.5rem;
`;
const Urls = styled.div``;
const StackUsed = styled.div``;
const StackImg = styled.img`
  max-width: 30px;
  heigth: auto;
  margin: 0 0.5rem 1rem 0;
`;
const GitHub = styled.a`
  margin-right: 1rem;
`;
const Demo = styled.a``;

export default function Project({ photo, title, description, stacks }) {
  return (
    <ScrollAnimation
      duration={0.5}
      animateIn="fadeInLeftBig"
      animateOut="fadeOut"
      animateOnce={true}
    >
      <ProjectContainer>
        <ProjectPhoto src={photo} alt={title} />
        <Description>
          <Title>{title}</Title>
          <ProjectDescription>{description}</ProjectDescription>
          <StackUsed>
            {stacks
              ? stacks.map((stack, index) => {
                  return (
                    <StackImg src={stack} alt={"stack icon"} key={index} />
                  );
                })
              : null}
          </StackUsed>
          <Urls>
            <GitHub href={"http://www.github.com"}>GitHub</GitHub>
            <Demo href={"#"}>Demo</Demo>
          </Urls>
        </Description>
      </ProjectContainer>
    </ScrollAnimation>
  );
}
