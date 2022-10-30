import React from 'react'
import styled from 'styled-components';

const StyledBurgerMenu = styled.div `
    .burger {
    display: none;
    position: relative;
    cursor: pointer;
    width: 25px;
    height: 25px;
    color: #fff;
    &:hover {
        .burger__line, .burger__line::before, .burger__line::after {
            background-color: rgba(243, 237, 243, 0.5);
        }
    }
  }
  
  .burger__line {
    position: absolute;
    top: 25%;
    left: 0;
    width: 30px;
    height: 2.5px;
    border-radius: 20px;
    background-color: #ffffff;
    &::before ,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: #ffffff;
      height: 2.5px;
      width: 30px;
      border-radius: 20px;
    }
    &::before {
      top: 10px;
    }
  }


  @media only screen and (max-width: 1040px) {
    .burger {
        display: block;
    }
}
`

function BurgerMenu() {
    return (
        <StyledBurgerMenu>
            <div className="burger">
                <span className="burger__line"></span>
            </div>
        </StyledBurgerMenu>
    )
}

export default BurgerMenu