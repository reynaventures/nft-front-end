import React from 'react'
import styled from 'styled-components'
import CardImg8 from '../../assets/img/CardImg8.png'; 

const StyledCard8 = styled.div `
  .card8 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ebe7e0;
        z-index: 98;
        padding: 30px 25px;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        transition: 0.4s all;
    }
    .card8__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .card8__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .card8__item + .card8__item {
        margin-top: 10px;
    }
    .card8__img {
        max-width: 60%;
        align-self: center;
    }

`


function Card8({ setHandleCardId }) {
  return (
    <StyledCard8>
        <div className="card8">
            <div className="card8__content">
            <h3 className='card8__title'>Who is Reyna Ventures?</h3>
                <p>Reyna Ventures is our parent company focused on creating a suite of web2 and web3 projects rooted in the impact sector. We believe people can be catalysts of positive change, they just need the right tools — so we decided to build them. Eitny is the first project to be launched.</p>
            </div>
            <img className='card8__img' src={CardImg8} alt="" />
            <span className="card8__cross" onClick={() => setHandleCardId(false)}>╳</span>
        </div>
    </StyledCard8>
  )
}

export default Card8;