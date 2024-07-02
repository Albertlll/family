import styled from "styled-components";
import TheBestTextarea from "./TheBestTextarea.tsx";
import React from "react"
const InputWrapper = styled.div`
    width: 1314px;
    height: 250px;
    position: relative;
`




interface TextInputProps {
    nextGameState : Function;
    storyId : number;
    nodeId : number;
    setAnswer : Function;
}
 
interface TextInputState {
    answer: string;
}
 
class TextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(props: TextInputProps) {
        super(props);
        this.state = { answer : ''};
    }
    
    handleKeyPress(event) {

        if (event.key === 'Enter') {
            // httpClient.post("/api/v1/nodes/get-reaction/",
            //     {
            //         'answer': this.state.answer,
            //         'story_id': this.props.storyId,
            //         'id' : this.props.nodeId
        
            //     }).then(function(response) {
            //         this.props.nextGameState(response.data.reaction);
            //     })
            console.log('csdcscdcdsdc')
            this.props.setAnswer(event.target.value);
            this.props.nextGameState();

        }

    }



    render() {
        const bindedKeyPress = this.handleKeyPress.bind(this);
        return (
            <InputWrapper>
                <TheBestTextarea onKeyPress={bindedKeyPress} placeholder='Введите текст...'></TheBestTextarea>
            </InputWrapper>
        );
    }
}
 
export default TextInput;
