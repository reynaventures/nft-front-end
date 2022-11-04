import React from 'react'
import styled from 'styled-components'
import mindmapCard1 from '../../assets/img/Card1.png';

const StyledSeedlingContent = styled.div `
    .seedling {
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
    .seedling__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .seedling__item-title {
        background: linear-gradient(to right, yellow, #fff);
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
    }
    .seedling__list {
        margin-top: 20px;
    }
    .seedling__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .seedling__item + .seedling__item {
        margin-top: 10px;
    }
    .seedling__img {
        max-width: 60%;
        align-self: center;
    }
    @media only screen and (max-width: 1050px) {
        .seedling__item-text {
            display: none;
        }
    }

`

function SeedlingContent({ setHandleCardId }) {
    return (
        <StyledSeedlingContent>
            <div className="seedling">
                <div className="seedling__content">
                    <h2 className="seedling__title">When do we learn more about the Eitny art, lore & functions?<span> //</span></h2>
                    <p className="seedling__text">Check out our Wiki page for more team & project details.</p>

                </div>
                <img className='seedling__img' src={mindmapCard1} alt="" />
                <span className="seedling__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledSeedlingContent>
    )
}

export default SeedlingContent