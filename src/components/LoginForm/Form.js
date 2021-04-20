
import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import styled from 'styled-components';


const StyledContainer = styled.div`
margin: 100px auto;
width: 400px;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
border-radius: 2px;
position: relative;
height: 500px ;
display: grid;
background-color:#dbdbdb;
`


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <StyledContainer >
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </StyledContainer>
    </>
  );
};

export default Form;