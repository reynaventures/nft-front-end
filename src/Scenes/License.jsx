import React from 'react';
import styled from 'styled-components';

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
    .section__block {
        background-color: #ebe7e0;
        display: grid;
        column-gap: 40px;
        grid-template-columns: 2fr 1fr;
        color: #000;
    }
    .section__block + .section__block {
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
        .section__block {
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
                    <section className='main__section'>
                        <h3 className="section__title">DEFINITIONS</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias earum omnis nam sit quisquam magni doloribus, voluptates dolore veritatis soluta corporis hic vero. At nostrum asperiores minus iure quo quae voluptatibus necessitatibus nisi. Eius provident explicabo delectus voluptate, facilis hic quod possimus, reiciendis incidunt harum non? Magnam ipsum veritatis error autem vero perferendis itaque eum iusto sit suscipit ipsam nobis sunt excepturi rem inventore saepe quae distinctio minus eos, voluptates sint repellat aspernatur? Rerum et numquam debitis explicabo, aperiam voluptatem fugit quibusdam saepe ut minima eius eum. Incidunt pariatur animi similique ab corrupti cupiditate harum omnis! Consequatur inventore laudantium fugit!</div>
                                <div className="section__block-name">Capitalized terms that you see have the meanings set forth in this “Definitions” Section.</div>
                            </li>
                        </ul>
                    </section>
                    <section className='main__section'>
                    <h3 className="section__title">LICENSE GRANT</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Azuki NFT Art License. For as long as you lawfully own your Azuki NFT, and subject to your compliance with the terms of this License, we hereby grant you the following rights</div>
                                <div className="section__block-name">What rights are we giving you as long as you own an Azuki NFT?</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">1. a non-exclusive, worldwide, royalty-free, license to use, reproduce, display, modify, and create derivative works of the Azuki NFT Art for your Azuki NFT for personal, non-commercial use (such as to display in your wallet, as a profile picture, to create a pixel-art version for use in a third party platform);</div>
                                <div className="section__block-name">Which means, you can display your Azuki NFT or use it as a profile picture for non-Commercial Use. You can also create derivatives for non-Commercial Use…but check with local authorities, they might not allow it as a passport picture just yet.</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">2. a non-exclusive, worldwide, royalty-free, sub-licensable (but only to service providers assisting you with a Commercial Use) license to use, copy, reproduce and display the Azuki NFT Art for your Azuki NFT for any Commercial Use. The license in this sub-section (2) does not include a right to create derivative works of the Azuki NFT Art except as necessary to adapt and depict the Azuki NFT Art in or on the goods or media created pursuant to this license, or as otherwise required in the “No Rights to Trademarks” Section below. But this license does permit you to mint and create new NFTs and NFT projects based on your Azuki NFT Art for Azuki NFTs that you own, as long as you don't use the Azuki Trademarks on, or to promote, such new NFTs. From time to time, we may collaborate with third parties to create Azuki NFTs which include artwork, images, works of authorship, logos, trademarks, service marks, or trade dress owned by a third party (“Third Party Content”). The license in this paragraph does not extend to any Azuki NFT or Azuki NFT Art that contains Third Party Content, and you may not use, copy, reproduce, display, create derivative works of, or create new NFTs based on such Third Party Content, or any portion thereof, for any Commercial Use, unless we or the applicable third parties expressly provide our consent in writing or by public announcement.</div>
                                <div className="section__block-name">Which means, you can use your Azuki NFT for Commercial Use. Yes, you can even sell the derivatives, just as long as you don't use the Azuki Trademarks. The only exception is if an Azuki NFT is a product of a collab that contains content not owned by us, then you can't use that specific Azuki NFT for Commercial Use unless we or our partner explicitly provide our consent in writing or through a public announcement. For example, we have reserved the Final 50 Beanz for future collabs to make them even more dope. If you become the owner of one of these collab'd Final 50 Beanz, you cannot use them for Commercial Use unless we or our applicable partner expressly provide our consent in writing.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">MODIFICATIONS AND DERIVATIVE WORKS</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">We recognize that you might want to create modifications and derivative works of your Azuki NFT Art, and we allow you to do so under the scope of the licenses granted above. However, you acknowledge and agree that Chiru Labs may also modify, create derivative works of, and update any Azuki NFT Art and may create works of authorship similar or identical to your own adaptations, derivative works, and modifications of any Azuki NFT Art. Accordingly, on behalf of yourself and your heirs, successors and assigns, you irrevocably covenant and agree not to assert or bring any suit, claim, demand or challenge against Chiru Labs or its affiliates or licensees in connection with their use of any Azuki NFT Art or any adaptations, derivative works, and modifications thereto, even if such artwork or content is similar to or the same as any adaptations, derivative works, or modifications in any Azuki NFT Art that have been created by you.</div>
                                <div className="section__block-name">Basically we're letting you make dope sh*t with Azuki NFT art, but we have the same mission. No harm no foul if we make something that happens to look similar to what you made.</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">No Rights to Trademarks. Nothing in this License will be interpreted to grant you any rights to any Azuki Trademarks belonging to Chiru Labs. Without our written permission, you may not use any Azuki Trademarks for any Commercial Use, including to register any domain names or social media accounts using any Azuki Trademarks. This includes any Azuki Trademarks that may be displayed or contained in any Azuki NFT Art for your Azuki NFT (and you will need to modify the Azuki NFT Art to remove or obfuscate such Azuki Trademarks before making any Commercial Use of such Azuki NFT Art). You may not remove, delete or obscure any trademark notice, copyright notice or other intellectual property notice in any Azuki NFT or Azuki NFT Art.</div>
                                <div className="section__block-name">Which means, we are NOT giving you rights to use the Azuki Trademark or other logos. That includes Azuki trademarks on your Azuki NFT. You must get our written permission before using Azuki Trademarks or logos.</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">Transfer. The licenses granted above are non-transferrable, except that if you sell or transfer your Azuki NFT, you will no longer be granted the foregoing licenses in the Azuki NFT Art, and such license will transfer to the new owner of the Azuki NFT associated with such Azuki NFT Art. In connection with any sales, transfers or similar transactions of the Azuki NFTs, the transferee agrees that by purchasing, accepting, or otherwise acquiring the Azuki NFT, they shall be deemed to accept the terms of this License. You may not transfer an Azuki NFT to a transferee that is located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. government as a terrorist-supporting country; or is otherwise listed on any U.S. Government list of prohibited or restricted parties.</div>
                                <div className="section__block-name">Basically, these licenses are not transferable, unless you sell your Azuki NFT.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">DISCLAIMERS, LIMITATIONS OF LIABILITY, AND INDEMNIFICATION</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Disclaimers. YOUR ACCESS TO AND USE OF THE AZUKI NFT AND AZUKI NFT ART IS AT YOUR OWN RISK. YOU UNDERSTAND AND AGREE THAT THE AZUKI NFTS AND AZUKI NFT ART ARE PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE” BASIS. WITHOUT LIMITING THE FOREGOING, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, CHIRU LABS, ITS PARENTS, AFFILIATES, RELATED COMPANIES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, PARTNERS AND LICENSORS (THE “CHIRU LABS ENTITIES”) DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. THE CHIRU LABS ENTITIES MAKE NO WARRANTY OR REPRESENTATION AND DISCLAIM ALL RESPONSIBILITY AND LIABILITY FOR: (A) THE COMPLETENESS, ACCURACY, AVAILABILITY, TIMELINESS, ORIGINALITY, SECURITY OR RELIABILITY OF THE AZUKI NFTS AND AZUKI NFT ART; (B) THE OPERATION OR COMPATIBILITY WITH ANY OTHER APPLICATION OR ANY PARTICULAR SYSTEM, DEVICE, BLOCKCHAIN, DIGITAL WALLET, HARDWARE OR MARKETPLACE; AND (C) WHETHER THE AZUKI NFTS AND AZUKI NFT ART WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE OR ERROR-FREE BASIS; AND (D) THE DELETION OF, OR THE FAILURE TO STORE OR TRANSMIT THE AZUKI NFTS AND AZUKI NFT ART. THE AZUKI NFTS ARE INTENDED FOR CONSUMER ENJOYMENT, USE AND CONSUMPTION ONLY. THEY ARE NOT A “SECURITY,” AS DEFINED UNDER THE SECURITIES ACT OF 1933, AS AMENDED, THE SECURITIES EXCHANGE ACT OF 1934, AS AMENDED, THE INVESTMENT COMPANY ACT OF 1940, AS AMENDED, OR UNDER THE SECURITIES LAWS OF ANY U.S. STATE. Limitations of Liability. TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO EVENT WILL THE CHIRU LABS ENTITIES BE LIABLE (A) FOR ANY INDIRECT, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SERVICES), HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER UNDER THIS LICENSE OR OTHERWISE ARISING IN ANY WAY IN CONNECTION WITH THE SERVICES OR THIS LICENSE AND WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) EVEN IF THE CHIRU LABS ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THIS LICENSE OR THE DELIVERY, USE OR PERFORMANCE OF THE SERVICES. THE MAXIMUM AGGREGATE LIABILITY OF THE CHIRU LABS ENTITIES FOR ALL DAMAGES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, SHALL BE THE GREATER OF (I) $1,000 OR (II) THE AMOUNT YOU PAID CHIRU LABS FOR YOUR AZUKI NFT. SOME JURISDICTIONS (SUCH AS THE STATE OF NEW JERSEY) DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE EXCLUSION OR LIMITATION MAY NOT APPLY TO YOU.</div>
                                <div className="section__block-name">Imagine something you don't like happening to Azuki or your Azuki NFT. Are there any limitations to Chiru Labs' liability in that situation? Yes, there are some limitations which are spelled out here.</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">Indemnification. By entering into this License and accessing or using the Azuki NFTs or Azuki NFT Art, you agree that you shall defend, indemnify and hold the Chiru Labs Entities harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys' fees and costs) incurred by the Chiru Labs Entities arising out of or in connection with: (i) your violation or breach of any term of this License or any applicable law or regulation; (ii) your violation of any rights of any third party; (iii) your access to or use of the Azuki NFT or Azuki NFT Art; (iv) any modifications to or derivative works of the Azuki NFT Art you create, or (v) any fraud, negligence or wilful misconduct committed by you.</div>
                                <div className="section__block-name">Please use your Azuki NFT responsibly. If someone sues us because of something you did with your Azuki NFT, you will be responsible for any damages we face (including our legal expenses).</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">ADDITIONAL PROVISIONS</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Additional Features. Chiru Labs may choose to make additional features, access, content, items or other benefits available to owners of Azuki NFTs (“Additional Features”). Chiru Labs has no duty or obligation to provide you with any Additional Features, and you should not expect any Additional Features when acquiring an Azuki NFT. Additional Features may be subject to additional terms and conditions, which may be presented to you at the time they are made available.</div>
                                <div className="section__block-name">This license allows us to add more features to your Azuki NFT, but doesn't create an obligation for us to do so.</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">Updating This License. We may modify this License from time to time. If we make changes that are material, we will use reasonable efforts to attempt to notify you, such as by placing a prominent notice on the first page of our website. However, it is your sole responsibility to review this License from time to time to view any such changes. Your continued access or use of the Azuki NFTs or Azuki NFT Art after the License has been updated will be deemed your acceptance of the modified License.</div>
                                <div className="section__block-name">We will give you prominent advance notice in case we change this license.</div>
                            </li>
                            <li className="section__block">
                                <div className="section__content">Termination of License. If you breach any of the provisions of this License, all licenses granted by Chiru Labs will terminate automatically. Upon the termination of your licenses, you shall cease all marketing, distribution, or sale of goods, services and media that feature the Azuki NFT Art and shall cease all further use of the Azuki NFT Art. All provisions which by their nature should survive the termination of this License shall continue in full force and effect subsequent to and notwithstanding any termination of this License by Chiru Labs or you. Termination will not limit any of Chiru Labs' other rights or remedies at law or in equity. Basically this license will be terminated if you breach any provisions. Miscellaneous. If any provision of this License shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from this License and shall not affect the validity and enforceability of any remaining provisions. This License and the licenses granted hereunder may be freely assigned by Chiru Labs but may not be assigned by you without the prior express written consent of Chiru Labs. Any purported assignment in violation of this License will be null and void. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. You represent and warrant that you have the legal capacity to agree to this License. This License is governed by the laws of the State of California, without regard to conflict of laws rules, and the proper venue for any disputes arising out of or relating to any of the same will be the state and federal courts located in Los Angeles, California. EACH PARTY HEREBY EXPRESSLY WAIVES ANY RIGHT TO A TRIAL BY JURY IN ANY ACTION OR PROCEEDING BROUGHT BY OR AGAINST EITHER PARTY IN CONNECTION WITH THIS LICENSE. You and Chiru Labs agree that the United Nations Convention on Contracts for the International Sale of Goods will not apply to the interpretation or construction of this License.</div>
                                <div className="section__block-name">Basically this license will be terminated if you breach any provisions.</div>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </StyledLicense>
    )
}

export default License