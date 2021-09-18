import styled from "styled-components";

export const NavBarContainer = styled.header`
    background-color: transparent;
    position: fixed;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 123px;
    transition: all 0.35s ease-in-out;

    &::before {
        content: '';
        background-color: var(--black);
        width: 100%;
        height: 5px;
        position: absolute;
        top: 0;
        left: 0;
    }

    &.dark {
        background-color: var(--black);
        height: 80px;
        
    }

    svg {
        margin-top: 26px;
    }

    @media (max-width: 1055px) {
        height: 80px;
    }
`;

export const InnerNavBar = styled.div`
    background-color: transparent;
    max-width: 90vw;
    height: 100%;
    margin-left: 10vw;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    &.dark {
        img {
            height: 50px;
            margin-bottom: 15px;
        }

        aside {
            padding-bottom: 18px;
        }
    }

    aside {
        margin-right: 57px;

        @media (max-width: 1055px) {
            margin-right: 0px;
        }

        @media (max-width: 850px) {
            display: none;
        }

        a {
            color: var(--white);
            font-family: 'Open Sans', sans-serif;
            font-weight: bold;
            font-size: 18px;
            margin-left: 60px;
            cursor: pointer;
            transition: all 0.2s;

            &::before {
                content: '';
                width: 80px;
                height: 5px;
                background-color: transparent;
                position: absolute;
                top: 0;
                transition: all 0.2s;
            }

            &:hover::before {
                background-color: var(--white);                
            }
        }
    }

    div {
        display: none;
        cursor: pointer;
        margin-bottom: 17px;
        z-index: 100;
        height: 46px;
        width: 43px;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
        img {
            width: 100%;
            height: 100%;
        }
        
        @media (max-width: 850px) {
            display: block;
        }
    }

    
    @media (max-width: 1055px) {
        max-width: 100vw;
        margin-left: 0vw;
        padding: 0 20px;

        img {
            height: 60px;
        }
    }
`;


export const BurgerMenu = styled.div`
    position: fixed;
    top: 0px;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    background-color: var(--black);
    z-index: 20;
    transition: all 0.2s;

    &.open {
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        a {
            color: var(--white);
            font-family: 'Open Sans', sans-serif;
            font-weight: bold;
            font-size: 28px;
            cursor: pointer;
            margin: 5vh;
            
            &::before {
                content: '';
                height: 38px;
                width: 5px;
                background-color: transparent;
                position: absolute;
                left: 0;
                transition: all 0.2s;
            }

            &:hover::before {
                background-color: var(--white);                
            }
        }
    }

`;