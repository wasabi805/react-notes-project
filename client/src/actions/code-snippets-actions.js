import {
    GET_001_INSTALL_REACT,
    GET_002_INSTALL_REACT_ROUTER,
    GET_003_CREATE_BACKEND_SERVER,
    GET_005_CONNECT_DB_TO_SERVER,
    GET_006_ROUTING_WITH_EXPRESS_ROUTER,
    GET_007__CREATE_DB_MODEL,

    GET_008_A_BACKEND_ROUTES_PART_I,
    GET_008_B_BACKEND_ROUTES_PART_II_LOGIN,
    GET_008_C_BACKEND_ROUTES_PART_III_TOKEN,
    GET_008_D_BACKEND_ROUTES_PART_IV_PASSPORT,

    GET_009_SET_UP_REDUX,
    GET_010_REDUX_REACT_ACTIONS

} from './types'


import {
    GlobalInstallReactSnippet, CreateProjectSnippet, StartReactSnippet,
    InstallReactRouterDomSnippet, InstallAJVSnippet, BuildTestCompsSnippet, ImportReactRouterDomCompsSnippet,RouterWrapSnippet, RouteExactPathSnippet , MakeNavbarSnippet, ImportNavbarSnippet,
    NpmInitBackend, InstallAllBackEndDeps, InstallNodemon, CreateServerJS, AddServerPort, AddServerScripts,
    RequireMongoose, CreateKeysFile, ConnectToMongoose, EditGitIgnoreFile,
    BackendModelRoutes, UseRoutes, IncludeExpressRouter, TestUsersRouterGetRoute, TestProfilesRouterGetRoute, TestPostsRouterGetRoute,
    InitializeSchemaVar, CreateUserModel,
    InstallReduxDeps, ImportProviderAndWrap, PassStoreToProvider, DefineStoreVar, ImportCreateStoreAndMiddleWare,
    CreateStoreJS, ImportThunkAndDefineMiddleware, SetApplyMiddleware,
    ImportCombineReducers, ImportAuthReducer,ExportCombineReducers,
    ReducerInitState, CreateReducer, SetUpSwitchCase,
    UsersJsRecap_01, RequireBodyParser, CreateUserRegRoutePartOne, CreateUserRegRoutePartTwo, CreateUserRegRoutePartThree, CreateUserRegRoutePartFour,
    RequireJWT, SetUpLoginRoute,
    BringInJWT, AddJwtTokenToLogin,
    BringInPassport, PassportMiddleware, RequirePassportConfigFile, SetUpPassportConfigJsPartOne, SetUpPassportConfigJsPartTwo, SetUpPassportConfigJsPartThree, BringInPassportToUserJs, CreateRestrictedRoute, SetUpPassportConfigJsPartFour,
    ImportRootReducer, ReviewOfStoreJs, ImportCompose, SetComposeWithApplyMiddleware, IncludeReduxDevTools,
    CreateType, AnatomyOfReduxAction, AnatomyOfTheReducer, AddCaseToReducer,
    ImportConnectAndAction, PreviousExportOfComp, ConnectActionToComp, CreateRegisterUserCompInitState, CreateFormSubmitNameAndValue, CreateFormOnSubmitAndOnChange, CreateOnInputChangeAction, CreateOnSubmitCompAction, CreateMapStateToProps, CreateMapDispatchToProps, RevisitAnatomyOfReduxAction, RevisitImportConnectAndAction,
    KeyValueFromReducer, ConnectMapStateToPropsAndMapDispatchToProps, DeconstructPropsAndState, CreateCaseInReducer,
    ConditionalRenderInitState, ImportPropTypes, RegisterPropTypes, ReduxReactActionsSummary,


} from '../components/code-snipets/01-install-react-code-snippets'

export const get_001_InstallReact = (code)=>{
    code = [GlobalInstallReactSnippet, CreateProjectSnippet, StartReactSnippet];
    return{
        type: GET_001_INSTALL_REACT,
        payload : code,
    }
};

export const get_002_install_react_router_snippets = (code)=>{
    code = [InstallReactRouterDomSnippet, InstallAJVSnippet, BuildTestCompsSnippet, ImportReactRouterDomCompsSnippet,RouterWrapSnippet, RouteExactPathSnippet , MakeNavbarSnippet, ImportNavbarSnippet ];
    return{
        type: GET_002_INSTALL_REACT_ROUTER,
        payload : code,
    }
};

