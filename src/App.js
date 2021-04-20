import React from 'react'
import styled from 'styled-components';
import Login from './components/Login';

const Title = styled.h1`
color: #3498db;
`

function App() {
  return (
    <>
      <div>
        <Title>Hello!</Title>
      </div>
      <Login />
    </>
  )
}

export default App
