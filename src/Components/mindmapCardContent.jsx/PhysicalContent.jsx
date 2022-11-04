import React from 'react'
import styled from 'styled-components'
import mindmapCard4 from '../../assets/img/Card4.png';

const StyledPhysicalContent = styled.div `
    .physical {
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
    .physical__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002e;
        }
    }
    .physical__item-title {
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
    .physical__list {
        margin-top: 20px;
    }
    .physical__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .physical__item + .physical__item {
        margin-top: 10px;
    }
    .physical__img {
        max-width: 70%;
        align-self: center;
    }
    .physical__content {
        p {
            margin-bottom: 25px;
        }
    }
`

function PhysicalContent({ setHandleCardId }) {
  return (
    <StyledPhysicalContent>
        <div className="physical">
            <div className="physical__content">
                <h2 className="physical__title">What purpose projects are we supporting? <span> //</span></h2>
                <p>We are committed to our community, the longevity of web 3 and IRL initiatives. The world is intersectional, and so are we. We will be initially focusing 20% of our minting proceeds to support Reyna Ventures Projects in the following themes:
‍</p>
                <p>Mental wellness - Providing access, resources and support to licensed therapy, tools and counseling services.
Sustainability - Offsetting the carbon used to mint initial collection, and supporting projects that advance sustainability in web3 and in the physical world.
Inclusivity and equitable wealth creation - Art, creators, projects, investments that are led by underrepresented and undercapitalized minorities.</p>
                <p>This is only the beginning… more purpose projects will be added with the help and direction of our community.</p>
            </div>
            <img className='physical__img' src={mindmapCard4} alt="" />
            <span className="physical__cross" onClick={() => setHandleCardId(false)}>╳</span>
        </div>
    </StyledPhysicalContent>
  )
}

export default PhysicalContent