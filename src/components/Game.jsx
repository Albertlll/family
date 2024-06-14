import styled from "styled-components"
import Prompt from "./Prompt";
import Replica from "./Replica";
import QuestionsBlock from "./QuestionsBlock";
import { NodeContext } from "./NodeContext";
import { useContext, useState, useEffect} from "react";

const GameDiv = styled.div`
    height: 396px;
    display: flex;
    flex-direction: column;
    margin-top: 500px;
    align-items: center;
    justify-content: space-between;
`



function Game(props) {
    console.log(JSON.stringify(localStorage.getItem("node")))

    const [node, setNode] = useState({"character_name": "csdc", "question": "dscsd"})

    const handleContinue = () => {
        window.location.href = 'answer'
    }
    useEffect(() => {
        (async () => {

            setNode(JSON.parse(localStorage.getItem("node")))

        })();
      }, []);

    return (
        props.replica ?
        <Replica onClick={() => handleContinue()} character_name={node.character_name} main_text={node.question}/>
        :
    <GameDiv>
        <QuestionsBlock type={props.type}></QuestionsBlock>
    </GameDiv>
        );
}

export default Game;