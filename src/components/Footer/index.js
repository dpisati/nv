import React from 'react'

import { 
    FooterContainer, 
    InnerFooter,
    BottomStrip,
    SocialIcon,
    Secondary } from './styles';
    
import logoFooter from '../../assets/images/logoFooter.svg';
import bottomStripPlus from '../../assets/images/bottomStripPlus.svg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import youtube from '../../assets/images/youtube.svg';

export default function Footer() {
    return (
        <FooterContainer>
            <span />
            <InnerFooter>
                <img src={logoFooter} alt="Eagle Head" />
                <aside>
                    <div>
                        <h4>Legal Eagles Limited</h4>
                        <p>
                        100 Quay Street <br />
                        Auckland 1010, New Zealand<br />
                        P: 09  300 0019
                        </p>
                    </div>
                    <p>
                        Terms &#38; Conditions<br />
                        Privacy Policy<br />
                        Complaints Process
                    </p>
                    <p>
                        Vulnerable Client Policy<br />
                        Seek Professional Advice
                    </p>
                    <p>
                        © Copyright Legal Eagles
                    </p>
                </aside>
            </InnerFooter>
            <BottomStrip>
                <div>
                    <p>Follow us</p>
                    <SocialIcon>
                        <img src={facebook} alt="Facebook"/>
                    </SocialIcon>
                    <SocialIcon>
                        <img src={linkedin} alt="LinkedIn"/>
                    </SocialIcon>
                    <SocialIcon>
                        <img src={youtube} alt="Youtube"/>
                    </SocialIcon>
                </div>
                <div>
                    <p>Get in touch</p>
                    <Secondary>Contact us</Secondary>
                    <img src={bottomStripPlus} alt="Plus symbol"/>
                </div>
                <div>
                    <p>News</p>
                    <Secondary>Subscribe for updates</Secondary>
                    <img src={bottomStripPlus} alt="Plus symbol"/>
                </div>
            </BottomStrip>
        </FooterContainer>
    )
}
