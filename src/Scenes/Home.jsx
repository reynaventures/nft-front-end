import React from 'react'
import butterfly from '../assets/videos/butterfly.mp4';
import HomeProof from '../Components/HomeProof';
import styled from 'styled-components';
import nft1 from '../assets/img/nft1.png';
import nft2 from '../assets/img/nft2.png';
import nft3 from '../assets/img/nft3.png';
import nft4 from '../assets/img/nft4.png';
import nft5 from '../assets/img/nft5.png';
import nft6 from '../assets/img/nft6.png';
import nft7 from '../assets/img/nft7.png';
import nft8 from '../assets/img/nft8.png';
import nft9 from '../assets/img/nft9.png';
import nft10 from '../assets/img/nft10.png';
import nft11 from '../assets/img/nft11.png';
import nft12 from '../assets/img/nft12.png';
import nft13 from '../assets/img/nft13.png';
import nft14 from '../assets/img/nft14.png';
import nft15 from '../assets/img/nft15.png';
import nft16 from '../assets/img/nft16.png';
import nft17 from '../assets/img/nft17.png';
import nft18 from '../assets/img/nft18.png';
import nft19 from '../assets/img/nft19.png';
import nft20 from '../assets/img/nft20.png';
import nft21 from '../assets/img/nft21.png';
import nft22 from '../assets/img/nft1.png';
import nft23 from '../assets/img/nft2.png';
import nft24 from '../assets/img/nft3.png';
import nft25 from '../assets/img/nft4.png';
import nft26 from '../assets/img/nft5.png';
import nft27 from '../assets/img/nft6.png';
import nft28 from '../assets/img/nft7.png';
import nft29 from '../assets/img/nft8.png';
import nft30 from '../assets/img/nft9.png';
import nft31 from '../assets/img/nft10.png';
import nft32 from '../assets/img/nft11.png';
import nft33 from '../assets/img/nft12.png';
import nft34 from '../assets/img/nft13.png';
import nft35 from '../assets/img/nft14.png';
import nft36 from '../assets/img/nft15.png';
import nft37 from '../assets/img/nft16.png';
import nft38 from '../assets/img/nft17.png';
import nft39 from '../assets/img/nft18.png';
import nft40 from '../assets/img/nft19.png';
import nft41 from '../assets/img/nft20.png';
import nft42 from '../assets/img/nft21.png';
import nft43 from '../assets/img/nft1.png';
import nft44 from '../assets/img/nft2.png';
import nf45 from '../assets/img/nft3.png';
import nft46 from '../assets/img/nft4.png';
import nft47 from '../assets/img/nft5.png';
import nft48 from '../assets/img/nft6.png';
import nft49 from '../assets/img/nft7.png';
import nft50 from '../assets/img/nft8.png';
import nft51 from '../assets/img/nft9.png';
import nft52 from '../assets/img/nft10.png';
import nft53 from '../assets/img/nft11.png';
import nft54 from '../assets/img/nft12.png';
import nft55 from '../assets/img/nft13.png';
import nft56 from '../assets/img/nft14.png';
import nft57 from '../assets/img/nft15.png';
import nft58 from '../assets/img/nft16.png';
import nft59 from '../assets/img/nft17.png';
import nft60 from '../assets/img/nft18.png';
import nft61 from '../assets/img/nft19.png';
import nft62 from '../assets/img/nft20.png';
import nft63 from '../assets/img/nft21.png';
import nft64 from '../assets/img/nft1.png';
import nft65 from '../assets/img/nft2.png';

const StyledHome = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
    .home__video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .body {
        padding: 15px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home__animation {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
        margin: 35px 0;
    }
    .home__animation-row {
        width: 2200px;
        display: flex;
        animation-duration: 65s;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: homepage_animation;
        z-index: 3;
    }
    .first-row, .third-row, .fifth-row {
        animation-direction: normal;
    }
    .second-row, .four-row {
        animation-direction: reverse;
    }
    @keyframes homepage_animation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    .home__animation-item {
        border: 1px solid #fff;
        min-width: 225px;
        width: 225px;
        height: 127px;
        margin: 5px;
        box-shadow: 1px 1px 4px #000;
        transition-timing-function: ease-out;
        transition-duration: .2s;
        background-position: center;
        background-size: 110%;
        background-repeat: no-repeat;
        overflow: hidden;
        position: relative;
        z-index: 5;
        cursor: pointer;
        background-color: #000;
        box-shadow: inset 0px -55px 25px #000;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .home__item-name {
            font-size: 45px;
            opacity: 0;
            transform: translateY(25px);
            text-align: center;
            font-weight: bold;
            position: absolute;
            bottom: 10px;
            left: 10px;
            letter-spacing: 1px;
            text-shadow: 0 0 60px #000;
            transition: 0.3s ease-out;
        }
        &:hover {
            transform: scale(1.3, 1.2);
            z-index: 8;
        }
        &:hover .home__item-name {
                opacity: 1;
                transform:  translateY(-5px);
            }
    }
    @media only screen and (max-width: 1050px) {
        .home__animation-item {
            min-width: 140px;
            width: 170px;
            height: 120px;
        }
    }
`

function Home() {
    return (
        <StyledHome>
            <div className='home'>
{/*             <video className='home__video' src={butterfly} autoPlay muted loop/>
                <img src={mobileBg} className='home__video' alt="" /> */}
                <div className="body">
                <div className="home__animation">
                    <ul className="home__animation-row first-row">
                        <li className="home__animation-item">
                            <img src={nft1} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft2} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft3} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft4} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft5} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft6} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft7} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft8} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft9} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={nft10} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft11} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft12} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft13} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                    </ul>
                    <ul className="home__animation-row second-row">
                    <li className="home__animation-item">
                            <img src={nft1} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft2} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft3} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft4} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft5} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft6} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft7} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft8} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft9} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={nft10} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft11} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft12} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft13} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        
                    </ul>
                    <ul className="home__animation-row third-row">
                    <li className="home__animation-item">
                            <img src={nft1} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft2} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft3} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft4} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft5} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft6} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft7} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft8} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft9} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={nft10} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft11} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft12} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft13} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        
                    </ul>
                    <ul className="home__animation-row four-row">
                    <li className="home__animation-item">
                            <img src={nft1} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft2} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft3} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft4} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft5} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft6} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft7} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft8} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft9} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={nft10} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft11} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft12} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft13} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        
                    </ul>
                    <ul className="home__animation-row fifth-row">
                    <li className="home__animation-item">
                            <img src={nft1} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft2} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft3} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft4} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft5} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft6} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft7} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft8} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft9} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={nft10} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft11} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft12} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={nft13} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        
                    </ul>
                </div>
                    <HomeProof/>
                </div>
            </div>
        </StyledHome>
    )
}

export default Home;
