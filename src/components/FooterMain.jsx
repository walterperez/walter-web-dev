import React from 'react';
import styled from 'styled-components';
import ContactButtons from './ContactButtons';

const FooterDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 3em 3em;
  position: relative;
  background-color: #191919;
  color: #0578b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: visible;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -1em;
    left: -1em;
    width: 110%;
    height: 25%;
    background-color: #191919;
    z-index: 100%;
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
