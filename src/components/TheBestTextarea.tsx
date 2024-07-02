import React from 'react';
import styled from 'styled-components';



const StringInputWrapper = styled.div`
    background: rgba(0, 0, 0, 0.8);
    border: 5px solid #FFFFFF;
    box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
    border-radius: 80px;
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


interface TheBestTextAreaProps {
    onKeyPress : Function;
    placeholder : string;
}

 
class TheBestTextArea extends React.Component<TheBestTextAreaProps> {
    constructor(props: TheBestTextAreaProps) {
        super(props);
    }
    render() { 
        return (
        <StringInputWrapper>
            <StringInputElem onKeyDown={(event) => {this.props.onKeyPress(event)}} placeholder={this.props.placeholder}/>
        </StringInputWrapper>
        );
    }
}
 
export default TheBestTextArea;