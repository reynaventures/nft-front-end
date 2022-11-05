import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { mindmapCards } from '../constans/mindmapCards';
import Card1 from '../Components/mindmapCardContent.jsx/Card1';
import Card2 from '../Components/mindmapCardContent.jsx/Card2';
import Card3 from '../Components/mindmapCardContent.jsx/Card3';
import Card4 from '../Components/mindmapCardContent.jsx/Card4';
import Card5 from '../Components/mindmapCardContent.jsx/Card5';
import Card6 from '../Components/mindmapCardContent.jsx/Card6';
import Card7 from '../Components/mindmapCardContent.jsx/Card7';
import Card8 from '../Components/mindmapCardContent.jsx/Card8';
import { StyledMindMap } from './StyledMindmap';

function MindMap() {

    const [handleCardId, setHandleCardId] = useState(null);
    const contentCard = (id) => {
        switch (id) {
            case 0:
                return <Card1 setHandleCardId={setHandleCardId}/>
            case 1:
                return <Card2 setHandleCardId={setHandleCardId}/>
            case 2:
                return <Card3 setHandleCardId={setHandleCardId}/>
            case 3:
                return <Card4 setHandleCardId={setHandleCardId}/>
            case 4:
                return <Card5 setHandleCardId={setHandleCardId}/>
            case 5:
                return <Card6 setHandleCardId={setHandleCardId}/>
            case 6:
                return <Card7 setHandleCardId={setHandleCardId}/>
            case 7:
                return <Card8 setHandleCardId={setHandleCardId}/>
            default:
                console.log('nothing');
        }
    }

    return (
        <StyledMindMap>
            <div className="mindmap">
                <div className="mindmap__info">
                    <h1 className="mindmap__title">You're Entering  <br/>Eitny World <span> //</span></h1>
                    <p className="mindmap__subtitle">We’ve caught glimpses of Eitny in our dreams…. but something always felt too real. A splintering in our reality is getting wider. The Wanderers of this new existence are nearing. Once you’re here, who will you become?</p>
                    <p>Take the trip. Shift reality.</p>
                </div>
                <ul className="mindmap__table">
                    {contentCard(handleCardId)}
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