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
        text-transform: uppercase;
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
                    <h1 className="header__title">TERMS & CONDITIONS</h1>
                    <p className="header__revised">‍Last updated on November 4th, 2022</p>
                </header>
                <main className="main">
                    <section className='main__section'>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">
                                    <p>Eitny is a collection of digital collectibles, in the form of non-fungible tokens (NFTs) running on the Ethereum network. This webMarketplacesand respective NFT marketplaces (collectively, the “Marketplaces”) are only an interface allowing users to exchange digital collectibles (referred to as “Art” herein). Eitny intellectual property, designs, content, slogans, smart contracts and trademarks (collectively referred to as “Reyna Ventures”) were created by and are the sole property of Reyna Ventures (referred to as  “Creator”, herein).
</p>
                                    <p>Users are entirely responsible for the security and management of their own private Ethereum wallets and validating all transactions and contracts generated by the Marketplaces before approval. Furthermore, as the Eitny smart contract runs on the Ethereum network, there is no ability to undo, reverse, or restore any transactions and Eitny is not responsible for any adverse results of execution of the Eitny smart contract.
</p>
                                    <p>The Marketplaces are provided “as is” and “as available” without warranty of any kind. By using the Marketplaces you are accepting sole responsibility for any and all transactions involving Eitny digital collectibles.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className='main__section'>
                    <h3 className="section__title">1. Ownership</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">A. You Own the NFT. Each digital collectible is an NFT on the Ethereum blockchain. When you purchase an NFT, you become the “Primary Rights Owner” of  the NFT and the Art associated with the NFT within the ecosystems defined below. Rights in the NFT are mediated entirely by the Eitny smart contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the rights of the Primary Rights Owner of any Eitny NFT without your consent.

It is specified that the rights of reproduction, representation and adaptation of the NFT and associated Art are granted to the Primary Rights Owner for all modes of exploitation set forth below and on all medium and/or media (including but not limited to, digital media, physical media, paper editions, optical discs, storage media, multimedia, etc.), using all formats (including but not limited to, still images, animated sequences, etc.) and by all technical processes known to date or to come (including but not limited to digitalisation and computer storage, downloading, all computerised means or electronic communication networks, etc.), and such rights shall include, in particular but without being limited to it:

    1. The reproduction by any process of the Art, by any means known and/or unknown in the current state of the art, including but not limited to manufacturing, duplication, copying, broadcasting, distribution, publication, marketing, promotion and advertising, in all formats and sizes, allowing communication to third parties, by any means and/or medium;
    2. The representation and communication, directly or indirectly, to third parties, of the Art, in whole or in part, by any means of communication known or unknown to date, including but not limited to by catalogue, written press, display, POS advertising, posters, television and by all public or private, free or paying, analogue or digital, telecommunication or computer networks, online and offline, including the Internet and any other equivalent;
    3. The right to, subject to the the Creator’s rights as the Creator where technically required, edit, adapt and modify in a non-substantial way the Art, for the purposes of its reproduction or representation and to create derivative works thereof, to the extent that the derivative work includes only  corrections of size, format, colour, enhancement.  
‍

B. Personal Use. Subject to your continued compliance with these Terms, Reyna Ventures grants you a worldwide, royalty-free licence to use, copy, and display the Art for which you are a Primary Rights Owner, along with any extensions that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your Eitny NFT, provided that the marketplace cryptographically verifies each Eitny Primary Rights Owner’s rights to display the Art to ensure that only the actual Primary Rights Onwercan display the Art; or (iii) as part of a third party webMarketplacesor application that permits the inclusion, involvement, or participation of your Eitny NFT, provided that the website/application cryptographically verifies each Eitny Primary Rights Owner’s rights to display the Art for their Eitny to ensure that only the actual Primary Rights Ownercan display the Art, and provided that the Art is no longer visible once the owner of the Eitny leaves the website/application.

In case of transfer of ownership of the Purchased NFT, in any way whatsoever, including resale, the Primary Rights Owner, as seller, agrees to assign to the subsequent buyer of the Purchased NFT all rights of the Primary Rights Owner on the related Art and understands that the purchaser becomes the Primary Rights Owner of the related Art. Once a party transfers ownership of an NFT to another party, the seller no longer has any rights in the NFT, the related art, or any derivative works and must immediately cease any use of the related art and any derivative works based thereon.
This Agreement shall govern any Resale as long as it is still attached to the Purchased NFT and provided no other agreement has been concluded between the Primary Rights Ownerand the subsequent buyer, which shall only apply between the parties of said agreement.

‍

