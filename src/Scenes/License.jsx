import React from 'react';
import styled from 'styled-components';
import { licenseSections } from '../constans/LicenseSections';

const StyledLicense = styled.div `
background-color: #ebe7e0;
position: absolute;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
    .license {
        width: 100%;
    }
    .main {
        color: #000;
        background-color: #ebe7e0;
        max-width: 1400px;
        padding: 5px 25px;
        margin: 0 auto;
        font-family: 'proofFont', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .license__header {
        background-color: #c03540;
        color: #fff;
        text-align: center;
        padding: 150px 10px 30px 10px;
        width: 100%;
        letter-spacing: -1px;
        .header__title {
            color: #fff;
            margin-bottom: 10px;
            font-family: 'proofBoldFont', sans-serif;
            letter-spacing: -1px;
            font-weight: 900;
        }
    }
    .header__revised {
        color: #ffffff6e;
    }
    .main__section {
        margin: 40px 0;
    }
    .section__title {
        border-bottom: 1px solid #22222239;
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-family: 'proofBoldFont', sans-serif;
        font-size: 25px;
    }
    .section__box {
        background-color: #ebe7e0;
        display: grid;
        column-gap: 40px;
        grid-template-columns: 2fr 1fr;
        color: #000;
    }
    .section__box + .section__box {
        margin-top: 40px;
    }
    .section__block-name {
        border-radius: 0 10px 10px 10px;
        background-color: #fff;
        color: #000;
        display: inline-block;
        position: relative;
        font-size: 1.125rem;
        line-height: 1.75rem;
        padding: 1rem 20px;
        align-self: flex-start;
        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -20px;
            width: 0; 
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-top: 20px solid #fff;
        }
    }
    .section__content {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        line-height: 2;
        font-size: 1rem;
        letter-spacing: -.025em;
    }
    .main__text {
        text-align: center;
        margin: 35px 0;
        line-height: 2.25rem;
        font-size: 1.25rem;
        color: #0000009e;
        max-width: 75%;
    }
    .section__content + .section__content, .section__block-name + .section__block-name {
        margin-top: 60px;
    }
    @media only screen and (max-width: 1050px) {
        .section__box {
            grid-template-columns: 1fr;
        }
        .main__text {
            max-width: 100%;
        }
        .section__block-name {
            margin-top: 20px;
            &::before {
                display: none;
            }
        }
    }
`

function License() {
    return (
        <StyledLicense>
            <div className="license">
                <header className="license__header">
                    <h1 className="header__title">AZUKI NFT LICENSE AGREEMENT</h1>
                    <p className="header__revised">LAST REVISED ON 5/5/22</p>
                </header>
                <main className="main">
                    <p className="main__text">This Azuki NFT License Agreement (the “License”) is a legally binding agreement entered into between Chiru Labs and you. When you acquire an Azuki NFT, you own all personal property rights to the token underlying the Azuki NFT (e.g., the right to freely sell, transfer, or otherwise dispose of that Azuki NFT), but you do not own the associated artwork, brand, or other intellectual property associated with that Azuki NFT, except for the specific licensed rights set forth below.</p>
                        {licenseSections.map(block => {
                            
                            return (
                                <section key={block.id} className='main__section'>
                                    <h3 className="section__title">{block.title}</h3>
                                    <ul className="section__list">
                                        <li className="section__block">
                                            {block.blockArray.map((blockitem, i) => (
                                                    <div key={i} className="section__box">
                                                        <div className="section__content">{blockitem.info}</div>
                                                        <div className="section__block-name">{blockitem.blockQuastion}</div>
                                                    </div>
                                            ))}
                                        </li>
                                    </ul>
                                </section>
                            )
                        })}
                </main>
            </div>
        </StyledLicense>
    )
}

export default License