import React from "react";
import Pro from "./Pro";
//Images
import globeIcon from "./../img/internet.png";
import paperPlaneIcon from "./../img/paper-plane.png";
import chatsIcon from "./../img/chat.png";
import paintIcon from "./../img/paint-palette.png";



export default function Pros() {
    return (
        <div className="pros">
            <div className="pros-cont-containers">
                <h2>About</h2>
                <Pro icon={globeIcon} title={"Multilingual"} description={"Fluent in English and Spanish."}/>
                <Pro icon={chatsIcon} title={"Customer Service"} description={"Fluent in English and Spanish."}/>
                <Pro icon={paintIcon} title={"Natural talent for arts"} description={"Fluent in English and Spanish."}/>
                <Pro icon={paperPlaneIcon} title={"Afordable junior with senior skills"} description={"I can write front end as well back end."}/>
            </div>
        </div>
    )
}