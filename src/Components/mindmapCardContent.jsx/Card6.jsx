import React from 'react'
import styled from 'styled-components'
import CardImg6 from '../../assets/img/CardImg6.png'; 

const StyledCard6 = styled.div `
    .card6 {
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
    .card6__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .card6__item-title {
        background: linear-gradient(to right, yellow, #fff);
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
    }
    .card6__list {
        margin-top: 20px;
    }
    .card6__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .card6__item + .card6__item {
        margin-top: 10px;
    }
    .card6__img {
        max-width: 60%;
        align-self: center;
    }
    @media only screen and (max-width: 1050px) {
        .card6__item-text {
            display: none;
        }
    }

`

function Card6({ setHandleCardId }) {
    return (
        <StyledCard6>
            <div className="card6">
                <div className="card6__content">
                    <h2 className="card6__title">When do we learn more about the Eitny art, lore & functions?<span> //</span></h2>
                    <p className="card6__text">Check out our Wiki page for more team & project details.</p>

                </div>
                <img className='card6__img' src={CardImg6} alt="" />
                <span className="card6__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledCard6>
    )
}

export default Card6;