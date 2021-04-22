import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import styled from 'styled-components';


const FormContainer = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 20px;
  color: #474747;
`

const FormSection = styled.div`
  margin-bottom: 10px;
  width: 80%;
`
const StyledP = styled.p`
  font-size: 14px;
  margin-top: 2px;
  color: #f00e0e;
`
const FormLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  margin-bottom: 6px;
  color: #474747;
`
const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`
const FormBtn = styled.button`
  width: 288px;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: #3498db;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  &:hover{
    cursor: pointer;
    background: #4ea4de;
}
`
const InputLogin = styled.span`
  font-size: 14px;
  margin-top: 10px;
  color: #474747;
  width: 80%;
  text-align: center;
`
const Link = styled.a`
  text-decoration: none;
  color: #2980b9;
  font-weight: 600;
`


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <Title>Register account</Title>
      <FormSection >
        <FormLabel>Username</FormLabel>
        <FormInput
          type='text'
          name='username'
          placeholder='Enter your username'
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <StyledP>{errors.username}</StyledP>}
      </FormSection>

      <FormSection>
        <FormLabel>Email</FormLabel>
        <FormInput
          type='email'
          name='email'
          placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <StyledP>{errors.email}</StyledP>}
      </FormSection>

      <FormSection >
        <FormLabel >Password</FormLabel>
        <FormInput
          type='password'
          name='password'
          placeholder='Enter your password'
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <StyledP>{errors.password}</StyledP>}
      </FormSection>

      <FormBtn type='submit'> Sign up </FormBtn>
      <InputLogin>
        Already have an account? <Link href='#'>Sing in</Link>
      </InputLogin>
    </FormContainer>
  );
};

export default FormSignup;