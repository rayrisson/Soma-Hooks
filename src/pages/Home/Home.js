import React, { useState } from "react";
import SumForm from "../../components/SumForm/SumForm";
import Header from "../../containers/Header/Header";
import Section from "../../containers/Section/Section";
import './Home.css'

const Home = ({title}) => {
    const [result, setResult] = useState('');

    return(
        <div className="Home">
            <Header title={title}/>
            <Section className='CalcClass'><SumForm submitCallback={setResult}/></Section>
            <Section className='ResultClass'><span>{result}</span></Section>
        </div>
    )
}

export default Home;