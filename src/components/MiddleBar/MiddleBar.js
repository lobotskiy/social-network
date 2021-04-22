import React from 'react'
import styled from 'styled-components';
import Profile from './Profile'
import Timeline from './Timeline'
import Login from '../Login/Login';
import { Route } from 'react-router-dom';

const StyledMiddleBar = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  justify-content: center;
`

function MiddleBar() {
    return (
        <StyledMiddleBar>
            <Route path='/login'
                render={() => <Login />} />
            <Route path='/profile'
                render={() => <Profile />} />
            <Route path='/timeline'
                render={() => <Timeline />} />
        </StyledMiddleBar>
    )
}

export default MiddleBar;
