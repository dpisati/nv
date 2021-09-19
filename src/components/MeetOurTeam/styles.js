import styled from 'styled-components';

export const MeetOurTeamContainer = styled.div`
    width: 90%;
    overflow: hidden;
    margin-left: 10%;
    color: #2F2D2D;
    
    main {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 62px;
        margin-top: 60px;

        h2 {
            height: 60px;
            color: #2F2D2D;
            font-family: "Open Sans";
            font-size: 60px;
            font-weight: 800;
            letter-spacing: -2px;
            line-height: 60px;
        }

        p {
            height: 170px;
            max-width: 448px;
            color: #2F2D2D;
            font-family: "Open Sans";
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 34px;
            margin-right: 259px;
            margin-right: 20%;
        }

        @media (max-width: 1285px) {
            p {
                margin-right: 30px;
            }
        }



        @media (max-width: 855px) {
            flex-direction: column-reverse;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;

            h2 {
                width: auto;
                height: auto;
                font-size: 40px;
                font-weight: 800;
                letter-spacing: -1.33px;
                line-height: 60px;
                margin-left: 15px;
                margin-top: 46px;
            }
            p {
                width: auto;
                height: auto;
                color: #2F2D2D;
                font-family: "Open Sans";
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 0;
                line-height: 30px;
                margin-right: 35px;
                margin-left: 68px;
                align-self: flex-end;
                
            }
        }
    }

    section {
        width: 100%;
        min-height: 400px;
        position: relative;

        > span {
            position: absolute;
            z-index: 2;
            width: 180px;
            height: 500px;
            right: 0;
            top: 0px;
            background: rgb(255,255,255);
            background: -moz-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
            background: -webkit-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
            pointer-events:none;
        }
    }

    @media (max-width: 1055px) {
        width: 100%;
        margin-left: 0;
        padding-left: 15px;       
    }

    @media (max-width: 855px) {
        width: 100%;
        margin-left: 0;

        section {
            padding-left: 15px;

            > span {
                width: 180px;
                height: 500px;                
            }
        }
    }
`;


export const TeamSlide = styled.div`
    height: 400px;
`;