import React from 'react'
import styled from 'styled-components'
import CardImg7 from '../../assets/img/CardImg7.png'; 

const StyledCard7 = styled.div `
    .card7 {
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
    .card7__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .card7__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .card7__img {
        max-width: 60%;
        align-self: center;
    }
    .card7__text {
        margin-bottom: 35px;
    }
    .card7__btn {
        display: block;
        background-color: #000;
        color: #fff;
        padding: 20px 25px;
        margin-top: 15px;
    }
`

function Card7({ setHandleCardId }) {
    return (
        <StyledCard7>
            <div className="card7">
                <div className="card7__content">
                    <h2 className="card7__title">How do I stay updated and safe?<span> //</span></h2>
                    <p className="card7__text">Follow the official Eitny twitter account or discord. All announcements will be made there. Be careful of copycats, scammers and always check you are on the official twitter or website.</p>
                </div>
                <img className='card7__img' src={CardImg7} alt="" />
                <span className="card7__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledCard7>
    )
}

export default Card7;