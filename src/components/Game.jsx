import styled from "styled-components"
import Prompt from "./Prompt";
import Replica from "./Replica";
import QuestionsBlock from "./QuestionsBlock";
import { NodeContext } from "./NodeContext";
import { useContext, useState, useEffect} from "react";
import { BgContext } from "./BgContext";

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
    const {bgState, setBg} = useContext(BgContext)

    const handleContinue = () => {
        props.type == "result" ?

        window.location.href = 'variant'

        :
        window.location.href = 'answer'
    }
    
    useEffect(() => {
        (async () => {

            setNode(JSON.parse(localStorage.getItem("node")))
            setBg(localStorage.getItem("bg_image"));


        })();
      }, []);

    return (
        props.replica ?
        <Replica onClick={() => handleContinue()} character_name={node.character_name} main_text={
        
            props.type == 'question' ? node.question :
            props.correct ? node.reaction_true : node.reaction_false}/>
        :
    <GameDiv>
        <QuestionsBlock type={props.type}></QuestionsBlock>
    </GameDiv>
        );
}

export default Game;