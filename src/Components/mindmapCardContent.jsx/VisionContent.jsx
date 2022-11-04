import React from 'react'
import styled from 'styled-components'
import Card1 from '../../assets/img/Card1.png';

const StyledVisionContent = styled.div `
    .vision {
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
    .vision__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .vision__item-title {
        background: linear-gradient(to right, yellow, #fff);
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
    }
    .vision__list {
        margin-top: 20px;
    }
    .vision__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .vision__item + .vision__item {
        margin-top: 10px;
    }
    .vision__img {
        max-width: 60%;
        align-self: center;
    }
    @media only screen and (max-width: 1050px) {
        .vision__item-text {
            display: none;
        }
    }
`

function VisionContent({ setHandleCardId }) {
    return (
        <StyledVisionContent>
            <div className="vision">
                <div className="vision__content">
                    <h2 className="vision__title">What is Eitny's mission?  <span> //</span></h2>
                    <p className="vision__text">We are building a paradigm-shifting product, community and platform where actions in web3 create purposeful environmental and social progress in the physical world. NFTs and Blockchain tech have started a digital revolution, but we believe tokens can be used for more. Our token will connect utility and financial opportunity with purpose, goals and physical world impact - right from the start.</p>
                </div>
                <img className='vision__img' src={Card1} alt="" />
                <span className="vision__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledVisionContent>
    )
}

export default VisionContent