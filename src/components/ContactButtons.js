import React from "react";
import styled from "styled-components";
import GithubIcon from "./../img/github-logo.svg";
import LinkedInIcon from "./../img/linkedin.svg";

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
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.2);
  height: auto;
  margin: 0;
  padding: 0;
  margin-right: 2em;
  &:hover {
    background-color: rgba(250, 250, 250, 0.8);
    box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.5);
  }
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
