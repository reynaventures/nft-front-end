import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
import AzukiLogoWhite from '../assets/svg/AzukiLogoWhite.svg';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import BurgerMenu from './BurgerMenu';
import menuItem from '../assets/svg/menuItem.svg';
import { RiArrowRightUpLine } from 'react-icons/ri'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constans/routes';

const StyledOtherPageNav = styled.div `
width: 100%;
  .home__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.header__logo {
    width: 75px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-right: 5px;
    background-color: rgb(192,53,64);
    cursor: pointer;
    &:hover {
        background-color: rgb(223, 37, 53);
    }
}
.header__list {
    display: flex;
}
.header__item + .header__item {
    margin-left: 8px;
}
.header__item {
    background-color: #e2e2e4;
    color: #000;
    letter-spacing: .05em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0.125rem 1rem;
    border-radius: 0.25rem;
    height: 1.75rem;
    font-size: .7rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
        background-color: #bebebee5;
    }
}
.header__item--active {
    background-color: #bebebee5;
    color: #000;
    margin: 0 8px;
    text-decoration: underline;

}
.header__item a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
}
.header__item-more, .header__item-buy, .header__item-language {
    position: relative;
}
.header__hidden {
    text-align: start;
    padding: 0.25rem 0.55rem 0.25rem 0.25rem;
    background-color: rgba(255, 255, 255, 0.75);
    position: absolute;
    bottom: -180px;
    left: 62%;
    transform: translateX(-50%);
    border-radius: 0.375rem;
}
.header__hidden-item {
    text-align: start;
    text-transform: uppercase;
    flex-wrap: nowrap;
    font-size: .7rem;
    color: rgba(23,23,23, 1);
    letter-spacing: .05em;
    font-weight: 500;
    padding: 0.275rem 0.5rem;
    transition: 0.2s ease-out;
}
.header__hidden-item p:first-child {
    margin-right: 10px;
}
.header__hidden-buy {
    transition: 0.2s ease-out;
    padding: 0.25rem 0.55rem 0.25rem 0.25rem;
    background-color: rgba(255, 255, 255, 0.75);
    position: absolute;
    bottom: -130px;
    left: 60%;
    transform: translateX(-50%);
    border-radius: 0.375rem;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.header__hidden-language {
    background-color: rgba(255, 255, 255, 0.75);
    position: absolute;
    left: 50%;
    bottom: -98px;
    transform: translateX(-50%);
    border-radius: 0.375rem;
    transition: 0.2s ease-out;
}

.logo-item {
    width: 100%;
    height: 100%;
}
.header__connect-btn {
    background-color: transparent;
    font-size: .7rem;
    color: #000;
}
.header__nav-icon {
	font-size: 17px;
}
.home__arrow-down {
    font-size: 15px;
    margin-left: 3px;
    margin-top: 3px;
}

@media only screen and (max-width: 1040px) {
    .header__list {
        display: none;
    }
}
`

function OtherPageNav() {

    const navigate = useNavigate();
    const [handleMore, setHandleMore] = useState(false);
    const [handleBuy, setHandleBuy] = useState(false);
    const [handleLanguage, setHandleLanguage] = useState(false);
    const location = window.location.pathname;

  return (
    <StyledOtherPageNav>
      <header className='home__header'>
      <div className="header__logo" onClick={() => navigate(PATH.homePage)}>
        <img src={AzukiLogoWhite} alt="" />
      </div>
      <nav className="header__nav">
        <BurgerMenu/>
        <ul className="header__list">
            <li className="header__item">
              <img className='logo-item' src={menuItem} alt="" />
            </li>
            <li className="header__item">Gallery</li>
            <li className="header__item">World</li>
            <li className={location === PATH.shopPage ? "header__item header__item--active" : "header__item"} onClick={() => navigate(PATH.shopPage)}>Shop</li>
            <li className="header__item">MindMap</li>
            <li className="header__item header__item-more" onClick={() => {
                setHandleMore(!handleMore);
                setHandleBuy(false);
                setHandleLanguage(false);
            }}>
                More <span className='home__arrow-down'><RiArrowDownSLine/></span>
                {handleMore &&
                    <ul className="header__hidden">
                        <li className="header__hidden-item">the garden</li>
                        <li className="header__hidden-item">manifesto</li>
                        <li className="header__hidden-item">careers</li>
                        <li className="header__hidden-item">license</li>
                        <li className="header__hidden-item">terms & conditions</li>
                    </ul>
                }
            </li>
            <li className="header__item header__item-buy" onClick={() => {
                setHandleBuy(!handleBuy);
                setHandleMore(false);
                setHandleLanguage(false);
            }}>
                Buy <span className='home__arrow-down'><RiArrowDownSLine/></span>
                {handleBuy &&
                    <ul className="header__hidden-buy">
                        <li className="header__hidden-item"><p>AZUKI</p> <p>(OS)</p> <RiArrowRightUpLine/> </li>
                        <li className="header__hidden-item"><p>AZUKI</p>  <p>(LR)</p> <RiArrowRightUpLine/></li>
                        <li className="header__hidden-item"><p>BEANS</p>  <p>(OS)</p> <RiArrowRightUpLine/></li>
                        <li className="header__hidden-item"><p>BEANS</p>  <p>(LR)</p> <RiArrowRightUpLine/></li>
                    </ul>
                }
            </li>
            <li className="header__item" title='Twitter'><a target='__blank' href="https://twitter.com/?lang=ru"><AiOutlineTwitter className='header__nav-icon'/></a></li>
            <li className="header__item" title='Instagram'><a target='__blank' href="https://www.instagram.com/"><AiFillInstagram className='header__nav-icon'/></a></li>
            <li className="header__item" title='Discord'><a target='__blank' href="https://discord.com/"><FaDiscord className='header__nav-icon'/></a></li>
            <li className="header__item header__item-language" title='Language' onClick={() => {
                setHandleLanguage(!handleLanguage);
                setHandleBuy(false);
                setHandleMore(false);
            }}><IoLanguageOutline className='header__nav-icon'/>
                <span className='home__arrow-down'><RiArrowDownSLine/></span>
                {handleLanguage &&
                    <ul className="header__hidden-language">
                        <li className="header__hidden-item">English</li>
                        <li className="header__hidden-item">简体中文</li>
                        <li className="header__hidden-item">繁體中文</li>
                    </ul>
                }
            </li>
            <li className="header__item">
                <button type='button' className='header__connect-btn btn'>connect</button>
            </li>
        </ul>
      </nav>
    </header>
    </StyledOtherPageNav>
  )
}

export default OtherPageNav