import React from 'react'
import styled from 'styled-components'
import CardImg5 from '../../assets/img/CardImg5.png'; 

const StyledCard5 = styled.div `
    .card5 {
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
    .card5__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002e;
        }
    }
    .card5__item-title {
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
        span {
            background-color: #c7ad18c5;
            border-radius: 5px;
            margin-left: 3px;
        }
    }
    .card5__list {
        margin-top: 20px;
    }
    .card5__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .card5__item + .card5__item {
        margin-top: 10px;
    }
    .card5__img {
        max-width: 80%;
        align-self: center;
    }
    .card5__item-redacted {
        position: relative;
        p {
            filter: blur(1px);
        }
    }
    .card5__redacted {
        padding: 15px 25px;
        color: #fff;
        background-color: #000;
        font-size: 25px;
        position: absolute;
        left: 30%;
        top: 30%;
        transform: translate(-50%) rotate(-10deg);
        font-weight: bold;
    }
    @media only screen and (max-width: 1050px) {
        .card5__content p {
            display: none;
        }
    }
`

function Card5({ setHandleCardId }) {
    return (
        <StyledCard5>
            <div className="card5">
                <div className="card5__content">
                    <h2 className="card5__title">Does Eitny work with partners? <span> //</span></h2>
                    <p>If you are interested in partnering with us, reach out at <a href="mailto:hello@reyna.ventures">hello@reyna.ventures</a> </p>
                </div>
                <img className='card5__img' src={CardImg5} alt="" />
                <span className="card5__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledCard5>
    )
}

export default Card5;