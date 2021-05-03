import React from "react";
import styled from "styled-components";
// Components
import ContactButtons from "../ContactButtons";
// Constants
import { FOOTER_BACKGROUND, FOOTER_FONTS } from "../../styles/constants";

const FooterDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 3em 3em;
  position: relative;
  background-color: ${FOOTER_BACKGROUND};
  color: ${FOOTER_FONTS};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -1em;
    left: -1em;
    width: 110%;
    height: 30%;
    background-color: ${FOOTER_BACKGROUND};
    z-index: 1;
    transform: rotate(2deg);
  }
`;

const Copyrights = styled.p`
  flex: 1;
  font-size: 1em;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterDiv id="footer">
      <ContactButtons />
      <Copyrights>© Designed by WalterWebDev | All rights reserved</Copyrights>
    </FooterDiv>
  );
}
