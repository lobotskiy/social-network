import React from 'react'
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import LeftBar from './components/LeftBar/LeftBar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import RightBar from './components/RightBar/RightBar';



const AppWrapper = styled.div`
  margin: 0 auto;
  background-color: #ecf0f1;
`
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper >
        <Header/>
        <AppBody>
          <LeftBar />
          <MiddleBar />
          <RightBar />
        </AppBody>
      </AppWrapper>
    </BrowserRouter >
  )
}

export default App
