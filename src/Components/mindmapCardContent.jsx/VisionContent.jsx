import React from 'react'
import styled from 'styled-components'
import mindmapCard1 from '../../assets/img/mindmapCard1.png';

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
                    <h2 className="vision__title">VISION & VALUE  <span> //</span></h2>
                    <p className="vision__text">We are the skaters of the internet. We’re skating between the blurred lines of the physical and digital worlds as they are beginning to blend. We are a community of individuals who aren’t afraid to push the boundaries, challenge the status quo, and communicate boldly. We’re making an impact on web3 culture. Our vision is to create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                    <p>Values:</p>
                    <ul className='vision__list'>
                        <li className="vision__item">
                            <span className='vision__item-title'>Community first:</span>
                            <p className="vision__item-text">Everything starts and ends with the community. The moment we prioritize something other than the community will be the beginning of the end. We won't let that happen, because we'll always have community as the #1 value of Azuki.</p>
                        </li>
                        <li className="vision__item">
                            <span className='vision__item-title'>Dope sh*t only:</span>
                            <p className="vision__item-text">Azuki is creative, brave, relentless. It's easy to follow trends and improve incrementally. It's harder to be original and do dope sh*t. We pave our own path.</p>
                        </li>
                        <li className="vision__item">
                            <span className='vision__item-title'>Trust the process:</span>
                            <p className="vision__item-text">Good things take time. Decentralized movements can't turn corners as quickly as centralized movements, and that's both a blessing and a curse. Decentralized doesn't mean there can't be leaders. The core team will provide guard rails and resources for all beans to grow together, but it won't happen overnight. !ttp</p>
                        </li>
                    </ul>
                </div>
                <img className='vision__img' src={mindmapCard1} alt="" />
                <span className="vision__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledVisionContent>
    )
}

export default VisionContent