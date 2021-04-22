import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  padding: 15px 20px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75)
`

function Header() {
    return (
        <StyledHeader>
            <NavLink to={'/login'}><button >Login</button></NavLink>
        </StyledHeader>
    )
}

export default Header
