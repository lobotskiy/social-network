
import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-size: 26px;
margin-top: 90px;
color: rgb(43, 43, 43);
`

const FormSuccess = () => {
  return (
    <div >
      <Title>We have received your request!</Title>
    </div>
  );
};

export default FormSuccess;