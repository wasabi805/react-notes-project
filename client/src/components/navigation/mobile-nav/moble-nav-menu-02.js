import React from 'react';
import {MobileNavOverlayContent2, MobileNavOverlayButtonContainer} from "../../styled-components/navigation/MobileNav"
import {Link} from 'react-router-dom'

const MobileNavMenu_02 = (props)=>{
    return(
        <MobileNavOverlayContent2>
            <MobileNavOverlayButtonContainer>
                {props.set_current_nav_sections.map((sec, index)=>{
                    return(
                        <button key={index} onClick={props.handleSectionButtonClick}>
                            <Link to={sec.path}>{sec.title}</Link>
                        </button>)
                })}
            </MobileNavOverlayButtonContainer>
        </MobileNavOverlayContent2>
    )
};

export default MobileNavMenu_02