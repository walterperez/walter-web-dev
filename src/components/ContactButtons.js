import React from "react";
import styled from "styled-components";
import GithubIcon from "./../img/github.png";
import LinkedInIcon from "./../img/linkedin.png";

const ContactButtonsDiv = styled.div`
  width: 100%;
  max-width: 200px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const Link = styled.a`
  flex: 1;
  max-width: 20%;
  height: auto;
  margin: 0;
  padding: 0;
  position: relative;
  &:nth-child(1) {
    margin: 0 20px 0 0;
  }
  &:after {
    content: "";
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(100, 100, 200, 0.3);
    z-index: 100;
  }
  &:hover {
    cursor: pointer;
    &:after {
      background: rgba(100, 200, 100, 0.3);
    }
  }
`;

const Icon = styled.img`
  max-width: 100px
  height:auto;
  margin: 0;
  padding: 0;
`;

export default function ContactButtons() {
  return (
    <ContactButtonsDiv>
      <Link href={""}>
        <Icon src={GithubIcon} />
      </Link>
      <Link href={""}>
        <Icon src={LinkedInIcon} />
      </Link>
    </ContactButtonsDiv>
  );
}
