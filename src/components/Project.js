import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const ProjectContainer = styled.div`
  transition: all 0.3s ease-in;
  width: 100%;
  height: 100%;
  max-height: 600px;
  margin-bottom: 1em;
  background: rgba(194, 209, 115, 0.8);
  &:hover {
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.3);
    background: rgba(194, 209, 115);
  }
  @media (min-width: 401px) {
    margin-top: 10%;
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
`;
const Title = styled.h3`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const ProjectDescription = styled.p`
  font-size: 1rem;
  overflow-y: scroll;
  padding: 0.5em 1em;
  height: 100%;
  min-heigh: 100%;
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
`;
const Demo = styled.a``;

export default function Project({ photo, title, description, stacks }) {
  return (
    <ScrollAnimation duration={0.5} animateIn="fadeIn" animateOnce={true}>
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
