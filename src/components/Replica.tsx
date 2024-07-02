import React from "react";

import styled from "styled-components";
import { httpClient } from "../httpClient";
import Loader from "../assets/Loader/Loader";

const ReplicaElem = styled.div`
    width: 100%;
    position: relative;
    top:  calc(100% - 404px);
    font-family: Ermilov;


`
const HeaderWrapper = styled.div` 
    color: white;
    border-top-right-radius: 50px;
    width: 635px;
    height: 92px;
    background: rgba(0, 0, 0, 0.7);
    position: relative;
    font-size: 37px;
`

const MainTextWrapper = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 312px;
    top: calc(100% - 635px);
    position: relative;
`

const MainText = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    width: calc(100% - 200px);
    font-size: 25px;
    top: 17px;
    left: 121px;
    position: absolute;`


const HeaderTextH2 = styled.h2`
    font-size: 37px;
    left: 121px;
    top: 17px;
    position: absolute;
`





interface ReplicaProps {
    nextGameState: Function;
    characterName: string;
    mainText?: string;
    reactionFalse?: string;
    reactionTrue?: string;
    storyId? : number;
    nodeId? : number;
    answer? : string;
}

interface ReplicaState {
    mainText? : string;
    dataGet : boolean;
}

 
class Replica extends React.Component<ReplicaProps, ReplicaState> {
    state = { reaction : '', mainText : '', dataGet : false };

    constructor(props: ReplicaProps) {
        super(props);
        this.state.mainText = props.mainText;

    }


    componentDidMount() {
        console.log(this.props.mainText )
        if (!this.props.mainText)
        {
        console.log(this.props);

        httpClient.post("/api/v1/nodes/get-reaction/",
            {
                'answer': this.props.answer,
                'story_id': this.props.storyId,
                'id' : this.props.nodeId
    
            }).then((response) => {
                this.setState({mainText : response.data.reaction ? this.props.reactionTrue : this.props.reactionFalse});
                this.setState({dataGet : true});

            })
        }
        else {
            this.setState({dataGet : true});
        }
    }
    handleClick(){
        this.props.nextGameState()
    }
    render() { 
        return (
        this.state.dataGet ?
        <ReplicaElem onClick={() => this.handleClick()}>
            <HeaderWrapper> <HeaderTextH2>{this.props.characterName}</HeaderTextH2> </HeaderWrapper>
            <MainTextWrapper> <MainText>{this.state.mainText}</MainText></MainTextWrapper>
            
        </ReplicaElem>
        : <Loader/>
        );
    }
}
 
export default Replica;