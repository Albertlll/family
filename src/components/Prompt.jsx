import styled from "styled-components";
import PromptTextarea from "./PromptTextarea";
import httpClient from "../httpClient";

import { QuestContext } from "./QuestContext";
import { NodeContext } from "./NodeContext";

import { useContext, useState } from "react";

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
function Prompt(props) {


    // const {quest, setQuest} = useContext(QuestContext)
    // const {node, setNode} = useContext(NodeContext)




    const handleCreate = async () => {
        const response = await httpClient.post("/api/v1/storys",
        {

            'base_prompt': story

        });
        props.setBg(response.image);
        
        localStorage.setItem("node",  JSON.stringify(response.node))
        localStorage.setItem("story",  JSON.stringify(response.story))

        window.location.href = 'game'

    }


    const [story, setStory] = useState('');
    const [users, setUsers] = useState('');


    return (


    
    <PromptAndCh>
        <StoryPromptBlock>
            <StoryPromptContent>

                <TitleH1>Придумай историю</TitleH1>

                <TextareaWrapper>
                    <PromptTextarea placeholder='Введите историю...' onChange={(e) => setStory(e.target.value)}></PromptTextarea>
                </TextareaWrapper>

                <TextareaWrapper>
                    <PromptTextarea placeholder='Введите имзатолкаюенна участников через пробел' onChange={(e) => setUsers(e.target.value)}></PromptTextarea>
                </TextareaWrapper>

                <CreateBtn onClick={() => handleCreate()}> Далее</CreateBtn>

            </StoryPromptContent>
        </StoryPromptBlock>
        
    </PromptAndCh>
    );}

export default Prompt;