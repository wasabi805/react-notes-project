import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import {get_mobile_nav_sections, get_current_mobile_sections_on_click} from '../../../actions/navigation-actions'

import {BackArrow, MobileNavOverlayStyledComp, MobileNavOverlayContainer, } from "../../styled-components/navigation/MobileNav";


import MobileNavMenu01 from './moble-nav-menu-01'
import MobileNavMenu02 from './moble-nav-menu-02'


class MainMobileNavOverlay extends Component{
    constructor(props){
        super(props);

        this.state={
            //Redux Data
            main_nav_buttons: [],                 //    gets all btn data (PARENT)
            nav_section_btns : [],                //        get all section btn   (CHILD)
            set_current_nav_sections: [],       //          instance of current section btn data
        }
    }

    componentWillMount(){
        this.props.get_initial_mobile_nav_state(); //   call Redux, --> get initial datat

        this.setState({
            main_nav_buttons : this.props.get_nav_items.nav_buttons,
            nav_section_btns: this.props.get_nav_items.nav_sections,
        })

    }

    //--------------HANDLES OVERLAY ANIMATION-----------------------------

    //Gets section btn data from reducer
    getNavSections = (btn_id)=>{
        this.props.get_current_mobile_sections_on_click(btn_id);
        this.setNavSections()
    };
    //sets section btn data from redux after click
    setNavSections = ()=>{
       this.setState({
           set_current_nav_sections: this.props.get_nav_items.get_current_mobile_sections_on_click
       })
    };

    //--------------SET SECTIONS DATA onClick-----------------------------
    handlePrimaryButtonClick=(e)=>{
        e.preventDefault();
        this.getNavSections(e.target.id);
        this.props.shift_left()

    };

    handleSectionButtonClick =()=>{
        this.props.closeNav();
        this.props.un_blur_bg()
    };

    render(){
        return(
            <MobileNavOverlayStyledComp>
                <MobileNavOverlayContainer >

                    {/*BACK ARROW*/}
                    <ThemeProvider theme={this.props.showArrow}>
                        <BackArrow>
                            <i className="fa fa-arrow-alt-circle-left" onClick={this.props.handle_arrow_click}/>
                        </BackArrow>
                    </ThemeProvider>

                    {/*MOBILE MENU ONE*/}
                    <ThemeProvider theme={this.props.MobileOverlay1Position}>
                        <MobileNavMenu01 main_nav_buttons={this.state.main_nav_buttons} handlePrimaryButtonClick={this.handlePrimaryButtonClick}/>
                    </ThemeProvider>

                    {/*MOBILE MENU TWO*/}
                    <ThemeProvider theme={this.props.MobileOverlay2Position}>
                        <MobileNavMenu02 set_current_nav_sections={this.state.set_current_nav_sections} handleSectionButtonClick={this.handleSectionButtonClick} />
                    </ThemeProvider>

                </MobileNavOverlayContainer>
            </MobileNavOverlayStyledComp>
        )
    }
}
const mapStateToProps = (state,)=>({
    get_nav_items : state.navigation,
});

const mapDispatchToProps = {
    get_current_mobile_sections_on_click: get_current_mobile_sections_on_click,
    get_initial_mobile_nav_state: get_mobile_nav_sections,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMobileNavOverlay)
