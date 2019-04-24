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
  max-width: 25%;
  height: auto;
  &:nth-child(1) {
    margin: 0 20px 0 0;
  }
`;

const Icon = styled.img`
  max-width: 100px
  height:auto;
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
