import styled from 'styled-components';

export const NewsContainer = styled.div`
    width: 90%;
    overflow: hidden;
    margin-left: 10%;
    color: #2F2D2D;
    position: relative;
    margin-top: 40px;

    > span {
        position: absolute;
        z-index: 2;
        width: 280px;
        height: 320px;
        right: 0;
        top: 100px;
        background: rgb(255,255,255);
        background: -moz-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
        background: -webkit-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
        pointer-events:none;
    }

    h2 {
        height: 60px;
        color: #2F2D2D;
        font-family: "Open Sans";
        font-size: 60px;
        font-weight: 800;
        letter-spacing: -2px;
        line-height: 60px
    }

    .swiper {
        height: 370px !important;
        margin-top: 40px;
        display: flex !important;
        align-items: flex-start !important;
    }

    .swiper-wrapper {
        align-items: baseline;
    }

    .swiper-slide {
        width: 300px !important;
        height: 320px !important;
        font-family: "Open Sans";
        display: flex !important;
        align-items: flex-start !important;

        h3, span {
            color: #AFACAC;            
            font-size: 16px;
        }

        h4 {
            margin-top: 12px;
            color: #000000;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 30px;
        }

        span {
            font-weight: 300;
            letter-spacing: 0;
            line-height: 40px;
            margin-top: 12px;
        }

        img {
            height: 32px;
            width: 32px;
            margin-top: 24px;
            background-color: transparent;
        }
    }

    .swiper-pagination {
        width: 90% !important;
    }

    @media (max-width: 1055px) {
        width: 100%;
        margin-left: 0;
        padding-left: 15px;       
    }

    @media (max-width: 855px) {
        width: 100%;
        padding-left: 25px;
        padding-right: 35px;
        > span {
            width: 180px;
        }

        h2 {
            font-size: 40px;
            font-weight: 800;
            letter-spacing: -1.33px;
            line-height: 60px;
        }

        
        .swiper {
            height: 300px !important;
            margin-top: 40px;
            display: flex !important;
            align-items: flex-start !important;
        }

        .swiper-slide {
            height: 220px !important;

            h4 {
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 0;
                line-height: 26px;
            }
            span {
                font-size: 16px;
                font-weight: 300;
                letter-spacing: 0;
                line-height: 40px;
            }
        }
        

        
        .swiper-pagination {
            width: 100% !important;
        }

    }
`;