C. Commercial Use. Subject to your continued compliance with these Terms, the Creator grants you a worldwide licence to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of the Artgenerally, provided that the marketplace cryptographically verifies each Primary Rights Owner’s rights in the Artto ensure that only the actual owner can display the Art; (ii) owning or operating a third party webMarketplacesor application that permits the inclusion, involvement, or participation of the ART generally, provided that the third party webMarketplacesor application cryptographically verifies each Primary Rights Owner’s rights to display the Art for their Eitny to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the Primary Rights Owner leaves the website/application; or (iii) earning revenue from any of the foregoing.

‍

D. Eitny Intellectual Property.  Other than the rights to the NFT, nothing herein gives you any rights to any Eitny Intellectual Property or any other trademarks or other intellectual property rights belonging to the Creator  including, without limitation, to Eitny and the associated logos, slogans or any other associated marks. All of these rights are expressly reserved in the name of the Creator.

When using the Art, in any way whatsoever, including but not limited to its publication, exploitation, and/or promotion, the Primary Rights Ownershall not use the trademarks, service marks, or proprietary words or symbols of the Creator. By exception, when using the Art for non-commercial purposes only, the Primary Rights Ownershall have the right to reference the Creator by using the denomination “Reyna Ventures”,  “Eitny” or Associated denominations “E Studio” or “E Edu” or “E Fund” or “E Market” or “E Passport” or “E Impact” or “E Foundation” unless informed otherwise by the the Creator . Such use shall not, in any way whatsoever, damage or adversely impact the Creator ’s reputation.

The Creator shall have the right, at its sole discretion, to promote, including through social media, any public use of the Art by the Primary Rights Owner, unless the Primary Rights Owner informs the Creator otherwise, in writing.

Nothing contained in this Agreement shall grant or shall be deemed to grant to either party any right, title or interest in or to the other party’s trademarks.

In any case, the Primary Rights Owner shall not use the Art in a way that would or could present the Creator as endorsing, recommending or favouring, in any way whatsoever, the Primary Rights Ownerand/or its use of the Art.

‍

