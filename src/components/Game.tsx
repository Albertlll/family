import React from "react";
import { httpClient } from "../httpClient";
import { useLocation } from "react-router-dom";
import {StartState} from "./Start";
import { Location } from "react-router-dom";
import Replica from "./Replica"
import styled from "styled-components";
import maskBg from "../assets/bg_mask.png"
import QuestionBlock from "./QuestionBlock";
import Loader from "../assets/Loader/Loader";

const BgImage =styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
`


interface GameProps {
    location: Location<StartState>;
}
 
interface GameState {
    isLoader : boolean;
    gameState: number;
    dotsCount: number;
    image : string;
    characterName : string;
    question : string;
    reactionTrue : string;
    reactionFalse : string;
    optionOne : string;
    optionTwo : string;
    optionThree : string;
    optionFour : string;
    reactionType : boolean;

    storyId : number;
    nodeId : number;

    answer : string | number;

    variants : Array<string>;

}


 
class Game extends React.Component<GameProps, GameState> {
    story : string;
    users : Array<string>;


    constructor(props: GameProps){
        
        super(props)
        this.story = this.props.location.state.story;
        this.users = this.props.location.state.users.split(' ');

    }


    state = {
        isLoader : true,
        gameState: 0,
        dotsCount: 1,
        image : '',
        characterName : '',
        question: "",
        reactionTrue: "",
        reactionFalse: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
        reactionType : false,
        nodeId : 0,
        storyId : 0,
        answer : '',
        variants : []
    }







    nextNode(path : number){
        this.setState({isLoader : true})

        httpClient.post("/api/v1/nodes/get-node/", 
            {
                'parent_id': this.state.nodeId,
                'story_id': this.state.storyId,
                'path_id': path,
            })
            .then((response) => {
                this.setState({
                
                    image: 'data:image/png;base64,' + response.data.image,
                    characterName: response.data.character_name,
                    question: response.data.question,
                    reactionTrue: response.data.reaction_true,
                    reactionFalse: response.data.reaction_false,

                    variants : [response.data.option_one, response.data.option_two,
                        response.data.option_three, response.data.option_four],

                    storyId : response.data.story_id,
                    nodeId : response.data.id,
                
                });
                this.setState({isLoader : false})
                this.setState({gameState : 0})

            });

    }

    nextGameState(){

        this.setState( (prevState) => {return { gameState : prevState.gameState + 1}})
        
    }

    setAnswer(answer : number | string) {
        this.setState({ answer : answer })
    }

    componentDidMount(): void {
            httpClient.post("/api/v1/storys/fake",
            {
                'base_prompt': this.props.location.state.story
            }).then((response) => {
                this.setState({
                    image: 'data:image/png;base64,' + response.data.base_node.image,
                    characterName: response.data.base_node.character_name,
                    question: response.data.base_node.question,
                    reactionTrue: response.data.base_node.reaction_true,
                    reactionFalse: response.data.base_node.reaction_false,

                    variants : [response.data.base_node.option_one, response.data.base_node.option_two,
                        response.data.base_node.option_three, response.data.base_node.option_four],


                    // optionOne: response.data.base_node.option_one,
                    // optionTwo: response.data.base_node.option_two,
                    // optionThree: response.data.base_node.option_three,
                    // optionFour: response.data.base_node.option_four,


                    storyId : response.data.story.id,
                    nodeId : response.data.story.base_node_id,
                })
                this.setState({isLoader : false})
            });
    }
    

    getRandomPlayer() : string {
        var randomIndex = Math.floor(Math.random() * this.users.length);
        return this.users[randomIndex]
    }

    render() {
        // console.log(this.state)
        const bindedNextGameState : Function = this.nextGameState.bind(this)
        const bindedSetAnswer : Function = this.setAnswer.bind(this)

        const bindedNextNode : Function = this.nextNode.bind(this)

        return (
            this.state.isLoader ?
                <Loader/>
            :
            <>
            <BgImage src={this.state.image} alt="" />
            <BgImage src={maskBg} alt="" />
                {(() => {
                    switch (this.state.gameState){
                        case 0:
                            // replica
                            return <Replica nextGameState={bindedNextGameState} mainText={this.state.question} characterName={this.state.characterName}></Replica>
                        case 1:
                            // text inp
                            return <QuestionBlock setAnswer={bindedSetAnswer} isTextInput={true} selectedUser={this.getRandomPlayer()} nextGameState={bindedNextGameState} storyId={this.state.storyId} nodeId={this.state.nodeId}></QuestionBlock>
                        case 2:
                            // second replica (good bad)
                            return <Replica answer={this.state.answer} nextGameState={bindedNextGameState} characterName={this.state.characterName} reactionTrue={this.state.reactionTrue} reactionFalse={this.state.reactionFalse} storyId={this.state.storyId} nodeId={this.state.nodeId}></Replica>
                        case 3:
                            // variants choise
                            return <QuestionBlock nextNode={bindedNextNode} variants={this.state.variants} setAnswer={bindedSetAnswer} isTextInput={false} selectedUser={this.getRandomPlayer()} nextGameState={bindedNextGameState} storyId={this.state.storyId} nodeId={this.state.nodeId}></QuestionBlock>
                        // case 4:
                        // default:
                            // loader
                            // return <Loader><img src={waves}></img> История создается </Loader>
                        }
                })()}
            </>
        )

    }
}
function GameWrapper() {
    const location = useLocation();
    return(<Game location={location}></Game>);
}

export default GameWrapper;