import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './assets/css/main.scss';
import {Provider} from 'react-redux'
import store from './store'
import {ThemeProvider} from 'styled-components'


import Media from "react-media";
import NavbarHeader from './components/navigation/nav-header'
// import {MobileNavOverlayStyledComp, MobileNavOverlayContent1Styled} from './components/styled-components/navigation/MobileNav'
import {Main, MainContent, BodyContainer} from './components/styled-components/common/Sections'
import MobileNavOverlay from './components/navigation/mobile-nav/main-mobile-nav-overlay'




import Modal from "./components/Modal"

import SideBarNav from './components/02-side-bar'

import Landing from "./components/section-components/000a-landing";
import JavaScriptSectionPlaceholder from "./components/section-components/javascript-section/javascript-placeholder"
import HTMLCssSassPlaceHolder from "./components/section-components/html-css-sass-section/html-css-sass-placeholder"
import InstallReact from './components/section-components/001-install-react';
import InstallReactRouterDon from './components/section-components/002-install-react-router-dom';
import SetUpCreateServer from './components/section-components/003-create-back-end-server'
import MLabSetUP from './components/section-components/004-mLab-set-up'
import ConnectDbToServer from './components/section-components/005-connect-db-to-server'
import RoutingWithExpress from './components/section-components/006-routing-files-with-express-router'
import CreateDbModel from './components/section-components/007-create-db-model'
import Postman from './components/section-components/008-postman'
import CreateUserRegRoutes from './components/section-components/008_a_create_user_reg_routes'
import CreateLogin from './components/section-components/008_b_login'
import SomeOtherRoute2 from './components/section-components/008_c_create_a_token'
import ImplementPassport from './components/section-components/008_d_passport'
import SetUpRedux from './components/section-components/009-set-up-redux'
import ReduxReactActions from './components/section-components/010-redux-react-actions'


// JavaScript Sections:
import JsSearchFilterMapRegExp from './components/section-components/javascript-section/001-js-search-with-filter-map-and-reg-exp'

//Node Section
import ApiPartOne from './components/section-components/node-section/001-api-part-one'

