import {
    //API SECTIONS
    GET_TEXT_001_AJAX_AND_API_BASIC_API_CALLS,

    //FULL STACK SECTIONS
    GET_TEXT_008_A_BACKEND_ROUTES_PART_I,
    GET_TEXT_008_B_BACKEND_ROUTES_PART_II_LOGIN,
    GET_TEXT_008_C_BACKEND_ROUTES_PART_III_ISSUE_TOKEN,
    GET_TEXT_008_D_BACKEND_ROUTES_PART_IV_ISSUE_TOKEN,

} from '../actions/types'

export const initialState={
    section_text : {
        highlight: 'highlight-text text-',
    },
};

export default (state=initialState, action)=>{
    switch(action.type){
        //API SECTION TEXT
        case GET_TEXT_001_AJAX_AND_API_BASIC_API_CALLS:
            state.section_text =  action.payload;
            return state;


        //FULL STACK SECTION TEXT
        case GET_TEXT_008_A_BACKEND_ROUTES_PART_I:
                state.section_text =  action.payload;
            return state;

        case GET_TEXT_008_B_BACKEND_ROUTES_PART_II_LOGIN:
            state.section_text =  action.payload;
            return state;

        case GET_TEXT_008_C_BACKEND_ROUTES_PART_III_ISSUE_TOKEN:
            state.section_text = action.payload;
            return state;

        case GET_TEXT_008_D_BACKEND_ROUTES_PART_IV_ISSUE_TOKEN:
            state.section_text = action.payload;
            return state;

        default:
            return state
    }

};