import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './components/Start';
import styled from 'styled-components';
import Game from './components/Game';
// import bg from './assets/bg.png';
// import { useLocation } from'react-router-dom';
  // background-image: url(${bg});

const AppElem = styled.div`

  overflow: hidden;
  width: 100%;
  height: 100%;

`

interface AppProps {
  // location: Function;
  
}
 
interface AppState {
  story : string;
  create : boolean;
}
 
class App extends React.Component<AppProps, AppState> {
  state = {
    story : '',
    create : false
  }
  // constructor(props : AppProps) {
  //   super(props)
  //   console.log(props.location());
  // }  



  render() {
    return (
      <>
      <AppElem>
        <Routes>
          <Route path='/game' element={<Game/>}/>
          {/* <Route path='/hub' element={}/> */}
          <Route path='/' element={<Start/>}/>
        </Routes>
      </AppElem>
      </>

    );
  }
}
 
export default App;