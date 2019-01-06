import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import NavigationLinks from './navigation/navigation-links'

import {SideNavUL} from './styled-components/navigation/SideNav'
import {get_side_nav_sections} from '../actions/navigation-actions';

class SideBarNav extends Component{

    constructor(props){
        super(props);
        this.props.get_side_nav_sections();

        this.state={
            nav_buttons : this.props.set_side_nav_links.nav_buttons,
        }
    }

    checkRef = (e) =>{
        console.log(e.target.ref);
    };

    render(){

        let {nav_buttons} = this.state;
        // console.log(nav_buttons, 'new side nav');
        console.log(Array.isArray(this.props.set_side_nav_links.nav_buttons,'this.props.set_side_nav_links.nav_buttons,'));

        return(
            //THE ORIGINAL
            <SideNavUL>
                <NavigationLinks nav_buttons={nav_buttons} handleDropDown={this.props.handleDropDown}/>
            </SideNavUL>
        )
    }
};

const mapDispatchToProps ={
    get_side_nav_sections,
};

const mapStateToProps=(state)=>({
    set_side_nav_links : state.navigation
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarNav)