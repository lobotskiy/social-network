
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
  display: flex;
  background-color: #dbdbdb;
`
const CloseBtn = styled.span`
  position: absolute;
  top: 8px;
  right: 15px;
  font-size: 1.5rem;
  z-index: 1;
  color: #474747;
  cursor: pointer;
`


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <StyledContainer >
        <CloseBtn >×</CloseBtn>
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