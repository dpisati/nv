import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 190px;  
    position: relative;
    margin-top: 144px;

    span {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: Black;
        width: 100%;
        height: 5px;
    }

    @media (max-width: 1045px) {
        height: auto;
    }
`;

export const InnerFooter = styled.footer`
    width: 80%;
    margin-left: 10%;
    display: flex;
    align-items: flex-start;
    color: #2F2D2D;
    font-family: "Open Sans";
    font-size: 12px;
    letter-spacing: 0;
    line-height: 18px;
    padding-top: 30px;
    border-top: 1px solid #EBEBEB;
    
    img {
        margin-right: 4vw;
        margin-left: 30px;
    }

    aside {
        width: 70%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        @media (max-width: 700px){
            width: auto;
            padding-right: 10vw;
            flex-direction: column;
        }
    }

    @media (max-width: 1045px) {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 40px;
    }

            
    @media (max-width: 855px) {
        justify-content: space-between;
        align-items: space-between;
        padding-left: 20px;

        img {
            margin: 0;
        }

        p {
            margin-bottom: 30px;
            margin-right: 20px;
        }
    }
`;

export const BottomStrip = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 50px;
    margin-top: 33px;
    background-color: #2F2D2D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    font-family: "Open Sans";
    padding: 0 30px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        p {
            color: #FFFFFF;
            font-family: "Open Sans";
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0;
            line-height: 18px;
        }
    }

    @media (max-width: 1045px) {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding: 34px 0;
        padding-left: 20px;
        margin-top: 0px;

        div {
            margin: 8px;
        }
    }
`;

export const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #FFFFFF;
    margin-left: 12px;
    transition: all 0.2s;
    cursor: pointer;

    img {
        margin: 0 auto;
    }

    &:hover {
        background-color: #CCCCCC;
    }
`;

export const Secondary = styled.div`
    height: 18px;
    color: #FFFFFF;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 11px;
    margin-right: 8px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: #CCCCCC;
    }
`;


