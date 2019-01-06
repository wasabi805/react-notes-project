import React from 'react';
import Media from "react-media";
import {NavBarContainer, HamburgerContainer, LogoContainer, NavBarHeaderLinkContainer} from '../styled-components/navigation/HeaderNav'
import NavHeaderLinks from './nav-header-links';


const NavbarHeader = (props)=>{
    return(
        <NavBarContainer>


                <Media query="(max-width: 1024px)" render={()=>
                    <HamburgerContainer >
                        <i className={props.hamburgerIcon} onClick={props.handleBurgerClick} />
                    </HamburgerContainer>
                } >
                </Media>

                <LogoContainer>
                    <h1> |  CODING BUDDY        | </h1>
                </LogoContainer>
                <Media query="(min-width: 1025px)" render={()=> <NavBarHeaderLinkContainer><NavHeaderLinks/></NavBarHeaderLinkContainer>}/>


        </NavBarContainer>

    )
};

export default NavbarHeader