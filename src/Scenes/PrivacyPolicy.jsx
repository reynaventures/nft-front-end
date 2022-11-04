import React from 'react';
import styled from 'styled-components';

const StyledPrivacy = styled.div `
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

function Privacy() {
    return (
        <StyledPrivacy>
            <div className="license">
                <header className="license__header">
                    <h1 className="header__title">PRIVACY POLICY</h1>
                    <p className="header__revised">‍Last updated on November 4th, 2022</p>
                </header>
                <main className="main">
                    <section className='main__section'>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">
                                    <p>Reyna Ventures. and our corporate affiliates (the “Company”, “we”, “us”, “our”) respect and uphold individual rights to privacy and the protection of personal information while balancing such rights with our need to process your personal information to manage our business and deliver our services to you.  Based on applicable privacy and data protection principles common to the United States and other jurisdictions which we are subject to, we have developed this privacy policy (the “Policy”) to explain our practices for processing your personal information.  This Policy does not apply to our employees’ personal information or any anonymized information.</p>
                                    <p>This Policy describes our practices with respect to how we may collect, use, disclose, retain, dispose and otherwise process (collectively, “process”) and how you may correct, update and access your personal information that you provide as a user of the website operated at https://reyna.ventures and https://eitny.xyz, and other locations from time to time‎ (the “Website”), and the services we provide through the Website (collectively, the “Service”). This Policy references the general Terms and Conditions of Use for the Company located at https:///reyna.ventures and https://eitny.xyz, and forms an essential part thereof. All capitalized terms not otherwise defined herein have the meaning provided in our Terms of Use.</p>
                                    <p>PLEASE READ THIS PRIVACY POLICY CAREFULLY.  By using our Website or Service, or otherwise by choosing to provide us with your personal information, you acknowledge and consent to the processing of your personal information in the United States in accordance with this Policy and as may be further identified when the personal information is collected.</p>
                                    <p>If you do not consent to the processing of your personal information in accordance with this Policy, please do not access or continue to use any of the Website or the Service or otherwise provide any personal information to us.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className='main__section'>
                    <h3 className="section__title">1. Personal Information</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">For the purposes of this Policy, “personal information” means any identifiable information about an individual, including but not limited to an individual’s name, home address, telephone number, email address, except any other information otherwise exempted by applicable law.  

When you use our Website or Service, we may collect the following personal information from you:

- contact information such as name, email address, phone number, and business details; and
- information generated from your access and use of the Website such as performance data of the Website (“Usage Data”)

Your personal information may be collected when:

- you fill out free-form fields on our Website 
- you connect with us through social media;

We only collect personal information that we need to provide the Service.  We encourage you to not provide us with any personal information beyond what is necessary and as requested by us.

Collection from Third Parties

We do not knowingly collect your personal information from a third party unless you consent or we are otherwise exempted, required or permitted by applicable laws to do so.  For example, we may collect your personal information from the following third parties:

- your authorized representative(s);
- organization(s) that you previously consented to collect your personal information; or
- public sources in which your personal information is publicly available.

If we collect your personal information from a third party, we will only process that information for the specific purpose for which it was provided to us in accordance with this Policy and the policy under which that information was collected.

Links to Other Sites

Our Website may contain links to other applications or Internet resources which are provided solely for your convenience and information. When you click on one of those links you are contacting another Internet resource. We have no responsibility or liability for, or control over, those other Internet resources or their collection, use and disclosure of your personal information.  We encourage you to read the privacy policies of those other Internet resources to learn how they collect and use your personal information.

Information about Minors

Our service is intended solely for users who are 13 years of age or older.

We do not knowingly collect personal information about any person under the age of 13. No such minor, nor any parent or guardian as it relates to such minor, should submit such minor’s personal information to us through the Website, or otherwise for any reason and under any circumstances.  

If you believe that a minor has provided us with personal information without parental consent, please contact us at the address indicated in Section 10 below and we will work to delete that data from our systems.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">2. Purpose for Which Personal Information is Processed</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">We may process your personal information for the following purposes (the “Purposes”):

- to verify and authenticate your identity;
- to ensure that the Website and Service is optimized for your use and benefit;
- to analyze user experience and improve the Website;
- to operate, maintain and provide to you the Service, features and functionality of the Website;
- to communicate with you to provide you services, contacts, materials and/or recommendations for your needs as identified by you through phone, email, or the Website;
- to comply with internal policies and procedures and other legal, accounting, or security requirements;
- to share your personal information with our employees, contractors, consultants and other third party service providers such as web or application hosting providers, advertising agencies, payment processors or customer service agencies (“Third Party Processors”) who require this information to assist us with establishing, maintaining and managing our relationship with you and optimizing and providing the Website or Service for your use and benefit. Please note that we may change or add Third Party Processors at any time, in our sole discretion, either in the United States or elsewhere. We encourage you to reference this Policy from time-to-time, to obtain updated information.

We will only process your personal information for the Purposes for which we intend to process such information.  Otherwise, we will not process your personal information without your consent.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">3. Disclosure of Your Personal Information</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">We may disclose your personal information for the Purposes as described in this Policy in the following ways:

- to our employees and contractors;
- to our business partners;
- to our service providers including web or application hosting providers, advertising agencies, payment processors and customer service agencies; and
- to law enforcement, government or regulatory bodies, or other lawful authorities.

Your personal information that we collect may be processed outside of the United States but only in relation to the Purposes. As a result, your personal information may be accessible to law enforcement and regulatory authorities in accordance with other jurisdictions’ applicable laws.</div>
                        </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">1. Legal Basis for Processing Your Personal Information</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Consent

We will process your personal information only with your knowledge and consent, except where exempted, required or permitted by applicable laws. The form of consent may vary depending on the circumstances and the type of information being requested.  Your consent may be expressed with clear options to say “yes” or “no”, such as by being asked to check a box to indicate your consent, or implied, such as when you provide us with your address through a form or email seeking information and we use those means to respond to your request.  Your consent can also be provided by your authorized representative.  Taking into account the sensitivity of your personal information, purposes of collection, and your reasonable expectations, we will obtain the form of consent that is appropriate to the personal information being processed.  By using our Website or Service, or otherwise by choosing to provide us with your personal information, you acknowledge and consent to the processing of your personal information in accordance with this Policy and as may be further identified when the personal information is collected.  When we process your personal information for a new purpose, we will document that new purpose and ask for your consent again.

If you do not consent to the processing of your personal information in accordance with this Policy, please do not access or continue to use any of the Website or Service or otherwise provide any personal information to us.  

You may refuse to provide consent or may notify us at any time that you wish to withdraw or change your consent to the processing of your personal information without penalty, subject to legal or contractual restrictions and reasonable notice by opting out of the use of your personal information by contacting our Privacy Officer (see Section 10 below).   However, if you withdraw or change your consent, we may not be able to provide you with the Service through the Website.

Other Legal Bases

Aside from consent, we may also process your personal information under other legal bases, as permitted by the applicable laws.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">2. Security of Personal Information</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">The security of your personal information is important to us. We protect personal information using physical, technological and organizational safeguards. We regularly review our practices to ensure they align with reasonable industry practices appropriate to the level of sensitivity to safeguard personal information against loss or theft, unauthorized access, alteration or disclosure.

However, no method of transmission over the Internet, or method of electronic storage, is completely secure. As such, despite our safeguards and protocols, we cannot fully guarantee the security of your personal information and you should always exercise caution when disclosing personal information over the Internet.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">3. Requests for Access to and Correction of Personal Information</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">Applicable privacy laws allow, to varying degrees, individuals the right to access or request the correction of errors or omissions in their personal information that is in our custody or under our control. You may request access to and review of your personal information in our possession. However, access may be declined where permitted or required by applicable law.

You may request that we correct your personal information in our possession. We reserve the right not to change any personal information if we do not agree that it is inaccurate or outdated, but will append any alternative text the individual concerned believes appropriate.

If access cannot be provided, we will notify the individual making the request within 30 days, in writing, of the reasons for the refusal.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">4. Spam Policy</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">We are committed to compliance with anti-spam legislation. Any commercial electronic messages (“CEMs”) we send to outside parties are protected by a range of business procedures, processes and policies to ensure that such communication is done in compliance with such laws.

- Consent — We do not send you CEMs without your consent. This consent typically must be “express” (expressly acknowledged by you), but in certain circumstances can be “implied” or specifically exempt from consent requirements.  We created our sign-up, registration and consent forms in order to ensure that your consent is meaningful (i.e. informed and freely given) as in accordance with applicable law.  When we collect your electronic contact information, you will know the exact purposes behind the collection.
- Content — We adopt processes to ensure that our CEMs contain the following requirements, which will usually be in the footer of the CEM. We will: (a) identify ourselves as the party sending the CEM, and whether we are sending the message on our own behalf or on behalf of someone else; (b) provide you with our contact information; and (c) set out a clear, working unsubscribe mechanism or preference centre that is easy to use, automatic, and at no cost to you (other than your own cost of connecting to the Internet).
- Clarity — We ensure that each aspect of a CEM (including its header, content, or any links or URLs in the CEM) conveys the appropriate information, whether viewed individually or taken as a whole, so that you always know what you are clicking on.

If you receive a CEM from us but believe that you should not have, or no longer wish to receive CEMs, we will aim to respect your preferences in a timely manner once you update them through our unsubscribe mechanism, and in any event within 10 business days.  If you have any questions or concerns about our unsubscribe options, you may contact us at the address indicated in Section 10 below.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">5. Retention of Your Personal Information</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">We generally keep personal information for only as long as it is needed to accomplish the purposes for which it was collected, or as needed for authorized or legitimate purposes.  More specifically, we retain personal information as long as necessary for the fulfillment of the identified purposes for its collection or as otherwise necessary to comply with applicable laws or protect our interests. When personal information is no longer necessary or relevant for the identified purposes, or as required to be retained by applicable laws, we will take steps to have it deleted, destroyed, erased, aggregated or made anonymous. We use reasonable industry practices to ensure we have adequate controls, schedules and practices for information and records retention and destruction which apply to personal information.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">6. Updates or Changes to this Policy</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">This Policy was last updated on August 17, 2021. We will occasionally update this Policy and revise the "last updated" date appearing in this paragraph. Privacy laws continue to evolve and, as a result, we may change this Policy from time to time at our full discretion without any prior notice or liability to you or any other person. The processing of your personal information by us will be governed by the version of this Policy in effect at that time.

If we make any material changes we will either (a) notify you by email (sent to the email address listed in your account), or (b) provide a notice on the Website or otherwise through the Service before the change becomes effective. Any change to this Policy will apply to existing information, as well as information collected onwards from the date that this Policy is posted or on the date as specified in the notification. We encourage you to periodically review this page for the latest information on our privacy practices to ensure you are aware of any changes.  Your continued use of the Service signifies your acceptance of any changes to this Policy.</div>
                            </li>
                        </ul>
                    </section>
                    <section className="main__section">
                        <h3 className="section__title">7. Contact Information for Privacy Officer</h3>
                        <ul className="section__list">
                            <li className="section__block">
                                <div className="section__content">You can direct any questions or concerns regarding our compliance with this Policy and our processing of your personal information to our Privacy Officer by emailing privacy@reyna.ventures.

If you are not satisfied with our Privacy Officer’s response to your question or concern, you may be able to file a complaint under applicable privacy laws.  Our Privacy Officer will provide you with the contact information to do so if requested. We strive to offer an accessible and simple complaint procedure. We will promptly investigate all complaints received, and if a complaint is justified, we will take the necessary steps to resolve the issue in question.</div>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </StyledPrivacy>
    )
}

export default Privacy