import React from "react";
import mainPhoto from "./../img/hero.svg"
//Components
import Pros from "./../components/Pros";
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