E. Feedback. You may choose to submit comments, bug reports, ideas or other feedback about the Site, including without limitation about how to improve the Marketplaces(collectively, “Feedback”). By submitting any Feedback, you agree that we are free to use such Feedback in any way we choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive, worldwide licence to incorporate and use the Feedback for any purpose.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">2. Your Obligations</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">You are solely responsible for your own conduct while accessing or using the Site, and for any consequences thereof. You agree to use the Site only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. By way of example, and not as a limitation, you may not, and may not allow any third party to: (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, hateful, violent, obscene, or otherwise objectionable content; (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii) impersonate another person; (iv) upload, post, transmit or otherwise make available through the Site any content that infringes the intellectual property or proprietary rights of any party or otherwise violates the legal rights of others; (v) engage in, promote, or encourage illegal activity (including, without limitation, money laundering); (vi) interfere with other users' use of the Site; (vii) use the Site for any unauthorized commercial purpose; (viii) modify, adapt, translate, or reverse engineer any portion of the Site; (ix) remove any copyright, trademark or other proprietary rights notices contained in or on the Site or any part of it; (x) use any technology to collect information about the Site’s for any unauthorized purpose; (xi) access or use the Site for the purpose of creating a product or service that is competitive with any of our products or services. If you engage in any of the activities prohibited by this Section, we may, at our sole and absolute discretion, without notice to you, and without limiting any of our other rights or remedies at law or in equity, immediately suspend or terminate your user account.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">3. Fees and Payment</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">A. If you elect to purchase a Eitny through the Marketplaces, any financial transactions that you engage in will be conducted solely through the Ethereum network. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions.  We will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage or any other transactions that you conduct via the Ethereum network.

B. Ethereum requires the payment of a transaction fee (a “Gas Fee”) for every transaction that occurs on the Ethereum network. The Gas Fee funds the network of computers that run the decentralized Ethereum network. This means that you will need to pay a Gas Fee for each transaction.

C. It is expressly agreed that all intellectual property rights assigned to the Primary Rights Owner, or to the subsequent Primary Rights Owners, are granted in consideration of the price paid by the Owner to purchase the Purchased NFT, as listed on the NFT marketplace on which it is acquired (the “Purchase Price”), where applicable, which shall be deemed fixed and definitive. Notwithstanding the foregoing, the Creator shall also be entitled to a compensation on any Resale of the Purchased NFT in accordance with the percentage of commission determined by the NFT marketplace on which said Resale is completed.</div>
                        </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">4. Cooperation</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">The Creator and the Primary Rights Owner shall cooperate in good faith and reasonably assist each other in the prosecution of legal proceedings involving the Art, or derivate works therefrom, including proceedings conducted for the purpose of protecting any and all intellectual property rights on the Art from infringement.

The Creator shall have the right to protect and defend, including through litigation, the rights attached to the Art in the event of the Owner’s inaction and subject to its prior information.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">5. Disclaimer</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">A. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE MARKETPLACESIS AT YOUR SOLE RISK, AND THAT THE MarketplacesIS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE MarketplacesAND ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE MarketplacesWILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE MarketplacesWILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE MarketplacesWILL BE ACCURATE, (III) THE MarketplacesOR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE MarketplacesARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE MarketplacesWILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.

B. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR WILLFUL MISCONDUCT.

C. WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE ETHEREUM NETWORK NOR DO WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES REGARDING ANY SMART CONTRACTS.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">6. Limitation of Liability</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">A. YOU UNDERSTAND AND AGREE THAT WE WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

B. YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE SITE, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR (B) $500.

C. YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE MARKETPLACES AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN. WE WOULD NOT BE ABLE TO PROVIDE THE MarketplacesTO YOU WITHOUT THESE LIMITATIONS.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">7. Governing Law</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">If any provision in this Agreement shall be held to be illegal, invalid or unenforceable, in whole or in part, the provision shall apply with whatever deletion or modification is necessary so that the provision is legal, valid and enforceable and gives effect to the initial intention of the parties.

The validity of this Agreement and any of its terms and provisions, as well as the rights and duties of the parties hereunder, shall be governed, interpreted and enforced in accordance with the laws of the United States.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">8. Risk Assumption</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">You accept and acknowledge each of the following:

A. To the extent that you sell your Eitny NFT, please be aware that the prices of NFTs are extremely volatile and fluctuations in the prices of other NFTs and impact the price of your Eitny both positively and negatively.  Given the volatility, NFTs such as Eitny should not be considered an investment. You assume all risks in that connection.

‍B. No information on this Marketplaces(or any other documents mentioned therein) is or may be considered to be advice or an invitation to enter into an agreement for any investment purpose. Further, nothing on this Marketplacesqualifies or is intended to be an offering of securities in any jurisdiction nor does it constitute an offer or an invitation to purchase shares, securities or other financial products.  Due to the artistic nature of the project, Eitny has not been registered with or approved by any regulator in any jurisdiction. It remains your sole responsibility to assure that the purchase of the Eitny and the associated art is in compliance with laws and regulations in your jurisdiction.

‍C. You assume all risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet.

‍D. NFTs, cryptocurrencies and blockchain technology are relatively new and the regulatory landscape is unsettled.  New regulations could negatively impact such technologies impacting the value for your Eitny. You understand and accept all risk in that regard.

‍E. You assume all responsibility for any adverse effects of disruptions or other issues impacting Ethereum or the Ethereum platform.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">9. Indemnification</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">You agree to hold harmless and indemnify Eitny and Reyna Ventures and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgement, litigation cost, and reasonable attorneys' fees arising out of or in any way related to (i) your breach of these Terms, (ii) your misuse of the Marketplaces, or (iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the Marketplace.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">10. Changes to the Terms and Conditions</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">We may make changes to the Terms at our discretion. Please check these Terms periodically for changes. Any changes to the Terms will apply on the date that they are made, and your continued access to or use after the Terms have been updated will constitute your binding acceptance of the updates. If you do not agree to any revised Terms, you may not access or use the Marketplaces.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">11. Age Limit</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Our Marketplacesand Content is not intended for children under the age of 18.  You must be at least 18 years old to access this Marketplacesor purchase an Eitny. If you are under 18 years old you are not permitted to use this Marketplacesfor any reason. By accessing the Marketplaces, you represent and warrant that you are at least 18 years of age.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">12. Dispute Resolution; Arbitration</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">All disputes arising out of or in connection with these Terms, including without limitation your access or use of the Marketplaces, or to any products sold or distributed through the Marketplaces, will be referred to and finally resolved by arbitration under the rules of the American Arbitration Association. The case will be adjudicated by a single arbitrator and will be administered by the American Arbitration Association in accordance with its applicable rules. Each party will cover its own fees and costs associated with the arbitration proceedings. The place of arbitration will be Delaware. The award of the arbitrator will be final and binding, and any judgement on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Notwithstanding the foregoing, we may seek and obtain injunctive relief in any jurisdiction in any court of competent jurisdiction.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THE MarketplacesOR ANY PRODUCTS SOLD OR DISTRIBUTED THROUGH THE Marketplaces, OR THE SMART CONTRACTS: (I) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A TRIAL BY JURY; AND (II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT, INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE</div>
                            </li>
                        </ul>
                    </section>

                </main>
            </div>
        </StyledLicense>
    )
}

export default License