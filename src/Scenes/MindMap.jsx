import React, { useState } from 'react'
import mindMapGirl from '../assets/img/mindMapGirl.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import VisionContent from '../Components/mindmapCardContent.jsx/VisionContent';
import { mindmapCards } from '../constans/mindmapCards';
import CommunityContent from '../Components/mindmapCardContent.jsx/CommunityContent';
import MetaverseContent from '../Components/mindmapCardContent.jsx/MetaverseContent';
import PhysicalContent from '../Components/mindmapCardContent.jsx/PhysicalContent';
import BridgeContent from '../Components/mindmapCardContent.jsx/BridgeContent';
import SeedlingContent from '../Components/mindmapCardContent.jsx/SeedlinghtContent';
import ConnentContent from '../Components/mindmapCardContent.jsx/ConnentContent';
import { StyledMindMap } from './StyledMindmap';

function MindMap() {

    const [handleCardId, setHandleCardId] = useState(null);
    const contentCard = (id) => {
        switch (id) {
            case 0:
                return <VisionContent setHandleCardId={setHandleCardId}/>
            case 1:
                return <CommunityContent setHandleCardId={setHandleCardId}/>
            case 2:
                return <MetaverseContent setHandleCardId={setHandleCardId}/>
            case 3:
                return <PhysicalContent setHandleCardId={setHandleCardId}/>
            case 4:
                return <BridgeContent setHandleCardId={setHandleCardId}/>
            case 5:
                return <SeedlingContent setHandleCardId={setHandleCardId}/>
            case 6:
                return <ConnentContent setHandleCardId={setHandleCardId}/>
            default:
                console.log('nothing');
        }
    }

    return (
        <StyledMindMap>
            <div className="mindmap">
                <div className="mindmap__info">
                    <h1 className="mindmap__title">mindmap <span> //</span></h1>
                    <p className="mindmap__subtitle">We are guided by a simple yet profound vision - create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                    <img className='mindmap__img' src={mindMapGirl} alt="" />
                </div>
                <ul className="mindmap__table">
                    {contentCard(handleCardId)};
                    {mindmapCards.map((card) => {
                        return (
                            <li key={card.id}className={`mindmap__card mindmap__card-${card.title.split()[0].toLocaleLowerCase()}`} onClick={() => {setHandleCardId(card.id)}}>
                                <h2 className="mindmap__num">{card.num}</h2>
                                <h4 className="mindmap__card-name">{card.title} <HiArrowNarrowRight className='mindmap__card-arrow'/></h4>
                                <img src={card.img} alt="" className="mindmap__card-img" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </StyledMindMap>
    )
}

export default MindMap