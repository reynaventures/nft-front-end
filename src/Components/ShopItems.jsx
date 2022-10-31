import React from 'react'
import styled from 'styled-components';

const StyledShopItem = styled.div `
        .about__get-title {
      transition-duration: .2s;
      color: rgba(163,163,163,1);
      letter-spacing: .025em;
      text-transform: uppercase;
      font-size: .75rem;
      line-height: 1rem;
      width: 100%;
      cursor: pointer;
      padding: 0.75rem 0;
      font-family: 'proofBoldFont', sans-serif;
      border-bottom: 1px solid rgba(163,163,163,0.4);
      &:hover {
        color: #000;
      }
    }
    .about__get-title--active {
        color: #000;
    }
    .about__get-hidden {
        line-height: 1.25rem;
        font-weight: 300; 
        font-size: .75rem;
        color: #000000ca;
        font-family: 'mainFont', sans-serif;
        margin-top: 15px;
        transition: 0.4s all;
    }
`
function ShopItem({ itemId, itemTitle, itemHiddenText, openCardId, setOpenCardId }) {
    return (
        <StyledShopItem>
            <li className={openCardId === itemId ? "about__get-title about__get-title--active" : "about__get-title"} onClick={() => setOpenCardId(itemId)}>
                {itemTitle}
                {openCardId === itemId &&
                    <p className="about__get-hidden">{itemHiddenText}</p>
                }
            </li>
        </StyledShopItem>
    )
}

export default ShopItem