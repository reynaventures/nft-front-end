import React from 'react'
import styled from 'styled-components'
import mindmapCard7 from '../../assets/img/Card7.png';

const StyledConnectContent = styled.div `
        .seedling {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #c03540;
        z-index: 98;
        padding: 30px 25px;
        color: #fff;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        transition: 0.4s all;
    }
    .seedling__title {
        color: #fff;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
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
    .seedling__img {
        max-width: 60%;
        align-self: center;
    }
    .seedling__text {
        margin-bottom: 35px;
    }
    .seedling__btn {
        display: block;
        background-color: #000;
        color: #fff;
        padding: 20px 25px;
        margin-top: 15px;
    }
`

function ConnentContent({ setHandleCardId }) {
    return (
        <StyledConnectContent>
            <div className="seedling">
                <div className="seedling__content">
                    <h2 className="seedling__title">How do I stay updated and safe?<span> //</span></h2>
                    <p className="seedling__text">Follow the official Eitny twitter account or discord. All announcements will be made there. Be careful of copycats, scammers and always check you are on the official twitter or website.</p>
                </div>
                <img className='seedling__img' src={mindmapCard7} alt="" />
                <span className="seedling__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledConnectContent>
    )
}

export default ConnentContent