import {
    TEST_ACTION,
    GET_001_INSTALL_REACT,
    GET_002_INSTALL_REACT_ROUTER,
    GET_003_CREATE_BACKEND_SERVER,
    GET_005_CONNECT_DB_TO_SERVER,
    GET_006_ROUTING_WITH_EXPRESS_ROUTER,
    GET_008_A_BACKEND_ROUTES_PART_I,
    GET_008_B_BACKEND_ROUTES_PART_II_LOGIN,
    GET_008_C_BACKEND_ROUTES_PART_III_TOKEN,
    GET_008_D_BACKEND_ROUTES_PART_IV_PASSPORT,

    GET_007__CREATE_DB_MODEL,
    GET_009_SET_UP_REDUX,
    GET_010_REDUX_REACT_ACTIONS,

} from '../actions/types'

const initialState={
    code:{}
};

export default (state=initialState, action) =>{
    switch(action.type){

        case GET_001_INSTALL_REACT:
            return state.code = action.payload;

        case GET_002_INSTALL_REACT_ROUTER:
            return state.code = action.payload;

        case GET_003_CREATE_BACKEND_SERVER:
            return state.code= action.payload;

        case GET_005_CONNECT_DB_TO_SERVER:
            return state.code = action.payload;

        case GET_006_ROUTING_WITH_EXPRESS_ROUTER:
            return state.code = action.payload;

        case GET_007__CREATE_DB_MODEL:
            return state.code = action.payload;

        case GET_008_A_BACKEND_ROUTES_PART_I:
            return state.code = action.payload;

        case GET_008_B_BACKEND_ROUTES_PART_II_LOGIN:
            return state.code = action.payload;

        case GET_008_C_BACKEND_ROUTES_PART_III_TOKEN:
            return state.code = action.payload;

        case GET_008_D_BACKEND_ROUTES_PART_IV_PASSPORT:
            return state.code = action.payload;



        case GET_009_SET_UP_REDUX:
            return state.code = action.payload;

        case GET_010_REDUX_REACT_ACTIONS:
            return state.code = action.payload;


        case TEST_ACTION:
            console.log('i ran');

            // return {...state, code : [action.payload]
            // };
            return state.code = action.payload;

        default:
            return state
    }
};