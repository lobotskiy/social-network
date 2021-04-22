import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-size: 26px;
padding-top: 100px;
margin: 30px;
color: #3498db;
`

const FormSuccess = () => {
  return (
    <div >
      <Title>We have received your request!</Title>
    </div>
  );
};

export default FormSuccess;