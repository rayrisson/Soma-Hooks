import React from "react";
import "./NumberInput.css"

const NumberInput = ({onChange, value}) => {
    return(
        <input type='number' value={value} onChange={onChange} className="NumberInput"/>
    )
}

export default NumberInput;