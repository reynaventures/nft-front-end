import React, { useState } from 'react'
import ShopItem from './ShopItems'
import shopJacket3 from '../assets/img/shopJacket3.jpg'
import shopJacket4 from '../assets/img/shopJacket4.jpg'
import { aboutListItems } from '../constans/shopItems';

function About() {

    const [openCardId, setOpenCardId] = useState(0);

  return (
    <section className='about'>
    <div className="about__inf">
      <div className="about__from">
        <h4 className="about__from-title">FROM TAKEDA'S WORKBENCH</h4>
        <h2 className="about__from-subtitle">Designed in Los Angeles by Azuki's in-house tailor, Takeda. Tiger embroidery design by Steamboy.</h2>
      </div>
      <ul className='about__get'>
        {aboutListItems.map(item => {
          return (
            <ShopItem
              key={item.id} 
              itemId={item.id} 
              itemTitle={item.title} 
              itemHiddenText={item.hiddenText} 
              openCardId={openCardId}
              setOpenCardId={setOpenCardId}
            />
          )}
        )}
      </ul>
    </div>
    <div className="about__imgs">
      <img src={shopJacket3} alt="" className="about__img" />
      <img src={shopJacket4} alt="" className="about__img" />
    </div>
  </section>
  )
}

export default About