import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import {get_side_nav_sections} from '../actions/navigation-actions'



import NavigationLinks from './navigation/navigation-links'

class Modal extends Component{
    constructor(props){
        super(props);
        this.state={
            animateSideNav: 'w3-animate-left',
        }
    }

    render(){
        console.log(this.props, "SQUAURE ONE");

        return(
            <div id="id01" className="w3-modal " style={this.props.toggleNavModal}>
                {/*<nav className='modalNav w3-animate-left '>*/}
                <nav className={classNames(this.props.animateSideNav, 'modalNav') }>

                <div className="w3-button w3-card-4">
                   <NavigationLinks handleDropDown={this.props.handleDropDown} handleNavLinkCloseModal={this.props.handleNavLinkCloseModal} />
                </div>
                </nav>
            </div>
        )
    }
};

const mapDispatchToProps={
    get_side_nav_sections
};

const mapStateToProps=(state)=>({
    set_side_nav_links : state.navigation
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)