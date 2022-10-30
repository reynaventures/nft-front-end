import React from 'react'
import butterfly from '../../assets/videos/butterfly.mp4';;
import HomeMusic from '../../Components/HomeMusic';
import HomeProof from '../../Components/HomeProof';
import HomeNav from '../../Components/HomeNav';
import styled from 'styled-components';
import mobileBg from '../../assets/img/mobileBg.jpg';

const StyledHome = styled.div `
width: 100%;
    .home__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .home__video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

function Home() {
    return (
        <StyledHome>
            <div className='home'>
                <video className='home__video' src={butterfly} autoPlay muted loop/>
                {/* <img src={mobileBg} className='home__video' alt="" /> */}
                <div className="body">
                    <HomeNav/>
                    <footer className='home__footer'>
                        <HomeMusic/>
                        <HomeProof/>
                    </footer>
                </div>
            </div>
        </StyledHome>
        
    )
}

export default Home;