//GIMP Section
import GimpLinks from './components/section-components/GIMP-section/000-gimp-link'


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            toggleNavModal: {display: 'none'},
            ismodalVisible: false,
            slideBodyContent: {left: ''},
            animateSideNav: 'w3-animate-left',
            getDropDownId: '',

            // Mobile NavModal
            renderMobileNav: {height: '0px'},

            // showMobileNavBtns: {transform: 'translateX(0%)'},

            //Pass these into comps that will handle themes
            MobileOverlay1Position:{transform: 'translateX(0%)'},
            MobileOverlay2Position:{transform: 'translateX(80%)'},
            showArrow:{display: 'none'},

            //Blur Main bg when mobile nav is open
            blur_background : {filter: ''},

            zoom_background : {transform: 'scale(1.03)'}
        }
    }
    handleDropDown =(e)=>{
        e.preventDefault()
        console.log( 'id: ' ,e.target);
        this.openDropDown(e.target.id)
    };
    openDropDown =( dropdwnId )=>{
        // https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
        // console.log(dropBtnId, 'this should be a string');

        let dropdown = document.getElementsByClassName("dropdown-btn " + `${dropdwnId}`);
        // let dropdown = document.getElementsByClassName(dropBtnId);
        let i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }

    };
    handleNavModal =()=>{
        if(this.state.ismodalVisible === false && this.state.toggleNavModal.display === 'none'  ){
            this.setState({
                toggleNavModal: {display: 'block'},
                ismodalVisible: true,
                slideBodyContent: {left: '14em'}
            })
        }
        if(this.state.ismodalVisible === true && this.state.toggleNavModal.display === 'block'  ){
            this.setState({
                ismodalVisible: false,
                slideBodyContent: {left: ''}
            });
            // setTimeout(
            //     ()=>{
            //         alert("Hello");
            //         }, 3000
            // );
            this.setState({
                toggleNavModal: {display: 'none'},
            })
        }
    };

    resetMobileNav = ()=>{
        //reset transforms to stock
        //make arrow disapear
        this.setState({
            MobileOverlay1Position: {transform: 'translateX(0%)'},
            MobileOverlay2Position: {transform: 'translateX(0%)'},
            showArrow: {display: 'none'}
        })
    };


    toggleMobileNav = ()=>{

        let isOpen = this.state.renderMobileNav.height;

        console.log(isOpen, 'this.state.renderMobileNav');
        switch (isOpen){
            case '0px':
                window.scrollTo(0,0);
                this.blur_bg();
                this.zoom_bg_back();

                this.setState({
                    renderMobileNav : {height : '100%'},
                    MobileOverlay1Position: {transform: 'translateX(0%)'},
                    MobileOverlay2Position: {transform: 'translateX(100%)'},
                });
                break;

            case '100%':
                this.un_blur_bg();
                this.zoom_bg_front();

                this.setState({
                    renderMobileNav : {height : '0px'},
                });
                break;
        }
        return isOpen
    };

    shift_right=()=>{
        this.setState({
            MobileOverlay1Position: {transform: 'translateX(0%)'},
            MobileOverlay2Position: {transform: 'translateX(-100%)'},
            showArrow:{display: 'none'},
        })
    };

    shift_left=()=>{
        this.setState({
            MobileOverlay1Position: {transform: 'translateX(-99%)'},
            MobileOverlay2Position: {transform: 'translateX(0%)'},
            showArrow:{display: 'block'},
        })
    };

    handle_arrow_click=()=>{
        this.shift_right();

    };

    //blurs background when hamburger is clicked
    blur_bg=()=>{
        this.setState({
            blur_background : {filter: 'blur(2px)'},
        })
    };

    un_blur_bg =()=>{
        this.setState({
            blur_background : {filter: ''},
        })
    };

    zoom_bg_front =()=>{
        this.setState({
            zoom_background : {transform: 'scale(1.03)'}
        })
    };

    zoom_bg_back =()=>{
        this.setState({
            zoom_background : {transform: 'scale(1.00)'}
        })
    };


    closeNav=()=>{
        this.setState({
            renderMobileNav: {height: '0px'},
        })
    }
    ;


    //Pass this to the hamburger
    handleBurgerClick=(e)=>{

        this.toggleMobileNav(e);
        console.log('fire-hamburger',);

    };

    render() {

        return (
            <Provider store={store}>
                <Router>

                    <ThemeProvider theme={this.state.blur_background} >
                        <Main>
                            <Modal handleDropDown={this.handleDropDown} getDropDownId={this.state.getDropDownId} toggleNavModal={this.state.toggleNavModal} handleNavLinkCloseModal={this.handleNavLinkCloseModal} animateSideNav={this.state.animateSideNav}/>
                            <NavbarHeader hamburgerIcon='fa fa-bars' handleBurgerClick={this.handleBurgerClick} renderMobileNav={this.state.renderMobileNav} toggleMobileNav={this.toggleMobileNav}   />

                            <div className='side-nav-column'>
                                <Media query="(min-width: 1025px)">
                                    {matches => matches ? <SideBarNav handleNavLinkCloseModal={this.handleNavLinkCloseModal} handleDropDown={this.handleDropDown} />  : null}
                                </Media>
                            </div>

                            <ThemeProvider theme={this.state.renderMobileNav} >
                                {/*<MobileNavOverlay showArrow={this.state.showArrow} resetMobileNav={this.resetMobileNav}  MobileOverlay1Position={this.state.MobileOverlay1Position} slideMobileOverlay1={this.slideMobileOverlay1} MobileOverlay2Position={this.state.MobileOverlay2Position}  />*/}
                                <MobileNavOverlay

                                    showArrow={this.state.showArrow}
                                    renderMobileNav={this.state.renderMobileNav}
                                    MobileOverlay2Position={this.state.MobileOverlay2Position}
                                    MobileOverlay1Position={this.state.MobileOverlay1Position}
                                    shift_right={this.shift_right}
                                    shift_left={this.shift_left}
                                    handle_arrow_click={this.handle_arrow_click}
                                    toggleNavModal={this.state.toggleNavModal}
                                    closeNav={this.closeNav}
                                    un_blur_bg={this.un_blur_bg}

                                />
                            </ThemeProvider>

                            <ThemeProvider theme={this.state.zoom_background}>
                                <BodyContainer>
                                    {/*THE MAIN MOBILE-NAV-COMP*/}

                                        <MainContent>
                                            {/*<div className='body-content pl-0 '>*/}

                                            <Route exact path="/" render={()=> <Landing/>} />

                                            {/*JavaScriptSections*/}
                                            <Route path="/js-search-with-filter-map-and-reg-exp" render={() =>  <JsSearchFilterMapRegExp/>} />

                                            <Route exact path="/javascript-practice" render={()=> <JavaScriptSectionPlaceholder/>} />
                                            <Route exact path="/html-css-sass-tips-and-tricks" render={()=> <HTMLCssSassPlaceHolder/>} />
                                            <Route path="/install-react" render={() =>  <InstallReact/>} />

                                            {/*FullStackSections*/}
                                            <Route path="/install-react-router-dom" render={() =>  <InstallReactRouterDon/>} />
                                            <Route path="/set-up-backend-server" render={() =>  <SetUpCreateServer/>} />
                                            <Route path="/set-up-mLab-db" render={() =>  <MLabSetUP/>} />
                                            <Route path="/connect-db-to-server" render={() =>  <ConnectDbToServer/>} />
                                            <Route path="/routing-files-with-express-router" render={() =>  <RoutingWithExpress/>} />
                                            <Route path="/create-db-model" render={() =>  <CreateDbModel/>} />
                                            <Route path="/postman" render={() =>  <Postman/>} />
                                            <Route path="/008-a-create-user-reg-routes" render={()=> <CreateUserRegRoutes/> } />
                                            <Route path="/008-b-create-user-login" render={()=> <CreateLogin/> } />
                                            <Route path="/008-c-something-else" render={()=> <SomeOtherRoute2/> } />
                                            <Route path='/008-d-implement-passport' render={()=> <ImplementPassport/>} />
                                            <Route path="/set-up-redux" render={() =>  <SetUpRedux/>} />
                                            <Route path='/redux-react-actions' render={()=> <ReduxReactActions/>} />

                                            {/*NodeSections*/}
                                            <Route path="/api-part-one" render={() =>  <ApiPartOne/>} />

                                            {/*GIMPSections*/}
                                            <Route path='/gimp-links' render={()=> <GimpLinks/>}/>
                                            {/*</div>*/}
                                        </MainContent>


                                </BodyContainer>
                            </ThemeProvider>
                        </Main>
                    </ThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
