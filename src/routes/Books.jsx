import React from 'react';
import styled from 'styled-components';
// Images
import book1 from '../img/books/book (1).JPG';
import book2 from '../img/books/book (2).JPG';
import book3 from '../img/books/book (3).JPG';
import book4 from '../img/books/book (4).JPG';
import book5 from '../img/books/book (5).JPG';
import book6 from '../img/books/book (6).JPG';
import book7 from '../img/books/book (7).JPG';

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
  const desings = [book1, book2, book3, book4, book5, book6, book7];
  return (
    <MainDivDesigns>
      <TitleDesigns>Books</TitleDesigns>
      <MainContainer>
        {desings.map((design, index) => (
          <Design src={design} alt="design" key={index} />
        ))}
      </MainContainer>
    </MainDivDesigns>
  );
}
