import React from 'react'
import styled from 'styled-components'


const StyledRightBar = styled.div`
padding: 25px 10px;
flex: 0.35;
background-color: #b4b4b446;
`

function RightBar() {
    return (
        <StyledRightBar>
            <h4>RightBar</h4>
        </StyledRightBar>
    )
}

export default RightBar
