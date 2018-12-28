import React, {Component} from 'react';
import classNames from 'classnames'


import NavigationLinks from './navigation/navigation-links'

class Modal extends Component{
    constructor(props){
        super(props);
        this.state={
            animateSideNav: 'w3-animate-left',
        }
    }

    componentDidMount(){
        // // https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
        // let dropdown = document.getElementsByClassName("dropdown-btn");
        //
        // let i;
        // for (i = 0; i < dropdown.length; i++) {
        //     dropdown[i].addEventListener("click", function() {
        //         this.classList.toggle("active");
        //         let dropdownContent = this.nextElementSibling;
        //         if (dropdownContent.style.display === "block") {
        //             dropdownContent.style.display = "none";
        //         } else {
        //             dropdownContent.style.display = "block";
        //         }
        //     });
        // }
    }

    render(){
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

export default Modal