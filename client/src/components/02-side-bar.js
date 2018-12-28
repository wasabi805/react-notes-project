import React, {Component} from 'react';
import NavigationLinks from './navigation/navigation-links'

import {SideNavUL} from './styled-components/navigation/SideNav'

class SideBarNav extends Component{

    constructor(props){
        super(props);
        this.state={
            testState: 'This is just a test'
        }
    }

    checkRef = (e) =>{
        console.log(e.target.ref);
    };

    render(){
        return(

            <SideNavUL>
                <NavigationLinks handleNavLinkCloseModal={this.props.handleNavLinkCloseModal} handleDropDown={this.props.handleDropDown}/>
            </SideNavUL>
        )
    }
};

export default SideBarNav