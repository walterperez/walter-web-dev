import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const TechStackDiv = styled.div`
  flex: 1;
  width: 100%;
  height: auto;
  padding: 1em;
  margin-bottom: 2em;
`;

const TitleTechStack = styled.h3`
  font-size: 1.5em;
  color: #444;
  text-align: center;
  margin-bottom: 1em;
`;
const StackBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageStack = styled.img`
  flex: 1;
  width: 100%;
  max-width: 50px;
  margin-right: 0.5em;
  height: auto;
  @media (max-width: 500px) {
    max-width: 35px;
  }
`;

function TechStack({ title, icons }) {
  return (
    <ScrollAnimation
      duration={0.5}
      animateIn="fadeIn"
      animateOut="fadeOut"
      animateOnce
    >
      <TechStackDiv>
        <TitleTechStack>{title}</TitleTechStack>
        <StackBox>
          {icons.map((stack, index) => (
            <ImageStack src={stack} key={index} alt="image stack" />
          ))}
        </StackBox>
      </TechStackDiv>
    </ScrollAnimation>
  );
}

TechStack.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired
};

export default TechStack;
