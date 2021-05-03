import React, { Component } from "react";
import styled from "styled-components";

const SVGWrapper = styled.div`
  margin-bottom: -10px;

  .st0 {
    clip-path: url(#SVGID_2_);
  }
  .st1 {
    fill: url(#SVGID_3_);
  }
  .st2 {
    fill: url(#SVGID_4_);
  }
  .st3 {
    fill: url(#SVGID_5_);
  }
  .st4 {
    fill: ${({ color1 }) => color1 || "#FF6969"};
  }
`;

export default class WaveTopPink2 extends Component {
  render() {
    const { color1 = "#FF6969", color2 = "#FFFFFF" } = this.props;

    return (
      <SVGWrapper color1={color1}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 100 900 180"
          style={{ enableBackground: "new 0 0 900 300" }}
          xmlSpace="preserve"
        >
          <g>
            <defs>
              <polygon
                id="SVGID_1_"
                points="899.7,300.7 -0.7,300.6 0,0 900.4,0 		"
              />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
            </clipPath>
            <g class="st0">
              <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="17.113"
                y1="207.2429"
                x2="917"
                y2="207.2429"
              >
                <stop
                  offset="1.001358e-07"
                  style={{ stopColor: color2, stopOpacity: "0" }}
                />
                <stop offset="1" style={{ stopColor: color1 }} />
              </linearGradient>
              <path
                class="st1"
                d="M917,149.1c-284.6-102.2-417.1,13.1-417.1,13.1c-198.5,141.7-482.8,4.6-482.8,4.6v140.9H917V149.1z"
              />
              <linearGradient
                id="SVGID_4_"
                gradientUnits="userSpaceOnUse"
                x1="-35.9287"
                y1="226.4102"
                x2="863.9583"
                y2="226.4102"
              >
                <stop
                  offset="1.001358e-07"
                  style={{ stopColor: color2, stopOpacity: "0" }}
                />
                <stop offset="1" style={{ stopColor: color1 }} />
              </linearGradient>
              <path
                class="st2"
                d="M864,168.2C579.3,66,446.8,181.3,446.8,181.3C248.3,323-35.9,186-35.9,186v140.9H864V168.2z"
              />
              <linearGradient
                id="SVGID_5_"
                gradientUnits="userSpaceOnUse"
                x1="526.3651"
                y1="192.4876"
                x2="25.3578"
                y2="273.4888"
              >
                <stop
                  offset="1.001358e-07"
                  style={{ stopColor: color2, stopOpacity: "0" }}
                />
                <stop offset="1" style={{ stopColor: color1 }} />
              </linearGradient>
              <path
                class="st3"
                d="M450.3,171.8C268.2,293,68.7,168.4-1,116.3v177.4h900.5l6-37.2C621.4,31.6,450.3,171.8,450.3,171.8z"
              />
              <path
                class="st4"
                d="M900.3,365.8V192.4c-301-185.5-440.7-6.4-440.7-6.4c-189.1,199-460,6.5-460,6.5v173.2H900.3z"
              />
            </g>
          </g>
        </svg>
      </SVGWrapper>
    );
  }
}
