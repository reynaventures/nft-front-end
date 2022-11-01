import React from 'react'
import styled from 'styled-components'
import mindmapCard2 from '../../assets/img/mindmapCard2.png';

const StyledCommunityContent = styled.div `
        .community {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ebe7e0;
        z-index: 98;
        padding: 30px 25px;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        transition: 0.4s all;
    }
    .community__title {
        color: #000;
        font-family: 'proofBoldFont', sans-serif;
        margin-bottom: 15px;
        span {
            color: #0000002f;
        }
    }
    .community__item-title {
        border-radius: 10px;
        padding: 3px;
        margin-right: 4px;
        transition: 0.4s all;
        span {
            background-color: #15aa85;
            border-radius: 5px;
            margin-left: 3px;
        }
    }
    .community__list {
        margin-top: 20px;
    }
    .community__cross {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        transition: 0.4s all;
    }
    .community__item + .community__item {
        margin-top: 10px;
    }
    .community__img {
        max-width: 70%;
        align-self: center;
    }
    @media only screen and (max-width: 1050px) {
        .community__item-text {
            display: none;
        }
    }
`

function CommunityContent({ setHandleCardId }) {
    return (
        <StyledCommunityContent>
            <div className="community">
                <div className="community__content">
                    <h2 className="community__title">COMMUNITY  <span> //</span></h2>
                    <ul className='community__list'>
                        <li className="community__item">
                            <h5 className='community__item-title'>Full-time moderation team: <span>COMPLETE</span></h5>
                            <p className="community__item-text">Mods help protect and grow our community, the most valuable part of Azuki. We've recently brought on a group of paid full-time and part-time mods. In an effort to professionalize community management in the NFT space, Azuki mods have daily calls within the Community and Product teams, work set hours, take regular breaks, and spend time off-screen.</p>
                        </li>
                        <li className="community__item">
                            <h5 className='community__item-title'>Azuki Grants <span>IN PROGRESS</span></h5>
                            <p className="community__item-text">Calling all builders, artists, and creatives. The Garden is full of talented human beans that want to use their skills and passion for Azuki to create additive things for the community. Azuki will empower and provide grants to excellent members with great ideas through a grants program. We are working through the legal framework and application process.</p>
                        </li>
                        <li className="community__item">
                            <h5 className='community__item-title'>Community Spaces <span>IN PROGRESS</span></h5>
                            <p className="community__item-text">From casual hangouts to heartfelt stories, we have seen community-run spaces sprout all over Twitter. These forums are important places to grow the connective tissue of our community. See you at the next Red Bean Soup, or any of the other great spaces that are hosted by Azuki holders.</p>
                        </li>
                    </ul>
                </div>
                <img className='community__img' src={mindmapCard2} alt="" />
                <span className="community__cross" onClick={() => setHandleCardId(false)}>╳</span>
            </div>
        </StyledCommunityContent>
    )
}

export default CommunityContent