import React from "react";
//Pros
import mainPhoto from "./../img/hero.svg"
import globeIcon from "./../img/internet.png";
import paperPlaneIcon from "./../img/paper-plane.png";
import chatsIcon from "./../img/chat.png";
import paintIcon from "./../img/paint-palette.png";
//Projects
import cuttingGuruProject from "./../img/cuttingguru.png";
import walkerbarbershopProject from "./../img/walkerbarbershop.png";
import walterrepoProject from "./../img/walterrepo.png";
import wd1ProjectProject from "./../img/wd1.png";
import kodflixProject from "./../img/kodflix.png";


function Projects() {
    return (

        <div className="projects">
            <div className="projects-cont-containers">
                <h2>Projects</h2>
                <div className="projects-container">
                    <div className="projects-icon">
                        <img src={kodflixProject} alt="chating icon" />
                    </div>
                    <div className="projects-description">
                        <h3>Multilingual</h3>
                        <p>Fluent in English and Spanish.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Pros() {
    return (
        <div className="pros">
            <div className="pros-cont-containers">
                <h2>About</h2>
                <div className="pros-container">
                    <div className="pros-icon">
                        <img src={globeIcon} alt="chating icon" />
                    </div>
                    <div className="pros-description">
                        <h3>Multilingual</h3>
                        <p>Fluent in English and Spanish.</p>
                    </div>
                </div>
                <div className="pros-container">
                    <div className="pros-icon">
                        <img src={chatsIcon} alt="chating icon" />
                    </div>
                    <div className="pros-description">
                        <h3>Customer Service</h3>
                        <p>Fluent in English and Spanish.</p>
                    </div>
                </div>
                <div className="pros-container">
                    <div className="pros-icon">
                        <img src={paintIcon} alt="chating icon" />
                    </div>
                    <div className="pros-description">
                        <h3>Natural talent for arts</h3>
                        <p>Fluent in English and Spanish.</p>
                    </div>
                </div>
                <div className="pros-container">
                    <div className="pros-icon">
                        <img src={paperPlaneIcon} alt="chating icon" />
                    </div>
                    <div className="pros-description">
                        <h3>Afordable junior with senior skills</h3>
                        <p>I can write front end as well back end.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="home-main-container">
                <div className="home-main-letters">
                    <h1 className="home-title">
                        Walter Perez
                    </h1>
                    <h3 className="home-subtitle">
                        Web Developer & Graphic Designer
                    </h3>
                    <button className="home-button-start">
                        Contact now!
                    </button>
                </div>
                <img
                    className="home-mainImg"
                    src={mainPhoto}
                    alt="Earth planet"
                />
            </div>
            <Pros />
            <Projects />
        </React.Fragment>
    )
}