import React from 'react'
import styled from 'styled-components';
import OtherPageNav from '../Components/OtherPageNav';

const StyledHome = styled.div `
    background-color: rgba(231,231,233, 1);
`

function Shop() {
  return (
    <StyledHome>
        <div className="body">
            <OtherPageNav/>
        </div>
    </StyledHome>
  )
}

export default Shop