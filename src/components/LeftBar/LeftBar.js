import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Sidebar = styled.nav`
  padding: 25px 10px;
  flex: 0.35;
  background-color: #b4b4b446;
`
const SideBarRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover{
      background-color: #bdc3c7;
      border-radius: 5px;
}
`
const NavLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: #474747;
`

function LeftBar() {
    return (
        <Sidebar>
            <SideBarRow>
                <NavLink to='/profile'>Profile</NavLink>
            </SideBarRow>
            <SideBarRow>
                <NavLink to='/timeline'>Timeline</NavLink>
            </SideBarRow>
        </Sidebar>
    )
}

export default LeftBar;
