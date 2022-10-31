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

const StyledHomeNav = styled.div `
width: 100%;
  .home__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 10;
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
    z-index: 99999;
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
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
    letter-spacing: .05em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0.125rem 1rem;
    border-radius: 0.25rem;
    height: 1.75rem;
    font-size: .6rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
        background-color: ${(props) => props.theme.hoverItem};
    }
}
.header__item--active {
    background-color: ${(props) => props.theme.activeBackgroundItem};
    text-decoration: underline;
}
.header__item a {
    display: flex;
    justify-content: center;
    align-items: center;
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
    color: ${(props) => props.theme.fontColor};
}
.header__nav-icon {
	font-size: 17px;
    color: ${(props) => props.theme.fontColor};
}
.home__arrow-down {
    font-size: 15px;
    margin-left: 3px;
    margin-top: 3px;
}
.header__item-beanz {
    fill: ${(props) => props.theme.fontColor};
    width: 36px;
}

@media only screen and (max-width: 1040px) {
    .header__list {
        display: none;
    }
}
`

function HomeNav() {

    const navigate = useNavigate();
    const [handleMore, setHandleMore] = useState(false);
    const [handleBuy, setHandleBuy] = useState(false);
    const [handleLanguage, setHandleLanguage] = useState(false);
    const location = window.location.pathname;

  return (
    <StyledHomeNav>
      <header className='home__header'>
      <div className="header__logo" onClick={() => navigate(PATH.homePage)}>
        <img src={AzukiLogoWhite} alt="" />
      </div>
      <nav className="header__nav">
        <BurgerMenu/>
        <ul className="header__list">
            <li className="header__item">
                <svg className='header__item-beanz' viewBox="0 0 1526 630" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M426.306 169.543c9.754 20.718 11.115 45.202 4.876 67.068-26.541 93.031-165.556 117.279-267.641 131.634-42.968 6.042-53.127-58.38-10.376-65.855 353.603-61.817 200.445-174.304-89.261-150.936-37.927 3.059-59.803-18.393-62.811-47.832-3.384-33.121 22.239-64.204 66.761-57.059 128.472 20.62 313.466 27.43 358.452 122.98"></path><path d="M151.224 499.848c258.517-38.533 325.544-158.468 25.264-138.99-37.822 2.453-45.115-51.864-8.07-59.447 75.204-15.392 205.392-29.175 260.823 36.935 31.279 37.306 30.061 91.834-11.683 132.821-54.977 53.979-175.15 93.55-247.173 119.752-24.317 8.847-52.528-2.637-61.945-26.739-15.546-39.788 10.582-59.532 42.784-64.332"></path><path d="M242.292 242.716c5.041 88.456 27.318 233.019 43.438 351.928 5.12 37.772-48.945 48.637-58.82 11.823-31.537-117.567-57.513-231.991-76.848-352.136-4.874-30.291 11.019-53.91 36.351-58.808 43.656-8.442 54.613 24.989 55.879 47.193M933.837 155.505c14.39-43.867 56.548-50.898 81.624-28.631 27.32 24.259 31.838 93.215 70.224 193.17 16.316 42.486 54.8 113.011 56.33 114.985-8.39-13.928-39.244-17.02-53.428.666-2.062 2.942-1.648 2.43-1.464 2.038 16.83-34.92 34.71-225.307 20.798-378.287-3.21-35.316 17.41-55.587 45.003-58.835 31.584-3.717 64.676 22.344 58.797 56.446-33.129 192.146-19.538 339.081-40.949 404.604-20.355 62.289-76.543 58.722-100.495 21.629-14.157-21.924-28.825-71.705-40.757-104.865-22.976-63.851-56.41-123.195-75.975-188.416 17.787-6.551 59.327-4.327 59.263-4.192-25.243 50.973-31.413 183.553-4.895 264.974 8.015 24.606-2.54 48.195-23.442 56.062-24.995 9.409-54.13-10.583-54.899-39.854-1.252-47.753-20.155-237.048 4.265-311.494M797.56 114.35c10.879 20.167 39.422 26.441 57.003 12.973.136-.106-145.24 207.255-128.525 414 5.413 66.97-92.298 78.812-100.876 11.723-7.563-59.128 95.206-338.417 114.34-382.023 27.69-63.105 47.705-113.966 80.545-121.546 16.963-3.916 35.848 1.012 47.257 14.352 38.816 45.39-6.005 201.614 40.496 376.054 6.723 25.224-5.941 47.53-27.378 53.447-24.688 6.813-51.742-12.348-51.759-41.732-.11-181.73-31.173-337.384-31.103-337.248M660.226 212.43c-35.213.589-121.124-3.81-159.836-7.84-57.284-5.966-49.41-96.553 7.396-86.535 40.376 7.12 105.375 20.777 152.44 27.71 44.747 6.59 40.441 65.99 0 66.666"></path><path d="M849.994 360.96c33.739 3.973 29.77 54.013-3.95 53.186-85.402-2.092-218.558 10.637-309.355 49.092-25.239 10.688-52.042 1.121-61.518-20.893-10.132-23.538 1.442-51.91 32.154-59.636 31.101-7.823 141.229-45.474 342.669-21.75M622.996 256.53c14.796 1.492 30.25 8.71 27.899 32.915-1.444 14.856-13.478 26.126-27.899 27.085-44.101 2.932-65.627 3.95-116.57 14.535-21.702 4.508-42.847-9.454-47.46-31.134-5.103-23.99 13.19-47.462 37.66-48.266 65.897-2.164 111.797 3.394 126.37 4.865M1518.543 122.655c31.082 48.684-51.494 101.795-141.042 172.473-76.594 60.454-148.798 130.558-155.615 139.327 15.33-17.99 3.824-55.755-25.05-62.195 24.983 5.872 160.113 54.63 275.84 80.66 29.647 6.668 47.729 36.824 40.673 62.752-8.822 32.419-51.391 44.19-81.064 28.727-119.434-62.241-205.568-70.71-260.839-84.896-30.053-7.713-38.488-44.373-22.827-70.705 13.836-23.266 60.106-54.706 93.947-80.247 133.787-100.975 197.772-185.157 204.59-185.157 23.56 0 34.557 48.012 23.271 51.845-19.373 6.58-104.022 35.524-207.309 31.848-40.293-1.433-48.997-58.852-3.253-66.587 176.809-29.893 228.898-64.49 258.678-17.845"></path></g></svg>
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
    </StyledHomeNav>
    
  )
}

export default HomeNav