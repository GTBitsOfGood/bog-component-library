import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { variant as styledVariant } from "styled-system";
import theme from "../../theme";
import { lodashGet } from "../../utils";
import { COMMON } from "../../constants";
import { Tooltip } from "../Tooltip/Tooltip";

const SliderBase = styled.div`
  .slider {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: ${(props) => props.width}%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
    --webkitProgressPercent: 0%;
    
  }
  
  .tooltip-container {
      --tooltip-position: calc(${(props) => props.value / props.max * 100}% + ${(props) => 8 - (props.value / props.max * 100) * 0.37}px);
      left: var(--tooltip-position);
      display: none;
  }


  .slider::-webkit-slider-thumb:hover + .tooltip-container {
    display: block;
    }


  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  .slider:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  .slider::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  
  .value-input {
      background: pink;
  }


  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid #473f91;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }

  .slider::-webkit-slider-thumb:hover {
    box-shadow: 0 0 5px 5px #B0A9F5;

  }

  // #473f91
  .slider::-webkit-slider-runnable-track {
    width: ${(props) => props.width}%;
    height: 4px;
    cursor: pointer;
    background-image: linear-gradient(to right, #473f91 ${(props) => props.value / props.max * 100}%, rgba(71, 63, 145, .38) ${(props) => props.value / props.max * 100}%);
    top: 10px;
  }
  
  .information {
      display: flex;
      justify-content: space-between;
  }

  // Size & Typography
  ${styledVariant({
    scale: "slider.sizingAndTypography.regular",
  })}

  ${COMMON};
`;

// how to define width and height?
// we have themes for the colours
export const Slider = ({ min, max, definedValue, width, ...props }) => {
  const [value, setValue] = useState(definedValue);

  const onChange = (e) => setValue(e.target.value);



  return (
    <SliderBase value={value} max={max} width={width}>
        <div className="slider-parent">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                className="slider"
                onChange={onChange}
            />
        
            <Tooltip className=".tooltip" arrowDirection="top" />   
        </div>
      
        <input type="text" name="name" className="value-input" value={value} onChange={(e) => setValue(e.target.value)} />
      

        <div className="information">
            <div className="minimum">{min}</div>
            <div className="value">{value}</div>
            <div className="maximum">{max}</div>
        </div>
    </SliderBase>
  );
};

// sm