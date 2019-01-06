import {
    GET_IMAGES_001_INSTALL_REACT, GET_IMAGES_002_INSTALL_REACT_ROUTER, GET_IMAGES_003_CREATE_BACKEND,
    GET_IMAGES_004_MLAB_SETUP, GET_IMAGES_005_CONNECT_DB_TO_SERVER, GET_IMAGES_006_ROUTING_EXPRESS_ROUTER,
    GET_IMAGES_007_CREATE_DB_MODEL,
    GET_IMAGES_008_POSTMAN, GET_IMAGES_008_A_BACKEND_ROUTES_PART_I,
    GET_IMAGES_008_C_BACKEND_ROUTES_PART_III,
    GET_IMAGES_008_D_BACKEND_ROUTES_PART_IV,
    GET_IMAGES_009_SETUP_REDUX,
    GET_IMAGES_010_REDUX_REACT_ACTIONS, GET_IMAGES_008_B_BACKEND_ROUTES_PART_II,

    //API SECTIONS
    GET_IMAGES_001_AJAX_AND_API_BASIC_API_CALLS,

} from './types'

import InitialState from '../reducers/images-reducer';

export const get_images_001_install_react =(images)=>{

    images = InitialState.images_001_install_react;
    return{
        type: GET_IMAGES_001_INSTALL_REACT,
        payload: images
    }
};

export const get_images_002_install_react_router =(images)=>{

    images = InitialState.images_002_install_react_router;
    return{
        type: GET_IMAGES_002_INSTALL_REACT_ROUTER,
        payload: images
    }
};

export const get_images_003_create_backend =(images)=>{

    images = InitialState.images_003_create_backend;
    return{
        type: GET_IMAGES_003_CREATE_BACKEND,
        payload: images
    }
};

export const get_images_004_m_lab_setup =(images)=>{

    images = InitialState.images_004_m_lab_setup;
    console.log(images, 'hey!');


    return{
        type: GET_IMAGES_004_MLAB_SETUP,
        payload: images
    }
};

export const get_images_005_connect_db_to_server =(images)=>{

    images = InitialState.images_005_connect_db_to_server;
    return{
        type: GET_IMAGES_005_CONNECT_DB_TO_SERVER,
        payload: images
    }
};

export const get_images_006_routing_with_express =(images)=>{

    images = InitialState.images_006_routing_with_express;
    return{
        type: GET_IMAGES_006_ROUTING_EXPRESS_ROUTER,
        payload: images
    }
};

export const get_images_007_create_db_model =(images)=>{

    images = InitialState.images_007_create_db_model;
    return{
        type: GET_IMAGES_007_CREATE_DB_MODEL,
        payload: images
    }
};

export const get_images_008_postman =(images)=>{

    images = InitialState.images_008_postman;
    return{
        type: GET_IMAGES_008_POSTMAN,
        payload: images
    }
};

export const get_images_008_a_backend_routes_part_I =(images)=>{

    images = InitialState.images_008_a_create_users_reg_route;
    return{
        type: GET_IMAGES_008_A_BACKEND_ROUTES_PART_I,
        payload: images
    }
};

export const get_images_008_b_backend_routes_part_II =(images)=>{

    images = InitialState.images_008_b_set_up_user_login;
    return{
        type: GET_IMAGES_008_B_BACKEND_ROUTES_PART_II,
        payload: images
    }
};

export const get_images_008_c_backend_routes_part_III =(images)=>{

    images = InitialState.images_008_c_set_up_json_web_token;
    return{
        type: GET_IMAGES_008_C_BACKEND_ROUTES_PART_III,
        payload: images
    }
};

export const get_images_008_d_backend_routes_part_IV =(images)=>{

    images = InitialState.images_008_d_implement_passport;
    return{
        type: GET_IMAGES_008_D_BACKEND_ROUTES_PART_IV,
        payload: images
    }
};

export const get_images_009_setup_redux =(images)=>{
    images = InitialState.images_009_set_up_redux;
    return{
        type: GET_IMAGES_009_SETUP_REDUX,
        payload: images
    }
};
export const get_images_010_redux_react_actions =(images)=>{
    images = InitialState.images_010_react_redux_actions;

    return{
        type: GET_IMAGES_010_REDUX_REACT_ACTIONS,
        payload: images
    }
};

//API SECTIONS

export const get_images_001_ajax_and_api_basic_api_calls =(images)=> {
    images = InitialState.images_001_ajax_and_api_basic_api_call;

    return {
        type: GET_IMAGES_001_AJAX_AND_API_BASIC_API_CALLS,
        payload: images
    }
};


