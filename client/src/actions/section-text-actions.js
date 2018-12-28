import {GET_TEXT_008_A_BACKEND_ROUTES_PART_I, GET_TEXT_008_B_BACKEND_ROUTES_PART_II_LOGIN, GET_TEXT_008_C_BACKEND_ROUTES_PART_III_ISSUE_TOKEN, GET_TEXT_008_D_BACKEND_ROUTES_PART_IV_ISSUE_TOKEN} from './types'


import {section_text} from '.././reducers/text/section-text';



export const get_text_008a_backend_routes_part_I = (text)=>{
    text = section_text.text_008A_backend_routes_part_I;
    return{
        type: GET_TEXT_008_A_BACKEND_ROUTES_PART_I,
        payload: text
    }
};

export const get_text_008b_backend_routes_part_II_login = (text)=>{
    text = section_text.text_008B_backend_routes_part_II_Login;
    return{
        type: GET_TEXT_008_B_BACKEND_ROUTES_PART_II_LOGIN,
        payload: text
    }
};

export const get_text_008c_backend_routes_part_III_issue_token = (text)=>{
    text = section_text.text_008c_backend_routes_part_III_Token;
    return{
        type: GET_TEXT_008_C_BACKEND_ROUTES_PART_III_ISSUE_TOKEN,
        payload: text
    }
};

export const get_text_008d_backend_routes_part_IV_passport = (text)=>{

    text = section_text.text_008d_backend_routes_part_IV_Passport;

    return{
        type: GET_TEXT_008_D_BACKEND_ROUTES_PART_IV_ISSUE_TOKEN,
        payload: text
    }
};




