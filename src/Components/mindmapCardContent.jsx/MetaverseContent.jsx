import React from 'react'
import styled from 'styled-components'
import mindmapCard3 from '../../assets/img/Card3.png';

const StyledMetaverseContent = styled.div `
    .metaverse {
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
    .metaverse__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .metaverse__item-title {
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
        span {
            background-color: #000000;
            border-radius: 5px;
            color: #fff;
            margin-left: 3px;
        }
    }
    .metaverse__list {
        margin-top: 20px;
    }
    .metaverse__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .metaverse__item + .metaverse__item {
        margin-top: 10px;
    }
    .metaverse__img {
        max-width: 70%;
        align-self: center;
    }
    @media only screen and (max-width: 1050px) {
        .metaverse__img {
            display: none;
        }
        .metaverse__item-text {
            display: none;
        }
    }
`

function MetaverseContent({ setHandleCardId }) {
    return (
        <StyledMetaverseContent>
            <div className="metaverse">
                <div className="metaverse__content">
                    <h2 className="metaverse__title">What are the minting proceeds being used for?  <span> //</span></h2>
                    <p>We are deeply focused on investing in our roadmap, community and mission. Of our initial minting proceeds, 20% will go to purpose projects and initiatives. Up to 5% will be donated to philanthropic organizations in partnership with our community. Remaining funding will be used to enhance our community experience, benefits and ultimately creating additional value for our community.</p>
                </div>
                <img className='metaverse__img' src={mindmapCard3} alt="" />
                <span className="metaverse__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledMetaverseContent>
    )
}

export default MetaverseContent