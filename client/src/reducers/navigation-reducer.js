import {GET_MOBILE_NAV_SECTIONS, GET_CURRENT_MOBILE_SECTIONS_ON_CLICK} from "../actions/types";


export const initialState={


    nav_buttons : [
        // value for path will go to  <Link to=''> for react-router
        {id: 'home',
            name: 'Home',
            sections: [
                {title: 'Install Home', path: '/somePath_1'},
                {title: 'Build a Tiny Homer', path: '/someOtherRoute_2'}
            ]
        },

        {id: 'javascript',
            name: 'JavaScript',
            sections: [
                {title: 'Higher Order Functions', path: '/somePath_3'},
                {title: 'ForEach()', path: '/someOtherRoute_4'},
                {title: 'SomeOtherJs', path: '/someOtherRoute_5'}
            ]
        },

        {id: 'html-css-sass',
            name: 'HTML | CSS | Sass',
            sections: [
                {title: 'Sass Variables', path: '/somePath_6'},
                {title: 'FlexBox', path: '/someOtherRoute_7'}
            ]
        },

        {id: 'full-stack' ,
            name: 'Full Stack',
            sections: [
                {title: 'Install React', path: '/install-react'},
                {title: 'Install React Router', path: '/install-react-router-dom'},
                {title: 'Set Up Back End', path: '/set-up-backend-server'},
                {title: 'mLab DB Setup', path: '/set-up-mLab-db'},
                {title: 'Connect Db to Server', path: '/connect-db-to-server'},
                {title: 'Express Routing', path: '/routing-files-with-express-router'},
                {title: 'Create DB Model', path: '/create-db-model'},
                {title: 'Postman', path: '/postman'},
                {title: 'Backend Routes Part I', path: '/008-a-create-user-reg-routes'},
                {title: 'Backend Routes Part II', path: '/008-b-create-user-login'},
                {title: 'Backend Routes Part III', path: '/008-c-something-else'},
                {title: 'Backend Routes Part IV', path: '/008-d-implement-passport'},
                {title: 'Set Up Redux', path: '/set-up-redux'},
                {title: 'React/Redux Actions', path: '/redux-react-actions'},
                ]
        },

        {id: 'animations',
            name: 'Animations',
            sections: [
                {title: 'transform', path: '/somePath_10'},
                {title: 'transition', path: '/someOtherRoute_11'}
            ]
        },

        {id: 'node-js',
            name: 'Node JS',
            sections: [
                {title: 'Install Node', path: '/somePath_12'},
                {title: 'Env Setup', path: '/someOtherRoute_13'}
            ]
        },

        {id: 'gimp',
            name: 'GIMP',
            sections: [
                {title: 'Install Gimp', path: '/somePath_14'},
                {title: 'Create-Alpha-Layer', path: '/someOtherRoute_15'}
            ]
        },
    ],

    nav_sections: {},
    display_mobile_sections_on_click : {},


};

export default (state=initialState, action) =>{

    switch(action.type){

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