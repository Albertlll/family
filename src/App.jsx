import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './components/Game'
import Prompt from './components/Prompt'
import styled from 'styled-components'
import { BgContext } from './components/BgContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bg from './bg/bg.png'

import mask_bg from './bg/bg_mask.png'


const AppElem = styled.div`
  width: 100%;
  height: 100%;
  //background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

`

const BgImage =styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
`

function App() {
  const {bgState, setBg} = useContext(BgContext);
  return (

    // <img src={bg} alt="" />

        <BrowserRouter>
        


        <AppElem>


          <BgImage src={bgState} alt="" />
          <BgImage src={mask_bg} alt="" />


          <Routes>
            <Route path="/" element={<Prompt/>}/>
            <Route path="/game" element={<Game replica={true} type='question'/>}/>
            <Route path="/answer" element={<Game replica={false} type='text'/>}/>
            <Route path="/res_rep_correct" element={<Game replica={true} type='result' correct={true}/>}/>
            <Route path="/res_rep_uncorrect" element={<Game replica={true} type='result' correct={false}/>}/>
            <Route path="/variant" element={<Game replica={false} type='variant'/>}/>
          </Routes>

        </AppElem>

        
        </BrowserRouter>

  )
}

export default App
