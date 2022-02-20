import React, { useState } from "react";
import NumberInput from "../NumberInput/NumberInput";
import SumButton from "../SumButton/SumButton";
import "./SumForm.css"

const SumForm = ({submitCallback}) => {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    const getResult = (e) => {
        e.preventDefault();
        if(firstInput !== "" && secondInput !== ""){
            submitCallback(parseInt(firstInput) + parseInt(secondInput));
            setFirstInput("");
            setSecondInput("");
        }
    }

    return (
        <form className="SumForm" onSubmit={getResult}>
            <NumberInput value={firstInput} onChange={(e) => setFirstInput(e.target.value)}/>
            <NumberInput value={secondInput} onChange={(e) => setSecondInput(e.target.value)}/><br/>
            <SumButton/>
        </form>
    )
}

export default SumForm;