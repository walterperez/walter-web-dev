import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  heigth: auto;
  margin: 0;
  padding: 10% 10%;
  background-color: rgba(0, 0, 0, 0.9);
  color: green;
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
      <Copyrights>© Designed by WalterWebDev | All rights reserved</Copyrights>
    </FooterDiv>
  );
}
