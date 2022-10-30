import React from 'react'
import butterfly from '../../assets/videos/butterfly.mp4';;
import HomeMusic from '../../Components/HomeMusic/HomeMusic';
import './home.scss';
import HomeProof from '../../Components/HomeProof/HomeProof';
import HomeNav from '../../Components/HomeNav/HomeNav';
import mobileBg from '../../assets/img/mobileBg.jpg';

function Home() {
    return (
        <div className='home'>
            <video className='home__video' src={butterfly} autoPlay muted loop/>
            {/* <img src={mobileBg} className='home__video' alt="" /> */}
            <div className="home__body">
                <HomeNav/>
                <footer className='home__footer'>
                    <HomeMusic/>
                    <HomeProof/>
                </footer>
            </div>
        </div>
    )
}

export default Home;
