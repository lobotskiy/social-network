import React from 'react'
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';


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
      <AppWrapper>
        <AppBody>
          <Login />
        </AppBody>
      </AppWrapper>
    </BrowserRouter >
  )
}

export default App
