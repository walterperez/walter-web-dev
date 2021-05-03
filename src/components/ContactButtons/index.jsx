import React from "react";
import styled from "styled-components";
// Icons
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import GithubIcon from "./icons/GithubIcon";
// Constats
import {
  CONTACT_ICONS_COLOR_1,
  CONTACT_ICONS_COLOR_2,
} from "../../styles/constants";

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

export default function ContactButtons() {
  return (
    <ContactButtonsDiv>
      <Link href="https://github.com/walterperez" target="_blank">
        <GithubIcon
          color1={CONTACT_ICONS_COLOR_1}
          color2={CONTACT_ICONS_COLOR_2}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/walter-christian-perez-hernandez-0730a9184/"
        target="_blank"
      >
        <LinkedinIcon
          color1={CONTACT_ICONS_COLOR_1}
          color2={CONTACT_ICONS_COLOR_2}
        />
      </Link>
      <Link href="mailto:walter_cph93@outlook.com" target="_blank">
        <MailIcon
          color1={CONTACT_ICONS_COLOR_1}
          color2={CONTACT_ICONS_COLOR_2}
        />
      </Link>
    </ContactButtonsDiv>
  );
}
