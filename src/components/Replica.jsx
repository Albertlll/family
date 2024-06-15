import styled from "styled-components";

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

function Replica(props) {
    return (
    <ReplicaElem onClick={props.onClick}>
        <HeaderWrapper> <HeaderTextH2>{props.character_name}</HeaderTextH2> </HeaderWrapper>
        <MainTextWrapper> <MainText>{props.main_text}</MainText></MainTextWrapper>
        
    </ReplicaElem>);
}

export default Replica;