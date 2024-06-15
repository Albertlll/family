import styled from "styled-components";
import TheBestTextarea from "./TheBestTextarea";
import { useState } from "react";
import {httpClient} from "../httpClient"

const InputWrapper = styled.div`
    width: 1314px;
    height: 250px;
    position: relative;
`

function StringInput() {
    const [answer, setAnswer] = useState();

    const handleKeyPress = (event) => {
        console.log("зашло в хендил нажатия")
        if(event.key === 'Enter'){
            console.log("зашло в хендил ентера'")
            
            httpClient.post("/api/v1/get-reaction/" + JSON.parse(localStorage.getItem('node')).node_id,(
                {
        
                    'answer': answer,
                    'story_id': JSON.parse(localStorage.getItem('story')).story_id,
                    'id' : JSON.parse(localStorage.getItem('story')).path_id
        
                }).then(function(response) {

                    if (response.data.reaction){
                        window.location.href = 'res_rep_correct'
                    }else{
                        window.location.href = 'res_rep_uncorrect'
                    }
    
        
                }))
        
        }
        setAnswer(event.target.value)

      };


    return (
        <InputWrapper>
            <TheBestTextarea onKeyPress={(event) => handleKeyPress(event)} placeholder='Введите текст...'></TheBestTextarea>
        </InputWrapper>
    );
}

export default StringInput;