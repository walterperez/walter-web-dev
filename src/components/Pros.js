import React from "react";
import styled from "styled-components";
import Pro from "./Pro";
//Images
import globeIcon from "./../img/internet.png";
import paperPlaneIcon from "./../img/paper-plane.png";
import chatsIcon from "./../img/chat.png";
import paintIcon from "./../img/paint-palette.png";
//Styles
const ProsDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  background-color: rgb(61, 152, 209);
`;

const ProsBox = styled.div`
  background-color: #f7f7f7;
  padding: 30px;
  width: 100%;
  height: auto;
  border-radius: 50px 50px 0 0;
`;

const ProsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export default function Pros() {
  return (
    <ProsDiv>
      <ProsBox>
        <ProsTitle>About</ProsTitle>
        <Pro
          icon={globeIcon}
          title={"Multilingual"}
          description={"Fluent in English and Spanish."}
        />
        <Pro
          icon={chatsIcon}
          title={"Customer Service"}
          description={"Fluent in English and Spanish."}
        />
        <Pro
          icon={paintIcon}
          title={"Natural talent for arts"}
          description={"Fluent in English and Spanish."}
        />
        <Pro
          icon={paperPlaneIcon}
          title={"Afordable junior with senior skills"}
          description={"I can write front end as well back end."}
        />
      </ProsBox>
    </ProsDiv>
  );
}
