import {GET_SIDE_NAV_SECTION_LINKS, GET_MOBILE_NAV_SECTIONS, GET_CURRENT_MOBILE_SECTIONS_ON_CLICK} from "../actions/types";


export const initialState={


    nav_buttons : [
        // value for path will go to  <Link to=''> for react-router
        {id: 'home',
            name: 'Home',
            sections: [],
            direct_path: '/',
        },

        {id: 'javascriptSection',
            class: ' javascriptSection',
            name: 'JavaScript',
            section_index_path: 'javascript-practice',


            sections: [
                {id: "you-tube-player", title: 'Youtube Player', path: 'youtube-player-test-01'},
                {id: "for-each", title: 'ForEach()', path: 'someOtherRoute_4'},
                {id: "object-key", title: 'Object.keys()', path: 'someOtherRoute_5'}
            ]
        },

        {id: 'html-css-sass',
            class: ' html_css',
            name: 'HTML | CSS',
            section_index_path: '',

            sections: [
                {id:"" ,title: 'Sass Variables', path: 'somePath_6'},
                {id:"", title: 'FlexBox', path: 'someOtherRoute_7'}
            ]
        },

        {id: 'fulltstack' ,
            class: " fulltstack",
            name: 'Full Stack',
            section_index_path: '',
            sections: [
                {id:"",title: 'Install React', path: 'install-react'} ,
                {id:"",title: 'Install React Router', path: 'install-react-router-dom'},
                {id:"",title: 'Set Up Back End', path: 'set-up-backend-server'},
                {id:"",title: 'mLab DB Setup', path: 'set-up-mLab-db'},
                {id:"",title: 'Connect Db to Server', path: 'connect-db-to-server'},
                {id:"",title: 'Express Routing', path: 'routing-files-with-express-router'},
                {id:"",title: 'Create DB Model', path: 'create-db-model'},
                {id:"",title: 'Postman', path: 'postman'},
                {id:"",title: 'Backend Routes Part I', path: '008-a-create-user-reg-routes'},
                {id:"",title: 'Backend Routes Part II', path: '008-b-create-user-login'},
                {id:"",title: 'Backend Routes Part III', path: '008-c-something-else'},
                {id:"",title: 'Backend Routes Part IV', path: '008-d-implement-passport'},
                {id:"",title: 'Set Up Redux', path: 'set-up-redux'},
                {id:"",title: 'React/Redux Actions', path: 'redux-react-actions'},
                ]
        },

        {id: 'ajax-and-api' ,
            class: ' ajax-and-api',
            name: "AJAX & API's",
            section_index_path: '',
            sections: [
                {title: 'Basic API call', path: 'basic-api-call'},
            ]
        },

        {id: 'animations',
            class: ' animations',
            name: 'Animations',
            section_index_path: '',
            sections: [
                {title: 'transform', path: 'somePath_10'},
                {title: 'transition', path: 'someOtherRoute_11'}
            ]
        },

        {id: 'node-js',
            class: ' node-js',
            name: 'Node JS',
            section_index_path: '',
            sections: [
                {title: 'Install Node', path: 'somePath_12'},
                {title: 'Env Setup', path: 'someOtherRoute_13'}
            ]
        },

        {id: 'gimp',
            class: ' gimp',
            name: 'GIMP',
            section_index_path: '',
            sections: [
                {title: 'Install Gimp', path: 'somePath_14'},
                {title: 'Create-Alpha-Layer', path: 'someOtherRoute_15'}
            ]
        },
    ],

    nav_sections: {},
    display_mobile_sections_on_click : {},


};

export default (state=initialState, action) =>{

    switch(action.type){


        case GET_SIDE_NAV_SECTION_LINKS:
            return(
                state.nav_sections = action.payload,
                    {...state}
            );

        case GET_MOBILE_NAV_SECTIONS:
            return(
                state.nav_sections = action.payload,
                {...state}
            );

        case GET_CURRENT_MOBILE_SECTIONS_ON_CLICK:
            console.log(action.payload);
            return(
                state.get_current_mobile_sections_on_click = action.payload
            );

        default:
            return state
    }
};