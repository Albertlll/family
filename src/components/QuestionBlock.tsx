import { Component } from "react";
import styled from "styled-components";
import TextInput from "./TextInput"
import { useNavigate } from "react-router-dom";
import Variants from "./Variants";



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

const QuestionBlockElem = styled.div`
    height: 396px;
    display: flex;
    flex-direction: column;
    margin-top: 500px;
    align-items: center;
    justify-content: space-between;

`
 


interface QuestionBlockWrapperProps{
    isTextInput : boolean;
    variants? : Array<string>;
    nextGameState : Function;
    nextNode? : Function;

    storyId : number;
    nodeId : number;
    selectedUser : string;
    setAnswer : Function;
}


interface QuestionBlockProps extends QuestionBlockWrapperProps {
    navigate : Function;
}

interface QuestionBlockState {
    dataGet : boolean;
}

class QuestionBlock extends Component<QuestionBlockProps, QuestionBlockState> {

    constructor(props: QuestionBlockProps) {
        super(props);
    }

    render() { 

        return (
        <QuestionBlockElem>
        <TitleWrapper>
            <TitleH1>
                {this.props.selectedUser + ' тебе выбирать!'} 
            </TitleH1>
        </TitleWrapper>


        {this.props.isTextInput  ? 
        
        <TextInput setAnswer={this.props.setAnswer} nextGameState={this.props.nextGameState} storyId={this.props.storyId} nodeId={this.props.nodeId}/>

        :
        <Variants setAnswer={this.props.setAnswer} nextNode={this.props.nextNode}  storyId={this.props.storyId} nodeId={this.props.nodeId} variants={this.props.variants}></Variants>
        }
        </QuestionBlockElem>
    );} 
}


function QuestionBlockWrapper(props : QuestionBlockWrapperProps) {
    const navigate = useNavigate();
    return(<QuestionBlock {...props} navigate={navigate}></QuestionBlock>);
}

export default QuestionBlockWrapper;