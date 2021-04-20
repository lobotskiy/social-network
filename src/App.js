import React from 'react'
import styled from 'styled-components';
import Button from './components/Button';
import Login from './components/Login';
import Flex from './components/Flex';

const Title = styled.h1`
color: #3498db;
`

function App() {
  return (
    <>
      <Flex justify='center'>
        <Title>Hello!</Title>
      </Flex>
      <Login />
    </>
  )
}

export default App
