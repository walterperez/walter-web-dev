import React, { Component } from "react";
import styled from "styled-components";
import Reviewer from "./Reviewer";
//Photos
import photo1 from "../img/Reviews/willSmith.jpg";
import photo2 from "../img/Reviews/badBunny.jpg";

const MainContainer = styled.div`
  width: 100%;
  padding: 2em 10%;
  background-color: rgba(0, 0, 0, 0.03);
`;
const MainReviewsContainer = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  font-size: 2em;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 1em;
`;

export default class Reviews extends Component {
  render() {
    return (
      <MainContainer>
        <Title>Reviews</Title>
        <MainReviewsContainer>
          <Reviewer
            photo={photo1}
            name={"Will Smith"}
            company={"Kodiri.com"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
          <Reviewer
            photo={photo2}
            name={"Bad Bunny"}
            company={"Kodiri.com"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </MainReviewsContainer>
      </MainContainer>
    );
  }
}
