import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import dragonGold from '../../assets/img/dragonGold.jpg';
import './homeProof.scss';

function HomeProof() {
  return (
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
  )
}

export default HomeProof