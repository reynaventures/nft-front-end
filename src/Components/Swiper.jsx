import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import shopJacket1 from '../assets/img/shop1.png';
import shopJacket2 from '../assets/img/shop2.png';
import shopJacket3 from '../assets/img/shop3.png';
import shopJacket4 from '../assets/img/shop4.png';
import shopJacket5 from '../assets/img/shop5.png';
import shopJacket6 from '../assets/img/shop6.png';
import styled from 'styled-components';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

const StyledSwiperSlider = styled.div `
    .swiper {
        width: 46vw;
    }
    .swiper__item {
        width: 100%;
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    .swiper-button-next, .swiper-button-prev {
        color: #000;
        &::before, &::after {
            font-size: 20px;
            font-weight: bold;
        }
    }
    .swiper-horizontal > .swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 50%;
        left: 50%;
        transform: translateX(-50%);
    }
    @media only screen and (max-width: 1040px) {
        .swiper {
            width: 624px;
            margin-bottom: 30px;
    }
    }
`

function SwiperSlider() {
  return (
    <StyledSwiperSlider>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='swiper'
            >
            <SwiperSlide className='swiper__item'>
                <div className="swiper__item-wrap">
                    <img src={shopJacket1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__item-wrap">
                    <img src={shopJacket2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__item-wrap">
                    <img src={shopJacket3} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__item-wrap">
                    <img src={shopJacket4} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__item-wrap">
                    <img src={shopJacket5} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__item-wrap">
                    <img src={shopJacket6} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    </StyledSwiperSlider>
    
  )
}

export default SwiperSlider