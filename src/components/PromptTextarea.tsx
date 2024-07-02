import styled from "styled-components";
import React from "react";

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


interface PromptTextAreaProps {
    onChange: Function;
    placeholder: string;
}
 
interface PromptTextAreaState {
    
}
 
class PromptTextArea extends React.Component<PromptTextAreaProps, PromptTextAreaState> {
    constructor(props : PromptTextAreaProps) {
        super(props)
    }
    render() { 
        return (
            <StringInputWrapper>
                <StringInputElem onChange={this.props.onChange} placeholder={this.props.placeholder}/>
            </StringInputWrapper>
        );
    }
}
 
export default PromptTextArea;