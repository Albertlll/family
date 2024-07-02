import styled from "styled-components";
import PromptTextarea from "./PromptTextarea";
import httpClient from "../httpClient";

import { BgContext } from "./BgContext";
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

    const [story, setStory] = useState('');
    const [users, setUsers] = useState('');

    const {bgState, setBg} = useContext(BgContext)
    // const {node, setNode} = useContext(NodeContext)



    const handleCreate = () => {
        console.log(users);
        console.log(story);

        localStorage.setItem('players', JSON.stringify(users.split(" ")));
        


        httpClient.post("/api/v1/storys/fake",
        {

            'base_prompt': story

        }).then(function(response) {

            localStorage.setItem("node",  JSON.stringify(response.data.base_node))
            localStorage.setItem("story",  JSON.stringify(response.data.story))
            localStorage.setItem("bg_image", 'data:image/png;base64,' + response.data.base_node.image)
            window.location.href = 'game'

        });

    }


    return (


    
    <PromptAndCh>
        <StoryPromptBlock>
            <StoryPromptContent>

                <TitleH1>Придумай историю</TitleH1>

                <TextareaWrapper>
                    <PromptTextarea placeholder='Введите историю...' onChange={(e) => setStory(e.target.value)}></PromptTextarea>
                </TextareaWrapper>

                <TextareaWrapper>
                    <PromptTextarea placeholder='Введите имена участников через пробел' onChange={(e) => setUsers(e.target.value)}></PromptTextarea>
                </TextareaWrapper>

                <CreateBtn onClick={() => handleCreate()}> Далее</CreateBtn>

            </StoryPromptContent>
        </StoryPromptBlock>
        
    </PromptAndCh>
    );}

export default Prompt;