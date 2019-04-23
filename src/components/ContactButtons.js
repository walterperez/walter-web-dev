import React from 'react'
import styled from "styled-components";

const ContactButtonsDiv = styled.div`
    max-width: 300px;
    height: auto;
    display:flex;
    flex-direction: row;
`;

const Link = styled.a`

`;

const Icon = styled.img`
    max-width: 100px
    height:auto;
`;

export default function ContactButtons() {
  return (
    <ContactButtonsDiv>
      <Link href={""}><Icon src={}/></Link>
      <Link href={""}><Icon src={}/></Link>
    </ContactButtonsDiv>
  )
}
