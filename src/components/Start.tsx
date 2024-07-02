import React, { ChangeEvent } from 'react';
import styled from 'styled-components'
import PromptTextArea from './PromptTextarea';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.png';


const StartElem = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

`


const StoryPromptBlock = styled.div`
    position: relative;
    width: 768px;
    height: 700px;

    padding-top: 62px;
    // padding-bottom: 75px;

    background: rgba(6, 16, 0, 0.7);
    border: 7px solid #FFFFFF;
    box-shadow: 0px 0px 100px 5px #FFFFFF;
    border-radius: 100px;

`
const StoryPromptContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    position: relative;

    height: calc(100% - 62px);
    width: 100%;

`

const TitleH1 = styled.div`

    color: white;
    font-family: Ermilov;
    font-size: 50px;
    position: relative;



`

const PromptAndCh = styled.div`
display: flex;
flex-direction: row;
gap: 100px;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

`

const TextareaWrapper = styled.div`
    position: relative;
    width: 634px;
    height: 194px;

    font-size: 30px !important;
    
`
const CreateBtn = styled.button`
    width: 264px;
    height: 63px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    font-size: 40px;
    border-radius: 100px;

    &:hover {
        background-color: black;
        color: white;
    }

`
interface StartProps {
    navigate : Function;
}

 
export interface StartState {
    story: string;
    users: string;
}
 
class Start extends React.Component<StartProps, StartState> {

    state = {
        story : '',
        users: ''
    }

    constructor(props: StartProps) {
        super(props)
    }

    handleCreate() {
        // console.log(this.state.story, this.state.users);
        // () => this.props.appChanger(this.state.story, true);
        // window.location.href = 'game';
        this.props.navigate("/game", {state: Object(this.state)});

    }
    render() { 
        return (
            <StartElem>
            <PromptAndCh>
            <StoryPromptBlock>
                <StoryPromptContent>
    
                    <TitleH1>Придумай историю</TitleH1>
    
                    <TextareaWrapper>
                        <PromptTextArea placeholder='Введите историю...' onChange={(e : ChangeEvent<HTMLInputElement>) => {this.setState({story : e.currentTarget.value})}}></PromptTextArea>
                    </TextareaWrapper>
    
                    <TextareaWrapper>
                        <PromptTextArea placeholder='Введите имена участников через пробел' onChange={(e : ChangeEvent<HTMLInputElement>) => {this.setState({users : e.currentTarget.value})}}></PromptTextArea>
                    </TextareaWrapper>
    
                    <CreateBtn onClick={() => this.handleCreate()}> Далее</CreateBtn>
    
                </StoryPromptContent>
            </StoryPromptBlock>
            
        </PromptAndCh>
        </StartElem>

        );
    }
}
 


function StartWrapper() {
    const navigate = useNavigate();
    return(<Start navigate={navigate}></Start>);
}

export default StartWrapper;