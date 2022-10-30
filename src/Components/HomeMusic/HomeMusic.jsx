import React from 'react'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import homeMen from '../../assets/img/homeMan.png';
import './homeMusic.scss';

function HomeMusic() {
  return (
    <div className='music'>
{/*         <div className="home__music">
            <div className="home__music-wrap">
                <div className="home__music-plus">+</div>
                <img src={homeMen} alt="" className='home__music-img' />
                <p className="home__music-hidden-name">- - -</p>
            </div>
        </div> */}


        <div className="home__music home__music--full">
            <div className="home__music-wrap home__music--full-wrap">
                <div className="home__music-plus home__music--full-plus">-</div>
                <img src={homeMen} alt="" className='home__music-img home__music--full-img' />
                <p className="home__music-hidden-name home__music--full-hidden-name">- - -</p>
                <div className="home__music--full-song">
                    <h4 className='home__music--full-songer'>Songer,Abz</h4>
                    <p className="home__music--full-songname">song name</p>
                </div>
                <div className="home__music--full-controls">
                    <div className="home__music--full-prev"><BiSkipPrevious/></div>
                    <div className="home__music--full-stop-start"><BsFillPlayFill/></div>
                    <div className="home__music--full-next"><BiSkipNext/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeMusic