import React from 'react'
import styled from 'styled-components'
import mindmapCard3 from '../../assets/img/mindmapCard3.png';

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
                    <h2 className="metaverse__title">METAVERSE  <span> //</span></h2>
                    <ul className='metaverse__list'>
                        <li className="metaverse__item">
                            <h5 className='metaverse__item-title'>Where is the metaverse today and where is it going?:</h5>
                            <p className="metaverse__item-text">The metaverse today is where we currently spend most of our time: Discord + Twitter. How do we amplify this experience for Azuki members? How do we distribute the brand to places that have the most attention today? More importantly, where will the metaverse be one year+ from now?</p>
                        </li>
                        <li className="metaverse__item">
                            <h5 className='metaverse__item-title'>Gallery <span>COMPLETE</span></h5>
                            <p>Sorting, filtering, and simping are all supported.</p>
                            <p className="metaverse__item-text">Calling all builders, artists, and creatives. The Garden is full of talented human beans that want to use their skills and passion for Azuki to create additive things for the metaverse. Azuki will empower and provide grants to excellent members with great ideas through a grants program. We are working through the legal framework and application process.</p>
                        </li>
                        <li className="metaverse__item">
                            <h5 className='metaverse__item-title'>Bobu Fractionalization <span>IN PROGRESS</span></h5>
                            <p className="metaverse__item-text">Azuki #40 (Bobu) will be fractionalized using fractional.art into ERC-1155 tokens. These tokens will be used for governance over Bobu. Full details here: www.azuki.com/bobu-101</p>
                        </li>
                        <li className="metaverse__item">
                            <h5 className='metaverse__item-title'>GAME<span>EXPLORING</span></h5>
                            <p className="metaverse__item-text">Many will try to create one, but few teams have the experience and background to build a genuinely great game with mass market appeal and scalability. Though the core team has the experience, it's a huge endeavor nonetheless. If we do it, we'll do it right.</p>
                        </li>
                    </ul>
                </div>
                <img className='metaverse__img' src={mindmapCard3} alt="" />
                <span className="metaverse__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledMetaverseContent>
    )
}

export default MetaverseContent