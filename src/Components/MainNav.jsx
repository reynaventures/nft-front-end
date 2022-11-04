import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import BurgerMenu from './BurgerMenu';
import { RiArrowRightUpLine } from 'react-icons/ri'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constans/routes';

const StyledMainNav = styled.div `
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
    z-index: 99999;
    cursor: pointer;
    &:hover {
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
    justify-content: start;
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
    bottom: -110px;
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
    text-align: start;
    transition: 0.2s ease-out;
    padding: 0.25rem 0.55rem 0.25rem 0.25rem;
    background-color: rgba(255, 255, 255, 0.75);
    position: absolute;
    bottom: -130px;
    left: 60%;
    transform: translateX(-50%);
    border-radius: 0.375rem;
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
.header__item-wayc {
    fill: ${(props) => props.theme.fontColor};
    width: 25px;
    object-fit: cover;
    height: 20px;
}

@media only screen and (max-width: 1040px) {
    .header__list {
        display: none;
    }
}
`

function MainNav() {

    const navigate = useNavigate();
    const [handleMore, setHandleMore] = useState(false);
    const [handleBuy, setHandleBuy] = useState(false);
    const [handleLanguage, setHandleLanguage] = useState(false);
    const location = window.location.pathname;

  return (
    <StyledMainNav>
      <header className='home__header'>
      <div className="header__logo" onClick={() => navigate(PATH.homePage)}>
        <p>Eitny</p>
      </div>
      <nav className="header__nav">
        <BurgerMenu/>
        <ul className="header__list">
            <li className="header__item">
                <svg className='header__item-wayc' width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M135.395 754.538C157.234 543.767 179.072 332.996 200.911 122.24C230.934 122.24 259.533 122.24 288.641 122.24C311.11 333.461 333.503 544.052 356.106 754.628C356.136 754.913 359.134 754.883 360.573 754.988C373.943 543.872 387.298 333.086 400.653 122C429.912 122 457.311 122 486 122C466.335 374.571 446.729 626.587 427.079 879.068C423.301 879.398 420.469 879.863 417.651 879.863C381.393 879.908 345.119 879.788 308.861 879.998C301.727 880.043 297.709 879.233 296.9 870.291C286.513 756.158 275.406 642.101 265.049 527.968C259.143 462.807 254.302 397.557 248.906 332.336C248.426 326.469 247.407 320.663 246.642 314.812C245.338 314.857 244.034 314.902 242.73 314.947C224.848 502.642 206.967 690.338 188.995 878.933C146.217 878.933 103.933 878.933 59.9106 878.933C39.9754 627.112 20.0102 375.141 0 122.315C29.8279 122.315 58.7864 122.315 88.6593 122.315C90.5179 147.896 92.5115 173.132 94.1453 198.383C100.845 302.404 107.425 406.439 114.036 510.459C119.012 588.688 123.943 666.917 129.054 745.146C129.294 748.717 131.123 752.182 132.217 755.708C133.251 755.303 134.315 754.928 135.395 754.538Z" fill="white"/>
<path d="M726.049 878C720.352 808.857 714.759 740.898 709.107 672.25C668.746 672.25 629.36 672.25 588.834 672.25C583.227 740.509 577.62 808.767 571.923 877.985C542.252 877.985 512.971 877.985 483 877.985C507.993 625.76 532.941 374.12 557.934 122C608.07 122 657.142 122 707.743 122C710.261 147.35 712.9 172.819 715.284 198.304C722.691 277.455 730.022 356.606 737.324 435.756C743.516 502.892 749.588 570.057 755.75 637.192C756.245 642.57 757.144 647.919 757.669 653.298C759.378 671.231 759.348 671.246 777.699 671.246C783.861 671.246 790.038 671.246 797.04 671.246C804.072 740.614 810.983 808.782 818 877.985C787.25 878 757.144 878 726.049 878ZM666.063 583.72C655.358 458.649 644.773 335.031 633.978 208.762C629.69 212.238 627.051 213.316 626.931 214.62C615.522 337.444 604.307 460.282 593.017 583.72C617.876 583.72 641.055 583.72 666.063 583.72Z" fill="white"/>
<path d="M934.372 567.131C946.138 567.131 957.934 566.814 969.684 567.192C989.192 567.826 998.674 577.833 998.856 597.411C998.947 607.902 999.158 618.407 998.795 628.883C998.221 645.381 989.586 655.117 973.147 655.555C947.106 656.249 921.019 656.083 894.978 655.389C879.583 654.981 870.796 645.109 870.237 629.23C869.844 618.332 870.025 607.403 870.176 596.505C870.449 578.075 880.354 567.856 899.061 567.192C910.811 566.799 922.592 567.131 934.372 567.131ZM935.038 635.525C937.972 635.525 940.905 635.6 943.839 635.509C985.775 634.362 977.623 643.872 978.743 598.181C978.924 590.588 975.748 587.448 968.535 587.448C945.911 587.448 923.302 587.418 900.679 587.433C893.707 587.433 889.821 590.15 890.259 597.954C890.728 606.286 890.774 614.694 890.244 623.026C889.67 632.083 892.845 636.098 902.373 635.6C913.231 635.057 924.149 635.494 935.038 635.525Z" fill="white"/>
<path d="M956.839 208.276C956.839 202.749 956.839 197.056 956.839 191.228C963.8 189.793 975.743 189.476 976.272 186.848C978.703 174.738 981.088 161.042 977.646 149.687C972.331 132.156 956.25 146.199 944.458 140.582C944.458 153.628 944.458 164.38 944.458 175.992C937.784 175.992 932.152 175.992 924.542 175.992C924.542 169.68 924.149 163.126 924.632 156.648C925.508 145.021 920.314 140.37 908.99 141.639C906.09 141.971 903.116 141.835 900.187 141.699C893.377 141.382 890.01 144.312 890.282 151.348C890.478 156.799 890.312 162.266 890.312 167.717C890.312 188.63 890.312 188.63 911.511 190.352C911.511 196.226 911.511 202.22 911.511 208.215C883.004 214.331 870.139 204.093 870.124 175.282C870.124 166.041 869.762 156.784 870.275 147.573C871.166 131.582 880.92 122.25 896.789 121.495C925.644 120.106 928.603 120.967 940.834 133.002C951.328 128.879 960.629 122.658 970.323 121.963C988.215 120.665 998.196 131.794 998.619 149.717C998.815 158.113 998.015 166.569 998.77 174.889C1001.17 201.269 984.652 215.086 956.839 208.276Z" fill="white"/>
<path d="M977.959 403.366C977.959 382.44 977.959 364.371 977.959 345.44C984.631 345.44 990.598 345.44 997.285 345.44C997.285 365.622 997.285 385.67 997.285 406.239C992.536 406.596 988.238 406.938 982.978 407.34C988.418 414.856 993.258 421.271 997.736 427.939C998.442 428.981 997.526 431.079 997.36 432.731C985.578 435.872 976.726 433.267 968.34 423.965C951.974 405.777 934.511 388.542 917.018 371.396C913.546 368.003 908.091 365.83 903.192 364.788C893.799 362.794 889.035 366.857 890.072 376.918C890.583 381.83 890.162 386.831 890.162 391.787C890.162 412.341 890.162 412.341 911.277 414.782C911.277 420.512 911.277 426.376 911.277 432.21C883.895 437.896 870.144 427.091 870.069 400.136C870.039 391.876 870.249 383.601 870.024 375.341C869.678 362.838 873.044 352.435 885.473 346.809C897.36 341.421 917.995 344.026 926.576 352.554C941.304 367.184 955.686 382.142 970.249 396.922C971.917 398.603 973.901 399.988 977.959 403.366Z" fill="white"/>
<path d="M911.472 861.039C911.472 866.584 911.472 872.248 911.472 877.897C885.057 885.019 870.203 873.886 870.098 846.976C870.068 838.637 870.307 830.283 870.038 821.944C869.619 808.947 872.539 797.859 885.626 792.044C898.879 786.169 917.926 789.009 927.524 798.745C941.555 812.959 955.287 827.473 969.198 841.837C971.159 843.866 973.346 845.684 977.239 849.26C977.239 828.45 977.239 809.623 977.239 790.226C984.352 790.226 990.027 790.226 996.631 790.226C996.631 810.239 996.631 830.463 996.631 851.739C992.633 852.129 988.32 852.55 982.6 853.121C988.53 861.61 993.905 869.303 1000 878.048C984.591 881.924 975.487 879.054 966.937 869.288C951.064 851.138 933.903 834.099 916.907 816.971C913.643 813.695 908.896 810.976 904.404 810.044C895.09 808.106 888.861 811.231 890.029 822.485C890.448 826.617 890.089 830.824 890.089 835.001C890.119 857.719 890.118 857.719 911.472 861.039Z" fill="white"/>
</svg>

            </li>
            <li className={location === PATH.shopPage ? 
                "header__item header__item--active" : 
                "header__item"} onClick={() => navigate(PATH.shopPage)}>Shop</li>
            <li className={location === PATH.mindMapPage ? 
                "header__item header__item--active" : 
                "header__item"} onClick={() => navigate(PATH.mindMapPage)}>MindMap</li>
            <li className="header__item header__item-more" onClick={() => {
                setHandleMore(!handleMore);
                setHandleBuy(false);
                setHandleLanguage(false);
            }}>
                More <span className='home__arrow-down'><RiArrowDownSLine/></span>
                {handleMore &&
                    <ul className="header__hidden">
                        <li className="header__hidden-item" onClick={() => navigate(PATH.license)}>TERMS & CONDITIONS</li>
                        <li className="header__hidden-item" onClick={() => navigate(PATH.privacyPolicy)}>PRIVACY POLICY</li>
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
                        <li className="header__hidden-item"> <a target='blank' href="https://opensea.io/collection/eitnyworld"><p>ETNY</p> <p>(OS)</p> <RiArrowRightUpLine/> </a> </li>
                        <li className="header__hidden-item"> <a target='blank' href="https://tofunft.com/"><p>ETNY</p>  <p>(TF)</p> <RiArrowRightUpLine/></a> </li>
                        <li className="header__hidden-item"> <a target='blank' href="https://opensea.io/collection/wearyapeyc"><p>WAYC</p>  <p>(OS)</p> <RiArrowRightUpLine/></a> </li>
                        <li className="header__hidden-item"> <a target='blank' href="https://tofunft.com/collection/wearyapeyacht/items"><p>WAYC</p>  <p>(TF)</p> <RiArrowRightUpLine/></a> </li>
                    </ul>
                }
            </li>
            <li className="header__item" title='Twitter'><a className='header-icon' target='__blank' href="https://twitter.com/eitnyworld"><AiOutlineTwitter className='header__nav-icon'/></a></li>
            <li className="header__item" title='Instagram'><a className='header-icon' target='__blank' href="https://www.instagram.com/"><AiFillInstagram className='header__nav-icon'/></a></li>
            <li className="header__item" title='Discord'><a className='header-icon' target='__blank' href="https://discord.gg/RQT3DdMcTD"><FaDiscord className='header__nav-icon'/></a></li>
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
    </StyledMainNav>
    
  )
}

export default MainNav