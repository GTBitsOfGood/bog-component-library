import React, {useState} from 'react';
import styled from "styled-components";

const Styles = styled.div`


`;

export const Slider = ({min, max, definedValue, ...props}) => {
    const [value, setValue] = useState(definedValue);

    const onChange = (e) => setValue(e.target.value);

    return (
        <Styles>
            <input type="range" min={min} max={max} value={value} className="slider" onChange={onChange} />
            <div className="value">{value}</div>
        </Styles>
    )
}