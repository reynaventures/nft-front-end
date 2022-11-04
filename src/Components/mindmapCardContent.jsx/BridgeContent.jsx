import React from 'react'
import styled from 'styled-components'
import mindmapCard5 from '../../assets/img/Card5.png';

const StyledBridgeContent = styled.div `
    .bridge {
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
    .bridge__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002e;
        }
    }
    .bridge__item-title {
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
    .bridge__list {
        margin-top: 20px;
    }
    .bridge__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .bridge__item + .bridge__item {
        margin-top: 10px;
    }
    .bridge__img {
        max-width: 80%;
        align-self: center;
    }
    .bridge__item-redacted {
        position: relative;
        p {
            filter: blur(1px);
        }
    }
    .bridge__redacted {
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
        .bridge__content p {
            display: none;
        }
    }
`

function BridgeContent({ setHandleCardId }) {
    return (
        <StyledBridgeContent>
            <div className="bridge">
                <div className="bridge__content">
                    <h2 className="bridge__title">Does Eitny work with partners? <span> //</span></h2>
                    <p>If you are interested in partnering with us, reach out at <a href="mailto:hello@reyna.ventures">hello@reyna.ventures</a> </p>
                </div>
                <img className='bridge__img' src={mindmapCard5} alt="" />
                <span className="bridge__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledBridgeContent>
    )
}

export default BridgeContent