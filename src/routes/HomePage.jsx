import React from "react";
// Components
import Pros from "../components/Pros";
import Projects from "../components/Projects";
import HeroSplash from "../components/HeroSplash";
// import Reviews from '../components/Reviews';
import Tools from "../components/Tools";

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroSplash />
      <Pros />
      <Projects />
      <Tools />
      {/* WIP <Reviews /> */}
    </React.Fragment>
  );
}
