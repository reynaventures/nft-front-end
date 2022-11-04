import React from 'react'
import HomeProof from '../Components/HomeProof';
import styled from 'styled-components';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';
import img6 from '../assets/img/img6.png';
import img7 from '../assets/img/img7.png';
import img8 from '../assets/img/img8.png';
import img9 from '../assets/img/img9.png';
import img10 from '../assets/img/img10.png';
import img11 from '../assets/img/img11.png';
import img12 from '../assets/img/img12.png';
import img13 from '../assets/img/img13.png';
import img14 from '../assets/img/img14.png';
import img15 from '../assets/img/img15.png';
import img16 from '../assets/img/img16.png';
import img17 from '../assets/img/img17.png';
import img18 from '../assets/img/img18.png';
import img19 from '../assets/img/img19.png';
import img20 from '../assets/img/img20.png';
import img21 from '../assets/img/img21.png';
import img22 from '../assets/img/img1.png';
import img23 from '../assets/img/img2.png';
import img24 from '../assets/img/img3.png';
import img25 from '../assets/img/img4.png';
import img26 from '../assets/img/img5.png';
import img27 from '../assets/img/img6.png';
import img28 from '../assets/img/img7.png';
import img29 from '../assets/img/img8.png';
import img30 from '../assets/img/img9.png';
import img31 from '../assets/img/img10.png';
import img32 from '../assets/img/img11.png';
import img33 from '../assets/img/img12.png';
import img34 from '../assets/img/img13.png';
import img35 from '../assets/img/img14.png';
import img36 from '../assets/img/img15.png';
import img37 from '../assets/img/img16.png';
import img38 from '../assets/img/img17.png';
import img39 from '../assets/img/img18.png';
import img40 from '../assets/img/img19.png';
import img41 from '../assets/img/img20.png';
import img42 from '../assets/img/img21.png';
import img43 from '../assets/img/img1.png';
import img44 from '../assets/img/img2.png';
import img45 from '../assets/img/img3.png';
import img46 from '../assets/img/img4.png';
import img47 from '../assets/img/img5.png';
import img48 from '../assets/img/img6.png';
import img49 from '../assets/img/img7.png';
import img50 from '../assets/img/img8.png';
import img51 from '../assets/img/img9.png';
import img52 from '../assets/img/img10.png';
import img53 from '../assets/img/img11.png';
import img54 from '../assets/img/img12.png';
import img55 from '../assets/img/img13.png';
import img56 from '../assets/img/img14.png';
import img57 from '../assets/img/img15.png';
import img58 from '../assets/img/img16.png';
import img59 from '../assets/img/img17.png';
import img60 from '../assets/img/img18.png';
import img61 from '../assets/img/img19.png';
import img62 from '../assets/img/img20.png';
import img63 from '../assets/img/img21.png';
import img64 from '../assets/img/img64.png';
import img65 from '../assets/img/img65.png';

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
                <div className="body">
                <div className="home__animation">
                    <ul className="home__animation-row first-row">
                        <li className="home__animation-item">
                            <img src={img1} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img2} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img3} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img4} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img5} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img6} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img7} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img8} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img9} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={img10} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img11} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img12} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img13} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                    </ul>
                    <ul className="home__animation-row second-row">
                        <li className="home__animation-item">
                            <img src={img14} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img15} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img16} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img17} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img18} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img19} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img20} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img21} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img22} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={img23} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img24} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img25} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img26} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                    </ul>
                    <ul className="home__animation-row third-row">
                        <li className="home__animation-item">
                            <img src={img27} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img28} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img29} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img30} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img31} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img32} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img33} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img34} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img35} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={img36} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img37} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img38} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img39} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                    </ul>
                    <ul className="home__animation-row four-row">
                        <li className="home__animation-item">
                            <img src={img40} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img41} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img42} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img43} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img44} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img45} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img46} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img47} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img48} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={img49} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img50} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img51} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img52} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                    </ul>
                    <ul className="home__animation-row fifth-row">
                        <li className="home__animation-item">
                            <img src={img53} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img54} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img55} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img56} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img57} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img58} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img59} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img60} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img61} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>                        
                        <li className="home__animation-item">
                            <img src={img62} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img63} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img64} alt="" />
                            <h3 className='home__item-name'>Name</h3>
                        </li>
                        <li className="home__animation-item">
                            <img src={img65} alt="" />
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
