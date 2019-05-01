import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styles
const ProContainer = styled.div`
  padding: 0.5em 1em;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const ProIcon = styled.div`
  width: 35%;
  height: auto;
`;

const ProDescription = styled.div`
  margin-bottom: 1em;
`;

const ProTitle = styled.h3`
  text-align: center;
  font-size: 1.2em;
  color: rgb(82, 79, 79);
  margin-bottom: 1em;
`;

const ProSubtitle = styled.h3`
  font-size: 1em;
  color: rgb(155, 153, 153);
`;

export default function Pro({ icon, title, description }) {
  return (
    <ScrollAnimation
      duration={0.5}
      animateIn="fadeInLeftBig"
      animateOut="fadeOut"
      animateOnce={true}
    >
      <ProContainer>
        <ProIcon>
          <img src={icon} alt="chating icon" />
        </ProIcon>
        <ProDescription>
          <ProTitle>{title}</ProTitle>
          <ProSubtitle>{description}</ProSubtitle>
        </ProDescription>
      </ProContainer>
    </ScrollAnimation>
  );
}
