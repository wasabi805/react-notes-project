import{ GET_SIDE_NAV_SECTION_LINKS, GET_MOBILE_NAV_SECTIONS, GET_CURRENT_MOBILE_SECTIONS_ON_CLICK , } from './types';
import {initialState} from '../reducers/navigation-reducer';


export const get_side_nav_sections =()=>{
    let allSections = initialState.nav_buttons;

    return{
        type: GET_SIDE_NAV_SECTION_LINKS,
        payload: allSections
    }
};










//MOBILE NAV ACTIONS
//----------------START-------------------------------------------------

export const get_mobile_nav_sections =()=>{
    let allSections = initialState.nav_buttons;
    let sections=[];

    allSections.forEach((btn)=>{
       btn.sections.map((sec)=>{
           let section={};
           section.id = btn.id
           section.name= btn.name
           section.title = sec.title;
           section.path = sec.path

           sections.push(section)
       });
    });

    return{
        type: GET_MOBILE_NAV_SECTIONS,
        payload: sections
    }
};

//GET_CURRENT_MOBILE_SECTIONS_ON_CLICK
//: gets the sections when main button is clicked
export const get_current_mobile_sections_on_click =(click_id)=>{
    let sectionsArray = initialState.nav_sections;
    let sections =[];

    //initialize action
    let create_section_attrs =(btn)=>{
        btn = click_id;

        let returnMatch = sectionsArray.filter(match=> match.id ===btn).map((show)=>{
            let section ={};
                      section.id = show.id;
                      section.name = show.name;
                      section.title = show.title;
                      section.path = show.path;
                      sections.push(section)
        });
    };
    create_section_attrs(); //run action

    return{
        type: GET_CURRENT_MOBILE_SECTIONS_ON_CLICK,
        payload: sections
    }
};

//--------------------END---------------------------------------------