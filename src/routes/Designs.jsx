import React from 'react';
import styled from 'styled-components';
// Images
import al1design from '../img/designs/accesibility design (1).png';
import al2design from '../img/designs/accesibility design (2).png';
import al3design from '../img/designs/accesibility design (3).png';
import al4design from '../img/designs/walterperez.png';
import al5design from '../img/designs/wwd.png';
// Logos
import al6design from '../img/logo-desings/kodflix-logo.png';
import al7design from '../img/logo-desings/logo-accessibilitylive.png';
import al8design from '../img/logo-desings/WLogo.png';
// Draws
import al9design from '../img/draws/GUY.png';
import al10design from '../img/draws/happyFridge.png';
import al11design from '../img/draws/walterFirstDraw.png';

const MainDivDesigns = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: #4db4f5;
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.35));
  padding: 3em 2em;
`;

const MainContainer = styled.div`
  line-height: 0;
  -moz-column-count: 4;
  -webkit-column-count: 4;
  column-count: 4;
  -moz-column-gap: 0px;
  column-count: 4;
  column-gap: 1em;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  background-color: rgba(250, 250, 250, 0.5);
  padding: 1em 1em 0 1em;

  @media (max-width: 1000px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }

  @media (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

const Design = styled.img`
  width: 100% !important;
  height: auto !important;
  margin-bottom: 1em;
`;

const TitleDesigns = styled.h3`
  color: rgba(250, 250, 250, 0.8);
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 2em;
  margin-top: 2em;
  position: relative;
`;

export default function Designs() {
  const desings = [
    al2design,
    al1design,
    al3design,
    al4design,
    al7design,
    al5design,
    al6design,
    al8design,
    al9design,
    al10design,
    al11design,
  ];
  return (
    <MainDivDesigns>
      <TitleDesigns>Designs</TitleDesigns>
      <MainContainer>
        {desings.map((design, index) => (
          <Design src={design} alt="design" key={index} />
        ))}
      </MainContainer>
    </MainDivDesigns>
  );
}
