import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  margin-top: 2rem;
`;
const ProjectPhoto = styled.img`
  width: 100%;
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
  color: rgba(0, 0, 0, 0.6);
  margin-bottom:1.5rem;
`;
const Urls = styled.div``;
const StackUsed = styled.div``;
const StackImg = styled.img`
  max-width: 30px;
  heigth: auto;
  margin: 0 .5rem;
`;
const GitHub = styled.a``;
const Demo = styled.a``;

export default function Project({ photo, title, description, stacks }) {
  return (
    <ProjectContainer>
      <ProjectPhoto src={photo} alt={title} />
      <Description>
        <Title>{title}</Title>
        <ProjectDescription>{description}</ProjectDescription>
        <StackUsed>
          {stacks
            ? stacks.map((stack, index) => {
                return <StackImg src={stack} alt={"stack icon"} key={index} />;
              })
            : null}
        </StackUsed>
        <Urls>
          <GitHub href={"http://www.github.com"}>Code</GitHub>
          <Demo href={"#"}>Demo</Demo>
        </Urls>
      </Description>
    </ProjectContainer>
  );
}
