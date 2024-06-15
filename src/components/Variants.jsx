import styled from "styled-components"
import { useState } from "react"
import httpClient from "../httpClient"



const VariantsContainer = styled.div`
    display: grid;
    // width: 100%;
    row-gap: 56px;
    column-gap: 138px;
    grid-template-columns: repeat(2, 1fr);
`

const VariantWrapper = styled.div`
    position: relative;
    display:flex;
    cursor: pointer;
    height: 92px;
    width: 685px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);

    &:hover {
        background-color: black;
        box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.8);
        transform: scale(1.05);

    }
`

const VariantBtn = styled.div`
    color: white;
    font-family: Ermilov;
    font-size: 50px;
    position: relative;
`


function Variants(props) {

    const handleSelect = (index) => {

        const story_id = JSON.parse(localStorage.getItem('story')).id;
        const parent_id = JSON.parse(localStorage.getItem('node')).node_id;


        httpClient.post("/api/v1/get-node/", 
        {
            'parent_id': parent_id,
            'story_id': story_id,
            'path_id': index,
        })
        .then(function(response) {

            localStorage.setItem("node",  JSON.stringify(response.data.base_node))
            localStorage.setItem("bg_image", 'data:image/png;base64,' + response.data.node.image)
            window.location.href = 'game'

        });
    }
    
    return (

    <VariantsContainer>
        {
        props.variants.map((variant, index) => {
        //             (selected === index ? s.selected : '')}>

        return(
        
        <VariantWrapper key={index} onClick={() => handleSelect(index)}>

                <VariantBtn>
                    {variant}
                </VariantBtn>

        </VariantWrapper>

        
        // <div key={index} onClick={() => handleSelect(index)} className={s.variant_btn + ' ' +
        // (props.statetype.answer == index ? props.specialclass : '')}>
        //     <div className={s.variant_wrapper}>
        //         {variant}
        //     </div>
        // </div>
    
    )})}
    </VariantsContainer>
    );
}

export default Variants;