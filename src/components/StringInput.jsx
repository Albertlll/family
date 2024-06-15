import styled from "styled-components";
import TheBestTextarea from "./TheBestTextarea";
import { useState } from "react";


const InputWrapper = styled.div`
    width: 1314px;
    height: 250px;
    position: relative;
`

function StringInput() {
    const [answer, setAnswer] = useState();

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){

            window.location.href = "res_rep_correct";
            
            httpClient.post("/api/v1/storys/" + localStorage.getItem('node').node_id,(
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