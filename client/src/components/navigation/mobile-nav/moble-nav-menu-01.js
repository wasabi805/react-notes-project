import React from 'react';
import {MobileNavOverlayContent1Styled, MobileNavOverlayButtonContainer} from "../../styled-components/navigation/MobileNav"

const MobileNavMenu_01 = (props)=>{

    return(
        <MobileNavOverlayContent1Styled>
            <MobileNavOverlayButtonContainer>
                {props.main_nav_buttons.map((mainNav)=>{
                    return <button id={mainNav.id} key={mainNav.id} onClick={props.handlePrimaryButtonClick}  >{mainNav.name}</button>
                })}
            </MobileNavOverlayButtonContainer>
        </MobileNavOverlayContent1Styled>
    )
};

export default MobileNavMenu_01