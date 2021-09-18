import React from 'react'

import { MeetOurTeamContainer } from './styles';

import './styles.css';

import josef from '../../assets/images/1.png'
import samantha from '../../assets/images/2.png'
import peter from '../../assets/images/3.png'
import susan from '../../assets/images/4.png'

import 'swiper/swiper.min.css';
export default function MeetOurTeam() {
    return (
        <MeetOurTeamContainer>
            <main>
                <h2>Meet our Team.</h2>
                <p>
                    Legal Eagles is a leading law 
                    firm focused on achieving the 
                    best possible outcomes for our 
                    clients, with a history of 
                    supporting the industries that 
                    make New Zealand successful.
                </p>
            </main>
            <section>
                <span></span>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={josef} alt="Joseph Patel" />
                            <div>
                                <p>Joseph Patel</p>
                                <span>Partner</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={samantha} alt="Joseph Patel" />
                            <div>
                                <p>Samantha Peters</p>
                                <span>Partner</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={peter} alt="Joseph Patel" />
                            <div>
                                <p>Peter Fitsimmons</p>
                                <span>Managing Partner</span>
                            </div>
                        </div>


                        <div className="swiper-slide"
                            style={{
                                marginRight: '100px'
                            }}
                        >
                            <img src={susan} alt="Joseph Patel" />
                            <div>
                                <p>Susan Macdonald</p>
                                <span>Partner</span>
                            </div>
                        </div>


                        <div className="swiper-slide last">
                        </div>





                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </MeetOurTeamContainer>
    )
}
