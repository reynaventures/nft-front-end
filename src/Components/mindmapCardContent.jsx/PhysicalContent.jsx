import React from 'react'
import styled from 'styled-components'
import mindmapCard4 from '../../assets/img/mindmapCard4.png';

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
`

function PhysicalContent({ setHandleCardId }) {
  return (
    <StyledPhysicalContent>
        <div className="physical">
            <div className="physical__content">
                <h2 className="physical__title">PHYSICAL WORLD <span> //</span></h2>
                <ul className='physical__list'>
                    <li className="physical__item">
                        <h5 className='physical__item-title'>Streetwear <span>COMPLETE</span></h5>
                        <p className="physical__item-text">Members of The Garden can expect exclusive drops in perpetuity. First drop coming very soon.</p>
                    </li>
                    <li className="physical__item">
                        <h5 className='physical__item-title'>Collectibles <span>IN PROGRESS</span></h5>
                        <p className="physical__item-text">Design phase has commenced...</p>
                    </li>
                    <li className="physical__item">
                        <h5 className='physical__item-title'>Expanding Core Team<span>IN PROGRESS</span></h5>
                        <p className="physical__item-text">We just brought on steamboy, Daph, Demna, and njoo as full-time members. Our careers page will be live soon with additional open roles.</p>
                    </li>
                </ul>
            </div>
            <img className='physical__img' src={mindmapCard4} alt="" />
            <span className="physical__cross" onClick={() => setHandleCardId(false)}>╳</span>
        </div>
    </StyledPhysicalContent>
  )
}

export default PhysicalContent