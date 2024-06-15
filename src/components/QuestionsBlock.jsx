import Variants from "./Variants";
import StringInput from "./StringInput";
import styled from "styled-components";
import { useState } from "react";

const TitleWrapper = styled.div`
    display:flex;
    padding-left:  70px;
    padding-right: 70px;
    z-index: 6;
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
    z-index: 7
`



function Questions(props) {
    const [title, setTitle] = useState('Ответьте  на вопрос');


    var users = JSON.parse(localStorage.getItem('players'));
    var randomIndex = Math.floor(Math.random() * users.length);


    var selected_user = users[randomIndex];

    return (
        // Крч пропс сюда передается какой тип вопроса
    
    <>

        <TitleWrapper>
            <TitleH1>
                {selected_user + ' тебе выбирать!'} 
            </TitleH1>
        </TitleWrapper>


        {props.type == "text" ? 
        
        <StringInput></StringInput>
        :
        <Variants variants={
            [
                JSON.parse(localStorage.getItem('node')).option_one,
                JSON.parse(localStorage.getItem('node')).option_two,
                JSON.parse(localStorage.getItem('node')).option_three,
                JSON.parse(localStorage.getItem('node')).option_four
            ]
        }></Variants>
        
        }


    </>);
}

export default Questions;