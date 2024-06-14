import styled from "styled-components";
import TheBestTextarea from "./TheBestTextarea";



const InputWrapper = styled.div`
    width: 1314px;
    height: 250px;
    position: relative;
`

function StringInput() {

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
                window.location.href = "res_rep_correct";
        }
      };


    return (
        <InputWrapper>
            <TheBestTextarea onKeyPress={(event) => handleKeyPress(event)} placeholder='Введите текст...'></TheBestTextarea>
        </InputWrapper>
    );
}

export default StringInput;