import React from 'react'

import { NewsContainer } from './styles';
import plusNews from '../../assets/images/plusNews.svg'

export default function News() {
    return (
        <NewsContainer>
            <h2>Latest News.</h2>

            <span></span>
            <div className="swiper mySwiper">

                    <div className="swiper-wrapper">


                        <div className="swiper-slide">
                            <h3>Finance</h3>
                            <h4>
                                Concerns about tax policy 
                                development and the quality 
                                of tax legislation highlighted 
                                to Minister
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                        <div className="swiper-slide">
                            <h3>Social</h3>
                            <h4>
                                Meth test provision in sale 
                                and purchase agreement recommended
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                        <div className="swiper-slide">
                            <h3>Property</h3>
                            <h4>
                                10th edition of REINZ / ADLS Sale &amp; 
                                Purchase Agreement changes finance condition
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                        <div className="swiper-slide">
                            <h3>Social</h3>
                            <h4>
                                New approach to assist those 
                                seeking refugee status and protection
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                        <div className="swiper-slide">
                            <h3>Safety</h3>
                            <h4>
                                More evidence needed to justify proposed 
                                Firearms Prohibition Orders regimen
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>

                        <div className="swiper-slide">
                            <h3>Property</h3>
                            <h4>
                                10th edition of REINZ / ADLS Sale &amp; 
                                Purchase Agreement changes finance condition
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                        <div className="swiper-slide">
                            <h3>Social</h3>
                            <h4>
                                New approach to assist those 
                                seeking refugee status and protection
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                        <div className="swiper-slide">
                            <h3>Safety</h3>
                            <h4>
                                More evidence needed to justify proposed 
                                Firearms Prohibition Orders regimen
                            </h4>
                            <span>21 Aug 2020</span>
                            <img src={plusNews} alt="Plus symbol" />
                        </div>


                    </div>

                    <div className="swiper-pagination"></div>
                </div>
        </NewsContainer>
    )
}
