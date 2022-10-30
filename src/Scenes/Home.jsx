import React from 'react'
import butterfly from '../assets/videos/butterfly.mp4';
import { RiArrowDownSLine } from 'react-icons/ri';
import AzukiLogoWhite from '../assets/svg/AzukiLogoWhite.svg';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import BurgerMenu from '../Components/BurgerMenu/BurgerMenu';
import menuItem from '../assets/svg/menuItem.svg';
import mobileBg from '../assets/img/mobileBg.jpg';
import { RiArrowRightUpLine } from 'react-icons/ri';
import HomeMusic from '../Components/HomeMusic/HomeMusic';
import './home.scss';
import HomeProof from '../Components/HomeProof/HomeProof';

function Home() {
    return (
        <div className='home'>
            <video className='home__video' src={butterfly} autoPlay muted loop/>
            {/* <img src={mobileBg} className='home__video' alt="" /> */}
            <div className="home__body">
                <header className='home__header'>
                    <div className="header__logo">
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
                            <li className="header__item">Shop</li>
                            <li className="header__item">MindMap</li>
                            <li className="header__item header__item-more">
                                More <span className='home__arrow-down'><RiArrowDownSLine/></span>
                                <ul className="header__hidden">
                                    <li className="header__hidden-item">the garden</li>
                                    <li className="header__hidden-item">manifesto</li>
                                    <li className="header__hidden-item">careers</li>
                                    <li className="header__hidden-item">license</li>
                                    <li className="header__hidden-item">terms & conditions</li>
                                </ul>
                            </li>
                            <li className="header__item header__item-buy">
                                Buy <span className='home__arrow-down'><RiArrowDownSLine/></span>
                                <ul className="header__hidden-buy">
                                    <li className="header__hidden-item"><p>AZUKI</p> <p>(OS)</p> <RiArrowRightUpLine/> </li>
                                    <li className="header__hidden-item"><p>AZUKI</p>  <p>(LR)</p> <RiArrowRightUpLine/></li>
                                    <li className="header__hidden-item"><p>BEANS</p>  <p>(OS)</p> <RiArrowRightUpLine/></li>
                                    <li className="header__hidden-item"><p>BEANS</p>  <p>(LR)</p> <RiArrowRightUpLine/></li>
                                </ul>
                            </li>
                            <li className="header__item" title='Twitter'><AiOutlineTwitter className='header__nav-icon'/></li>
                            <li className="header__item" title='Instagram'><AiFillInstagram className='header__nav-icon'/></li>
                            <li className="header__item" title='Discord'><FaDiscord className='header__nav-icon'/></li>
                            <li className="header__item" title='Language'><IoLanguageOutline className='header__nav-icon'/> <span className='home__arrow-down'><RiArrowDownSLine/></span></li>
                            <li className="header__item">
                                <button type='button' className='header__connect-btn btn'>connect</button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <footer className='home__footer'>
                    <HomeMusic/>
                    <HomeProof/>
                </footer>
            </div>
        </div>
    )
}

export default Home;
