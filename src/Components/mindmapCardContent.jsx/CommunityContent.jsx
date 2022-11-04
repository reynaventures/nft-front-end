import React from 'react'
import styled from 'styled-components'
import mindmapCard2 from '../../assets/img/Card2.png';

const StyledCommunityContent = styled.div `
        .community {
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
    .community__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .community__item-title {
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
        span {
            background-color: #15aa85;
            border-radius: 5px;
            margin-left: 3px;
        }
    }
    .community__list {
        margin-top: 20px;
    }
    .community__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .community__item + .community__item {
        margin-top: 10px;
    }
    .community__img {
        max-width: 70%;
        align-self: center;
    }
    @media only screen and (max-width: 1050px) {
        .community__item-text {
            display: none;
        }
    }
`

function CommunityContent({ setHandleCardId }) {
    return (
        <StyledCommunityContent>
            <div className="community">
                <div className="community__content">
                    <h2 className="community__title">What is the utility of Eitny?  <span> //</span></h2>
                    <p>The team behind Eitny is dedicated to enhancing your experience and creating value for the community. We are combining membership, merchandise & rewards and real world utility. We’ll be leaking our plans for the future in the coming weeks. It's important to us to under-promise and over-deliver. But trust us… This is only the beginning</p>
                </div>
                <img className='community__img' src={mindmapCard2} alt="" />
                <span className="community__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledCommunityContent>
    )
}

export default CommunityContent