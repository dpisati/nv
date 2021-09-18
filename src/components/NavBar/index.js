import React, { useState } from 'react'

import { NavBarContainer, 
    InnerNavBar, 
    BurgerMenu } from './styles'

import close from '../../assets/images/close.svg';
import burger from '../../assets/images/burger.svg';
import logo from '../../assets/images/logoWhite.svg';
import logoFull from '../../assets/images/logoFull.svg';
export default function NavBar() {
    const [isNavDark, setIsNavDark] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const changeNavBackground = () => {
        if(window.scrollY >= 120) {
            setIsNavDark(true)
        } else {
            setIsNavDark(false)
        }
    }
    
    window.addEventListener('scroll', changeNavBackground);
    
    return (
        <>
            <NavBarContainer className={isNavDark && 'dark'}>
                <InnerNavBar className={isNavDark && 'dark'}>             
                    {isNavDark ? (
                        <img src={logo} alt="Legal Eagles" />
                    ) : (
                        <img src={logoFull} alt="Legal Eagles" />
                    )}
                    <aside>
                        <a href="/">Services</a>
                        <a href="/">Clients</a>
                        <a href="/">News</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </aside>

                    <div onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                        {isBurgerOpen ? (
                            <img src={close} alt="close menu" />
                        ) : (
                            <img src={burger} alt="burger" />
                        )}
                    </div>
                </InnerNavBar>

            </NavBarContainer>
            <BurgerMenu className={isBurgerOpen && 'open'}>
                <a href="/">Services</a>
                <a href="/">Clients</a>
                <a href="/">News</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </BurgerMenu>
        </>
    )
}
