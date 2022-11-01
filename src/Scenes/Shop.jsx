import React from 'react'
import styled from 'styled-components';
import SwiperSlider from '../Components/Swiper';
import shopItemMini from '../assets/img/shopItemMini.png';
import { PATH } from '../constans/routes';
import { useNavigate } from 'react-router-dom';
import About from '../Components/About';

const StyledShop = styled.div `
      color: #000;
      display: block;
      font-family: 'proofFont', sans-serif;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(231,231,233, 1);

    .item {
      background-color: rgba(231,231,233, 1);
      padding: 30px 35px 20px 35px;
      min-height: 100%;
      min-width: 100%;
      margin-top: 50px;
    }
    .acive__page-item {
      font-size: 0.75rem;
      margin-bottom: 20px;
      span:last-child {
        cursor: pointer;
        transition: 0.1s all;
        margin-left: 10px;
        &:hover {
          color: #616161;
        }
      }
    }
    .acive-page {
      text-decoration: underline;
      margin-right: 10px;
      color: #616161;
      cursor: pointer;
    }
    .shop__item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 55px;
      width: 100%;
    }
    .shop__iten-name {
      color: #000;
      font-size: 1.5rem;
      line-height: 2rem;
      font-family: 'proofBoldFont', sans-serif;
    }
    .shop__describe {
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: .75rem;
      color: rgba(0,0,0,0.7);
    }
    .shop__name-and-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35px;
    }
    .shop__item-mini-img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .shop__price-name {
      border-left: 1px solid #bdbdbd;
      padding: 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .shop__item-list {
      margin: 15px 0 30px 0px;
    }
    .shop-item__list-items::before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #000;
      font-weight: bold; 
      display: inline-block;
      margin-right: 10px;
    }
    .shop-item__btn {
      width: 100%;
      cursor: not-allowed;
      color: rgba(82,82,82, 1);
      background-color: rgba(212,212,212,1);
      text-align: center;
      padding: 1rem 2rem;
      border-color: transparent;
      border-radius: 0.375rem;
      letter-spacing: .025em;
      text-transform: uppercase;
      font-size: .75rem;
      line-height: 1rem;
    }
    .about {
      background-color: #fff;
      padding: 40px 55px;
    }
    .about__inf {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      height: 500px;
    }
    .about__from-title {
      letter-spacing: .025em;
      font-size: .7rem;
      line-height: 2.25rem;
      margin-bottom: 5px;
    }
    .about__from-subtitle {
      opacity: .3;
      color: #000;
      line-height: 2.25rem;
      font-size: 1.5rem;
      font-family: 'proofFont', sans-serif;
    }

    .about__imgs {
      margin: 30px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    @media only screen and (max-width: 1040px) {
      .shop__item {
        grid-template-columns: repeat(1, 1fr);
      }
      .about__from {
        display: none;
      }
      .about__inf {
        grid-template-columns: repeat(1, 1fr);
      }
      .ative__page-item {
        font-size: 1.4rem;
      }
      .shop__iten-name {
        font-size: 18px;
      }
      .shop__item-about, .shop-item__list-items {
        font-size: 15px;
      }
      .about__imgs {
        grid-template-columns: repeat(1, 1fr);
      }
    }
`

function Shop() {

  const navigate = useNavigate();

  return (
    <StyledShop>
            <section className='item'>
            <main className="main">
            <p className="acive__page-item"><span className="acive-page" onClick={() => navigate(PATH.homePage)}>Home</span> / <span>Twin Tigers Jacket</span></p>
              <div className='shop__item'>
                <SwiperSlider/>
                <div className="shop__describe">
                  <div className="shop__name-and-price">
                    <h3 className="shop__iten-name">TWIN TIGERS JACKET</h3>
                    <div className="shop__price-name">
                      <img className='shop__item-mini-img' src={shopItemMini} alt="" />
                      <p className='shop__item-price-name'>PRICE: 1 BLUE SIDE TOKEN</p>
                    </div>
                  </div>
                  <p className="shop__item-about">The Azuki Twin Tigers Jacket is the brand's first apparel drop, reflecting the fighting spirit of Azuki. Inspired by 'Sukajan' jackets, an iconic fashion piece combining American & Japanese street culture, the Azuki Twin Tigers Jacket features the following:</p>
                  <ul className="shop__item-list">
                    <li className="shop-item__list-items">Luxurious quilted blue & red silk</li>
                    <li className="shop-item__list-items">Chainstitch and chenille embroidered tiger (blue side)</li>
                    <li className="shop-item__list-items">Minimalistic Azuki logo (red side)</li>
                    <li className="shop-item__list-items">Off-white ribbing and piping (both sides)</li>
                  </ul>
                  <button type='button' className='shop-item__btn'>redemption window closed</button>
                </div>
              </div>
            </main>
            </section>
            <About/>
    </StyledShop>
  )
}

export default Shop