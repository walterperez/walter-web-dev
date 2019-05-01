import React from "react";
import styled from "styled-components";
import ContactButtons from "./ContactButtons";

const FooterDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 3em 3em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #0578b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Copyrights = styled.p`
    flex:1
    font-size:1em;
    font-weight:bold;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <ContactButtons />
      <Copyrights>© Designed by WalterWebDev | All rights reserved</Copyrights>
    </FooterDiv>
  );
}
