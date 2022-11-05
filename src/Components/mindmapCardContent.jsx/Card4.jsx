import React from 'react'
import styled from 'styled-components'
import CardImg4 from '../../assets/img/CardImg4.png'; 

const StyledCard4 = styled.div `
    .card4 {
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
    .card4__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002e;
        }
    }
    .card4__item-title {
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
    .card4__list {
        margin-top: 20px;
    }
    .card4__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .card4__item + .card4__item {
        margin-top: 10px;
    }
    .card4__img {
        max-width: 70%;
        align-self: center;
    }
    .card4__content {
        p {
            margin-bottom: 25px;
        }
    }
`

function Card4({ setHandleCardId }) {
  return (
    <StyledCard4>
        <div className="card4">
            <div className="card4__content">
                <h2 className="card4__title">What purpose projects are we supporting? <span> //</span></h2>
                <p>We are committed to our community, the longevity of web 3 and IRL initiatives. The world is intersectional, and so are we. We will be initially focusing 20% of our minting proceeds to support Reyna Ventures Projects in the following themes:
‍</p>
                <p>Mental wellness - Providing access, resources and support to licensed therapy, tools and counseling services.
Sustainability - Offsetting the carbon used to mint initial collection, and supporting projects that advance sustainability in web3 and in the card4 world.
Inclusivity and equitable wealth creation - Art, creators, projects, investments that are led by underrepresented and undercapitalized minorities.</p>
                <p>This is only the beginning… more purpose projects will be added with the help and direction of our community.</p>
            </div>
            <img className='card4__img' src={CardImg4} alt="" />
            <span className="card4__cross" onClick={() => setHandleCardId(false)}>╳</span>
        </div>
    </StyledCard4>
  )
}

export default Card4;