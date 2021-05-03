import React from "react";
import styled from "styled-components";
import GithubIcon from "../../img/icons_svg/github-logo.svg";
import LinkedInIcon from "../../img/icons_svg/linkedin.svg";
import MailIcon from "../../img/icons_svg/mail.svg";

const ContactButtonsDiv = styled.div`
  flex: 1;
  width: 100%;
  max-width: 200px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2em;
`;

const Link = styled.a`
  flex: 1;
  max-width: 20%;
  height: auto;
  margin: 0;
  padding: 0;
  position: relative;
  &:nth-child(1) {
    margin: 0 0.5em 0 0;
  }
  &:nth-child(2) {
    margin: 0 0.5em 0 0;
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
    filter: invert(72%) sepia(100%) saturate(1000%) hue-rotate(552deg)
      brightness(100%) contrast(477%);
  }
  @media (min-width: 1401px) {
    margin-right: 10vw;
  }
`;

export default function ContactButtons() {
  return (
    <ContactButtonsDiv>
      <Link href="https://github.com/walterperez" target="_blank">
        <Icon src={GithubIcon} />
      </Link>
      <Link href="https://www.linkedin.com/in/walter-christian-perez-hernandez-0730a9184/">
        <Icon src={LinkedInIcon} />
      </Link>
      <Link href="mailto:walter_cph93@outlook.com" target="_blank">
        <Icon src={MailIcon} />
      </Link>
    </ContactButtonsDiv>
  );
}
