import styled from "styled-components";


const StringInputWrapper = styled.div`
    background: none;

    border: 5px solid #FFFFFF;
    box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    width: 100%;
    height: 100%;
`

const StringInputElem = styled.textarea`
    background: none;
    color: #848482;
    outline: none;
    border: none;
    margin-left: 83px;
    margin-top: 37px;
    font-size:30px;
    width: calc(100% - 166px);
    resize: none;
    height: calc(100% - 37px);
`





function PromptTextarea(props) {
    return (

    <StringInputWrapper>
        <StringInputElem onChange={props.onChange} placeholder={props.placeholder}/>
    </StringInputWrapper>
    );
}

export default PromptTextarea; 