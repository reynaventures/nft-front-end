import React, { useState } from 'react'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import homeMen from '../assets/img/homeMan.png';
import styled from 'styled-components';
import { AiOutlinePause } from 'react-icons/ai';

const StyledHomeMusic = styled.div `
    .home__music {
    border-width: 0.75px;
    border-radius: 7px;
    height: 3.5rem;
    padding: 5px 23px 0px 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.3s all;
    box-shadow: 0 0 30px #00000026;
    position: fixed;
    bottom: 40px;
    left: 40px;
    z-index: 99;
}
.home__music-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    transition: 0.3s all;
}
.home__music-plus {
    position: absolute;
    top: -27px;
    right: -35px;
    border-radius: 50%;
    width: 2.5rem;
    background-color: ${(props) => props.theme.backgroundColor};
    border: 2px solid rgba(255,255,255, 0.1);
    font-size: 25px;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in;
    z-index: 2;
    &:hover {
        transform: scale(1.1);
    }
}
.home__music-img, .home__proof-img {
    width: 65px;
    height: 65px;
    object-fit: cover;
    transition: 0.3s all;
}
.home__music-img {
    margin-right: 10px;
    position: relative;
    top: 0px;
    left: 0px;
}
.home__music-hidden-name {
    font-size: 12px;
    font-family: serif;
    margin-bottom: 5px;
}

.home__music--full {
    height: 3.7rem;
    padding: 5px 10px 7px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.home__music--full-hidden-name {
    margin: 0 24px 3px 5px;
}
.home__music--full-song {
    margin-right: 30px;
}
.home__music--full-songer {
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
}
.home__music--full-songname {
    text-transform: uppercase;
    opacity: .4;
    font-size: .7rem;
}
.home__music--full-controls {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.home__music--full-prev, .home__music--full-stop-start, .home__music--full-next {
    margin-right: 15px;
    font-size: 35px;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
}
.home__music--full-img {
    width: 80px;
    height: 80px;
    top: 6px;
}


@media only screen and (max-width: 1040px) {
    .home__music, .home__music--full-img {
        display: none;
    }
}
`

function HomeMusic() {

    const [fullMusicBlock, setFullMusicBlock] = useState(false);
    const [musicPlay, setMusicPlay] = useState(false);

  return (
    <StyledHomeMusic>
        <div className='music'>
            {!fullMusicBlock ?
                    <div className="home__music">
                    <div className="home__music-wrap">
                        <div className="home__music-plus" onClick={() => setFullMusicBlock(true)}>+</div>
                        <img src={homeMen} alt="" className='home__music-img' />
                        <p className="home__music-hidden-name">- - -</p>
                    </div>
                </div>
                :
                <div className="home__music home__music--full">
                <div className="home__music-wrap home__music--full-wrap">
                    <div className="home__music-plus home__music--full-plus" onClick={() => setFullMusicBlock(false)}>-</div>
                    <img src={homeMen} alt="" className='home__music-img home__music--full-img' />
                    <p className="home__music-hidden-name home__music--full-hidden-name">- - -</p>
                    <div className="home__music--full-song">
                        <h4 className='home__music--full-songer'>Songer,Abz</h4>
                        <p className="home__music--full-songname">song name</p>
                    </div>
                    <div className="home__music--full-controls">
                        <div className="home__music--full-prev"><BiSkipPrevious/></div>
                        <div className="home__music--full-stop-start" onClick={() => setMusicPlay(!musicPlay)}>{musicPlay ? <AiOutlinePause/> : <BsFillPlayFill/>}</div>
                        <div className="home__music--full-next"><BiSkipNext/></div>
                    </div>
                </div>
            </div>
            }
        </div>
    </StyledHomeMusic>
    
  )
}

export default HomeMusic