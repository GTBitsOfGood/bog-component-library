import React, {useState} from 'react';
import styled from "styled-components";

const SliderBase = styled.div`
    align-items: center; 

    .slider {
        flex: 6;
        backgroud: #efefef;
        outline: none;
        width: 100%;
        height: 15px
    }

    .slider:hover {
        opacity: 50
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 2em;
        border-radius: 1em;
        background: #007cf8;
        border: none;
        box-shadow: 0 0 2px black;
      }
    .slider::-webkit-slider-thumb:hover {
        opacity: 2
    }

 
`;


// how to define width and height? 
// we have themes for the colours 
export const Slider = ({min, max, definedValue, ...props}) => {
    const [value, setValue] = useState(definedValue);

    const onChange = (e) => setValue(e.target.value);

    return (
        <SliderBase>
            <input type="range" min={min} max={max} value={value} className="slider" onChange={onChange} />
            <div className="value">{value}</div>
            <div className="minimum">{min}</div>
            <div className="maximum">{max}</div>
        </SliderBase>
    )
}