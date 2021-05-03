import React, { Component } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
// Constants
import {
  START_GRADIENT_CANVAS,
  END_GRADIENT_CANVAS,
} from "../../styles/constants";

const CanvasWrapper = styled.div`
  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${START_GRADIENT_CANVAS},
      ${END_GRADIENT_CANVAS}
    );
  }
`;

const particlesConfig = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

export default class CanvasRender extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    // console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    // console.log(container);
  }

  render() {
    return (
      <CanvasWrapper>
        <Particles
          id="tsparticles"
          options={particlesConfig}
          init={this.particlesInit}
          loaded={this.particlesLoaded}
        />
      </CanvasWrapper>
    );
  }
}
