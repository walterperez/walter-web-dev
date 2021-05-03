import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  .st0 {
    fill: ${({ color }) => color || "#4fbcff"};
  }
`;

export default function CheckedIcon({ color }) {
  return (
    <IconWrapper color={color}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              class="st0"
              d="M449.7,239.8c-0.5-7.5-7.1-13.2-14.6-12.7c-7.5,0.5-13.2,7.1-12.7,14.6c0.3,4.7,0.5,9.4,0.5,14.2
			c0,109.1-88.7,197.8-197.8,197.8S27.4,365.1,27.4,256S116.1,58.2,225.1,58.2c43.2,0,84.2,13.7,118.6,39.5c6,4.5,14.6,3.3,19.2-2.7
			c4.5-6,3.3-14.6-2.7-19.2c-39.2-29.4-85.9-45-135.1-45C101,30.9,0,131.9,0,256s101,225.1,225.1,225.1s225.1-101,225.1-225.1
			C450.3,250.6,450.1,245.1,449.7,239.8z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              class="st0"
              d="M496.4,61.8c-20.8-20.8-54.7-20.8-75.5,0L223.8,258.9L153.9,189c-20.8-20.8-54.7-20.8-75.5,0
			c-20.8,20.8-20.8,54.7,0,75.5l120.3,120.3c6.9,6.9,16,10.3,25,10.3c9.1,0,18.1-3.4,25-10.3l247.6-247.6
			C517.2,116.4,517.2,82.6,496.4,61.8z M477,117.9L229.5,365.5c-3.1,3.1-8.2,3.1-11.3,0L97.8,245.1c-10.1-10.1-10.1-26.6,0-36.8
			c5.1-5.1,11.7-7.6,18.4-7.6s13.3,2.5,18.4,7.6l71.9,71.9c4.6,4.6,10.8,7.2,17.3,7.2c6.6,0,12.7-2.6,17.3-7.2L440.3,81.1
			c10.1-10.1,26.6-10.1,36.8,0C487.2,91.3,487.2,107.8,477,117.9z"
            />
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
}