import Variants from "./Variants";
import StringInput from "./StringInput";
import styled from "styled-components";
import { useState } from "react";

const TitleWrapper = styled.div`
    display:flex;
    padding-left:  70px;
    padding-right: 70px;
    
    height: 104px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);

`

const TitleH1 = styled.h1`
    color: white;
    font-family: Ermilov;
    font-size: 70px;
    position: relative;
`



function Questions() {
    const [title, setTitle] = useState('Выберите вариант ответа');

    return (
        // Крч пропс сюда передается какой тип вопроса
    
    <>

        <TitleWrapper>
            <TitleH1>
                {title} 
            </TitleH1>
        </TitleWrapper>



        <StringInput></StringInput>

        {/* <Variants variants={['a', 'v', 'd', 'c']}></Variants> */}
    </>);
}

export default Questions;