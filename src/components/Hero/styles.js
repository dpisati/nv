import styled from 'styled-components';

export const HeroContainer = styled.div`
    background-color: red;
    width: 100%;
    margin: 0 auto;
    height: 701px;
    

`;

export const Slide = styled.div`
    width: 100vw;
    height: 701px;
    background-color: cyan;
    display: flex !important;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;


export const SlideImg = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    text-align: center;
`;



export const BreakLine = styled.br`
       @media (max-width: 850px) {
           display: none;
       }
`;


export const HeroTextContainer = styled.div`
    position: absolute;
    left: 10vw;
    text-align: left;
    color: var(--white);
    max-width: 900px;

    
    h1 {        
        font-size: 100px;
        line-height: 105px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;

        strong {
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            color: #CCCCCD;
        }
    }



    div {
        margin-top: 18px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
            height: 38px;
            width: 147px;
            color: #FFFFFF;
            font-family: "Open Sans";
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 38px;
            text-align: right;
        }

        button {
            background-color: transparent;
            cursor: pointer;
            margin-left: 15px;
            border: none;
        }
    }
    @media (max-width: 850px) {
        left: 0;
        padding-left: 15px;

        h1 {
            font-size: 60px;
            font-weight: 800;
            letter-spacing: -1.2px;
            line-height: 60px;
        }

        div {
            p {
                height: 38px;
                width: 125px;
                color: #FFFFFF;
                font-family: "Open Sans";
                font-size: 17px;
                font-weight: 600;
                letter-spacing: 0;
                line-height: 38px;
                text-align: right;
            }

            button {
                img {

                    height: 24px;
                    width: 24px;
                }
            }
        }
    }
`;