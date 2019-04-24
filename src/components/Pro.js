import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styles
const ProContainer = styled.div`
  margin-top: 10%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s ease-in;
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ProIcon = styled.div`
  width: 35%;
  height: auto;
`;

const ProDescription = styled.div`
  margin-top: 15px;
`;

const ProTitle = styled.h3`
  text-align: center;
  color: rgb(82, 79, 79);
`;

const ProSubtitle = styled.h3`
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
