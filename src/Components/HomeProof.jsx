import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import dragonGold from '../assets/img/dragonGold.jpg';
import styled from 'styled-components';

const StyledHomeProof = styled.div `
width: 43%;
  .home__proof {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 5px 10px;
    border-radius: 5px;
}
.home__proof-left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}
.home__proof-title {
    font-size: .65rem;;
    color: rgba(255,255,255, 0.4);
    text-transform: uppercase;
    letter-spacing: .1em;
    font-family: 'proofFont', sans-serif;
}

.home__proof-subtitle {
    position: relative;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.2);
    background: linear-gradient(to left, orange, red, yellow);
    -webkit-background-clip: text;
    animation: textGradient 10s linear infinite;
    background-size: contain;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-family: 'proofBoldFont', sans-serif;
}

@keyframes textGradient {
    0% {
        background-position: left 0 top 0;
    }
    50% {
        background-position: left 150px top -25px;
    }
    100% {
        background-position: left 300px top 0;
    }
}

.home__proof-view {
    padding: 15px 28px 15px 23px;
    justify-content: start;
    text-align: start;
    align-items: center;
    font-size: 17px;
    background-color: #fff;
    letter-spacing: 1px;
    color: #000;
    vertical-align: middle;
    font-family: 'proofBoldFont', sans-serif;
    font-weight: 700;
    &:hover .home__icon-arrow {
        transform: translateX(7px);
    }
}
.home__icon-arrow {
    margin-left: 5px;
    vertical-align: middle;
    font-size: 17px;
    transition: 0.3s ease-out;
}
.home__proof-img {
    margin-right: 10px;
    width: 3.5rem;
}


@media only screen and (max-width: 1040px) {
    width: 100%;
    .home__proof-title {
        font-size: 9px;
    }
    .home__proof-subtitle {
        font-size: 14px;
    }
    .home__proof-view {
        font-size: 14px;
        padding-left: 12px;
        padding-right: 7px;
    }
}
`

function HomeProof() {
  return (
    <StyledHomeProof>
      <div className="home__proof">
      <div className="home__proof-left">
          <img src={dragonGold} className='home__proof-img' alt="" />
          <div className="home__proof-titles">
              <h5 className="home__proof-title">proof of skate</h5>
              <h3 className="home__proof-subtitle">AUCTION COMPLETE</h3>
          </div>
      </div>
      <button type='button' className='btn home__proof-view'>view <FaArrowRight className='home__icon-arrow'/></button>
    </div>
    </StyledHomeProof>
  )
}

export default HomeProof