import React from "react";
import styled from "styled-components";

//Styles
const ProsContainer = styled.div`
    margin-top: 10%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: all 0.5s ease-in;
    &:hover {
        box-shadow: 0 10px 25px rgba(0, 0, 0,0.2);
    }
`;

const ProsIcon = styled.div`
    width: 35%;
    height: auto;
`;

export default function Pro({icon, title, description}) {
    return (
        <ProsContainer>
            <ProsIcon>
                <img src={icon} alt="chating icon" />
            </ProsIcon>
            <div className="pros-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </ProsContainer>
    )
}