export const get_images_003_create_backend = (code)=>{
    code = [ NpmInitBackend, InstallAllBackEndDeps, InstallNodemon, CreateServerJS, AddServerPort, AddServerScripts ];
    return{
        type: GET_003_CREATE_BACKEND_SERVER,
        payload : code,
    }
};

//TODO: make action for  mlabDBSetUP

export const get_005_connect_db_to_server_snippets = (code)=>{
    code = [RequireMongoose, CreateKeysFile, ConnectToMongoose, EditGitIgnoreFile];
    return{
        type: GET_005_CONNECT_DB_TO_SERVER,
        payload : code,
    }
};

export const get_006_routing_with_express_router_snippets = (code)=>{
    code = [BackendModelRoutes, UseRoutes, IncludeExpressRouter, TestUsersRouterGetRoute, TestProfilesRouterGetRoute, TestPostsRouterGetRoute];
    return{
        type: GET_006_ROUTING_WITH_EXPRESS_ROUTER,
        payload : code,
    }
};

export const get_007_create_db_model_snippets = (code)=>{
    code = [InitializeSchemaVar, CreateUserModel];
    return{
        type: GET_007__CREATE_DB_MODEL,
        payload : code,
    }
};

export const get_008_a_backend_routes_part_I = (inline_snippet, code)=>{
    code = [UsersJsRecap_01, RequireBodyParser, CreateUserRegRoutePartOne, CreateUserRegRoutePartTwo,  CreateUserRegRoutePartThree, CreateUserRegRoutePartFour];
    inline_snippet =[RequireBodyParser]
    return{
        type: GET_008_A_BACKEND_ROUTES_PART_I,
        payload : code,
    }
};

export const get_008_b_backend_routes_part_II_login = (code)=>{
    code = [RequireJWT, SetUpLoginRoute];
    return{
        type: GET_008_B_BACKEND_ROUTES_PART_II_LOGIN,
        payload : code,
    }
};

export const get_008_c_backend_routes_part_III_token = (code, inline_snippet)=>{
    code = [BringInJWT, AddJwtTokenToLogin];
    inline_snippet=[SetUpLoginRoute];

    return{
        type: GET_008_C_BACKEND_ROUTES_PART_III_TOKEN,
        payload : [code, inline_snippet]
    }
};

export const get_008_d_backend_routes_part_IV_passport =(code, inline_snippet)=>{
    code = [BringInPassport, PassportMiddleware, RequirePassportConfigFile, SetUpPassportConfigJsPartOne, SetUpPassportConfigJsPartTwo, SetUpPassportConfigJsPartThree, BringInPassportToUserJs, CreateRestrictedRoute, SetUpPassportConfigJsPartFour];
    inline_snippet=[AddJwtTokenToLogin];

    return{
        type: GET_008_D_BACKEND_ROUTES_PART_IV_PASSPORT,
        payload : [code, inline_snippet]
    }
};


export const get_009_set_up_redux_snippets =(code)=>{
    code = [InstallReduxDeps, ImportProviderAndWrap, PassStoreToProvider, DefineStoreVar, ImportCreateStoreAndMiddleWare,
        CreateStoreJS, ImportThunkAndDefineMiddleware, SetApplyMiddleware,
        ImportCombineReducers, ImportAuthReducer, ExportCombineReducers,
        ReducerInitState, CreateReducer, SetUpSwitchCase,
        ImportRootReducer, ReviewOfStoreJs, ImportCompose, SetComposeWithApplyMiddleware, IncludeReduxDevTools,
    ];
    return{
        type: GET_009_SET_UP_REDUX,
        payload: code,
    }
};

export const get_010_redux_react_actions_snippets =(code)=>{
    code = [CreateType, AnatomyOfReduxAction, AnatomyOfTheReducer, AddCaseToReducer,
        ImportConnectAndAction, PreviousExportOfComp, ConnectActionToComp, CreateRegisterUserCompInitState, CreateFormSubmitNameAndValue, CreateFormOnSubmitAndOnChange, CreateOnInputChangeAction, CreateOnSubmitCompAction, CreateMapStateToProps, CreateMapDispatchToProps, RevisitAnatomyOfReduxAction, RevisitImportConnectAndAction,
        KeyValueFromReducer, ConnectMapStateToPropsAndMapDispatchToProps, DeconstructPropsAndState, CreateCaseInReducer,
        ConditionalRenderInitState, ImportPropTypes, RegisterPropTypes, ReduxReactActionsSummary, ];

    return{
        type: GET_010_REDUX_REACT_ACTIONS,
        payload: code,
    }
};










