import {GET_003_CREATE_BACKEND_SERVER, GET_IMAGES_004_MLAB_SETUP, GET_IMAGES_005_CONNECT_DB_TO_SERVER, GET_IMAGES_007_CREATE_DB_MODEL,  GET_IMAGES_008_POSTMAN,
    GET_IMAGES_008_A_BACKEND_ROUTES_PART_I,
    GET_IMAGES_008_B_BACKEND_ROUTES_PART_II,
    GET_IMAGES_008_C_BACKEND_ROUTES_PART_III,
    GET_IMAGES_008_D_BACKEND_ROUTES_PART_IV,
    GET_IMAGES_009_SETUP_REDUX,
    GET_IMAGES_010_REDUX_REACT_ACTIONS,
    //    API SECTIONS
    GET_IMAGES_001_AJAX_AND_API_BASIC_API_CALLS,

} from '../actions/types'

export const initialState ={

    images_001_install_react: {
        reactLogo:{
            key: 'react-logo',
            img_properties: {
                src: 'https://i.ibb.co/cYtyChL/react-logo-png.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '25%',
                margin: '0 auto',
            },
        }
    },

    images_002_install_react_router: {
        nodeLogo:{
            key: 'react-logo',
            img_properties: {
                src: 'https://image.ibb.co/he35fq/nodejs-logo.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '24em',
                margin: '0 auto',
            },
        },

        reactRouterLogo:{
            key: 'react-logo',
            img_properties: {
                src: 'https://i.ibb.co/0ZvPLYd/react-router-dom-log-nobg-zpsempqdo78.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '25%',
                margin: '0 auto',
            },
        }
    },

    images_003_create_backend:{
        nodeLogo:{
            key: 'node-logo',
            img_properties: {
                src: 'https://image.ibb.co/he35fq/nodejs-logo.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '60%',
                margin: '0 auto',
            },
        }

    },

    images_004_m_lab_setup: {
        mLabLogo: {
            key: 'mLab-logo',
            img_properties: {
                src: 'https://image.ibb.co/kjnTAL/m-Lab-logo-600x600-zpsnoigufcw.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '50%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {
                    display: 'none',
                },

                layer_02: {
                    display: 'none',
                },

                step_layer_01:{
                    display: 'none',
                },

                step_layer_02:{
                    display: 'none',
                },
            }
        },

        mLabSignUp: {
            key: 'mLab-sign-up',

            img_properties: {
                src: 'https://image.ibb.co/gmpPN0/m-lab-signup.png',
                width: '98%',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '100%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {

                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '0',
                    paddingLeft: '74%',
                    paddingRight: '3%',
                    marginTop: '4%',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },
                layer_02: {
                    display: 'none',
                },

                step_layer_01:{
                    display: 'none',
                },

                step_layer_02:{
                    display: 'none',
                },
            }
        },

        mLabCreateNewDb: {
            key: 'mLab-create-new-db',
            img_properties: {
                src: 'https://image.ibb.co/bOh3uf/create-new-db-01.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '98%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '0',
                    paddingLeft: '80%',
                    paddingRight: '2%',
                    marginTop: '10%',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    display: 'none',
                },

                step_layer_01:{
                    display: 'none',
                },

                step_layer_02:{
                    display: 'none',
                },

            }

        },

        mLabSelectEnv: {
            key: 'mLab-select-env',
            img_properties: {
                src: 'https://image.ibb.co/dxZ2LL/amazon-we-services-02.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '98%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '0',
                    paddingLeft: '0%',
                    paddingRight: '74%',
                    marginTop: '13%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '-7%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '13%',
                    marginTop: '13%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }

            }
        },

        mLabSelectRegion:{
            key : 'mlab-select-region',
            img_properties: {
                src: 'https://i.ibb.co/BnGnsBg/m-Lab-select-region.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '0',
                    paddingLeft: '0%',
                    paddingRight: '74%',
                    marginTop: '13%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '-7%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '13%',
                    marginTop: '13%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }
            }
        },

        mLabSelectDbName:{
            key : 'mLab-select-db-name',
            img_properties: {
                src: 'https://i.ibb.co/dPqd56j/m-Lab-select-db-name.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    marginTop: '-43%',
                    paddingLeft: '35%',
                    paddingRight: '34%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '-7%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '50%',
                    marginTop: '13%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }

            }
        },

        mLabConfirmDb:{
            key : 'mLab-confirm-db',
            img_properties: {
                src: 'https://i.ibb.co/vx3fCD0/m-Lab-confirm-db.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    marginTop: '-43%',
                    paddingLeft: '35%',
                    paddingRight: '34%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '-7%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: '',
                    display: 'none',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '50%',
                    marginTop: '13%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }

            }
        },

        mLabDbCreateSuccess:{
            key : 'mLab-db-create-success',
            img_properties: {
                src: 'https://i.ibb.co/JnZqpyX/mlab-db-create-success.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-37%',
                    paddingLeft: '6%',
                    paddingRight: '69%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    display: 'none',
                    position: '',
                    width: '',
                    bottom: '',
                    paddingLeft: '',
                    paddingRight: '',
                    zIndex: '',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    display: 'none',
                    position: '',
                    width: '',
                    top: '',
                    paddingLeft: '',
                    marginTop: '',
                    zIndex: '',
                },

                step_layer_02:{
                    display: 'none',
                    position: '',
                    width: '',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '',
                }
            }
        },

        mLabCreateUser:{
            key : 'mLab-create-a-user',
            img_properties: {
                src: 'https://i.ibb.co/GQKRdCv/m-Lab-create-a-user.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-22%',
                    paddingLeft: '21%',
                    paddingRight: '62%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '15%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '26%',
                    marginTop: '33%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }
            }
        },

        mLabSubmitCreateUserInfo:{
            key : 'mLab-submit-create-user-info',
            img_properties: {
                src: 'https://i.ibb.co/gM40vyt/m-Lab-submit-create-user-info.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    display: 'none',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-22%',
                    paddingLeft: '21%',
                    paddingRight: '62%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    bottom: '15%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '26%',
                    marginTop: '33%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }
            }
        },

        mLabCreateUserSuccess:{
            key : 'mLab-create-user-success',
            img_properties: {
                src: 'https://i.ibb.co/kc4SR9F/m-Lab-create-user-success.png',
            },

            container_properties:{

            },

            img_layers:{
                layer_01: {
                    display: 'none',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-22%',
                    paddingLeft: '21%',
                    paddingRight: '62%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                layer_02: {
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    bottom: '15%',
                    paddingLeft: '73%',
                    paddingRight: '7%',
                    zIndex: '10',

                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

                step_layer_01:{
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    top: '-21px',
                    paddingLeft: '26%',
                    marginTop: '33%',
                    zIndex: '10',
                },

                step_layer_02:{
                    position: 'absolute',
                    display: 'none',
                    width: '100%',
                    bottom: '9%',
                    paddingLeft: '80%',
                    zIndex: '10',
                }
            }
        },


    },

    images_005_connect_db_to_server: {
        hero_container_props:{
            textAlign: 'center',
        },

        mongoDbLogo: {
            key: 'mongo-db-logo',

            img_properties: {
                src: 'https://i.ibb.co/tYqCBr7/mongodb-png-comparison-mongodb-and-sql-400-zpsetcu51rx.png',
            },

            container_properties:{
                position: 'relative',
                display: 'inline-block',
                width: '25%',
                margin: '0 auto',
            },
        },

        nodeLogo: {
            key: 'node-logo',

            img_properties: {
                src: 'https://i.ibb.co/KLnGS4P/nodejs-logo-zpsd7xdtpyn.png',
            },

            container_properties:{
                position: 'relative',
                display: 'inline-block',
                width: '30%',
                margin: '0 auto',
            },
        },

        expressLogo: {
            key: 'express-logo',

            img_properties: {
                src: 'https://i.ibb.co/ZzvzK7p/Expressjs-zps8zfumlzp.png',
            },

            container_properties:{
                position: 'relative',
                display: 'inline-block',
                width: '30%',
                margin: '0 auto',
            },
        },

        createKeysFile:{
            key: 'create-keys-file',
            img_properties:{
                src: 'https://i.ibb.co/1dCYKMx/connect-db-to-server-create-config-keys-js.png'
            },
            container_properties:{
                position: 'relative',
                display: 'inline-block',
                width: '30%',
                margin: '0 auto',
            },
        }

    },

    images_006_routing_with_express: {
        fibers: {
            key: 'fibers',

            img_properties: {
                src: 'https://i.ibb.co/yX0G947/fiberoptics-zpscw0yi1su.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },
        }
    },

    images_007_create_db_model : {
        database_cylinder: {
            key: 'database-cylinder',
            img_properties: {
                src: 'https://i.ibb.co/s2CMs06/mongodb-backups-zpswc0tlkgj.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '35%',
                margin: '0 auto',
            },
        },

        create_user_js: {
            key: 'create-user-js',
            img_properties: {
                src: 'https://i.ibb.co/1dCYKMx/connect-db-to-server-create-config-keys-js.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '48%',
                margin: '0 auto',
            },
        },

        //
    },

    images_008_postman: {
        postmanLogo: {
            key: 'postman-logo',
            img_properties: {
                src: 'https://image.ibb.co/iwJo0q/postman-logo.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '35%',
                margin: '0 auto',
            },
        },

        postMan_download_postman:{
            key : 'postman-download-postman',
            img_properties: {
                src: 'https://i.ibb.co/nzqRwyC/postman-download-postman.png',
            },

            container_properties:{
                width: '98%',
            },

            img_layers:{
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-28%',
                    paddingLeft: '0%',
                    paddingRight: '81%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },


            }
        },

        postMan_select_os:{
            key : 'postman-select-os',
            img_properties: {
                src: 'https://i.ibb.co/QcTB5Jf/postman-select-os.png',
            },

            container_properties:{
                width: '98%',
            },

            img_layers:{
                layer_01: {
                    display: 'none',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '',
                    paddingLeft: '',
                    paddingRight: '',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },

            }
        },

        postman_close_out_intro_menu:{
            key : 'postman-select-os',
            img_properties: {
                src: 'https://i.ibb.co/FzwcCzN/postman-close-out-intro-menu.png',
            },

            container_properties:{
                width: '98%',
            },

            img_layers:{
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-55%',
                    paddingLeft: '82%',
                    paddingRight: '9%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },
            },

        },

        postman_test_users_route:{
            key : 'postman-test-users-route',
            img_properties: {
                src: 'https://i.ibb.co/XDgHVhH/postman-test-users-route.png',
            },

            container_properties:{
                width: '98%',
            },

            img_layers:{
                layer_01: {},
                layer_02: {},

                step_layer_01:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-42%',
                    marginLeft: '26%',
                    marginRight: '70%',

                    zIndex: '10',
                },

                step_layer_02:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-42%',
                    marginLeft: '38%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },

                step_layer_03:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-42%',
                    marginLeft: '82%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                }
            }
        },

        postman_verify_users_test_route_01 :{
            key : 'postman-verify-users-test-route_01',
            img_properties: {
                src: 'https://i.ibb.co/ZcXKyjb/postman-verify-users-test-route-01.png'
            },

            container_properties:{
                width: '98%',
            },

            img_layers:{
                layer_01: {},
                layer_02: {},

                step_layer_01:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-18%',
                    marginLeft: '35%',
                    marginRight: '70%',

                    zIndex: '10',
                },

                step_layer_02:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-27%',
                    marginLeft: '73%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },
            }
        },

        postman_verify_users_test_route_02 :{
            key : 'postman-verify-users-test-route',
            img_properties: {
                src: 'https://i.ibb.co/X2GL0X9/postman-verify-users-test-route-02.png'
            },

            container_properties:{
                width: '98%',
            },

            img_layers:{
                layer_01: {

                },
                layer_02: {
                },
            }
        },
    },

    images_008_a_create_users_reg_route:{
        seeUsersJs: {
            key: 'see-users-js',

            img_properties: {
                src: 'https://i.ibb.co/59Vg1kG/create-user-reg-routes-see-users-js.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },
        },

        set_up_postman:{
            key: 'postman-01',
            img_properties:{
                src: 'https://i.ibb.co/dfSr9p0/backend-routes-p-I-postman-set-up-01.png'
            },


            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {},
                layer_02: {},

                step_layer_01:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-44%',
                    marginLeft: '23%',
                    marginRight: '77%',

                    zIndex: '10',
                },

                step_layer_02:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-41%',
                    marginLeft: '37%',
                    marginRight: "",
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },

                step_layer_03:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-37.5%',
                    marginLeft: '22%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },

                step_layer_04:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-30%',
                    marginLeft: '34%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },

            }
        },

        enter_form_data_postman:{
            key: 'postman-02',
            img_properties:{
                src: 'https://i.ibb.co/SdzyJYn/backend-routes-p-I-postman-enter-form-data.png'
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

        user_added_postman:{
            key: 'postman-03',
            img_properties:{
                src: 'https://i.ibb.co/mRd3xM3/backend-routes-p-I-postman-submit-form-data.png'
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        }
    },

    images_008_b_set_up_user_login:{
        postman_set_up_test_login_route: {
            key: 'postman-set-up-test-login-route',

            img_properties: {
                src: 'https://i.ibb.co/1m3M905/set-up-bcrypt-login.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

        postman_success_login_route: {
            key: 'postman-success-login-route',

            img_properties: {
                src: 'https://i.ibb.co/bmy6Nx6/success-bcrypt-login.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
                step_layer_01:{
                    display: 'none'
                }
            }
        },



    },

    images_008_c_set_up_json_web_token:{

        hero_img_token:{
            key: 'hero-img-token',
            img_properties: {
                src: 'https://i.ibb.co/VB82BJ7/computer-1294045-640.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '75%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},

            }
        },


        seeUsersJs: {
            key: 'see-users-js',

            img_properties: {
                src: 'https://i.ibb.co/59Vg1kG/create-user-reg-routes-see-users-js.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

        verifyTokenPostman:{
            key: 'verify-token-postman',
            img_properties:{
                src: 'https://i.ibb.co/f42Fb6N/verify-token-postman.png'
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},

                step_layer_01:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-48%',
                    marginLeft: '30%',
                    marginRight: '70%',

                    zIndex: '10',
                },

                step_layer_02:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-42%',
                    marginLeft: '39%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },

                step_layer_03:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-31%',
                    marginLeft: '35%',
                    marginRight: '70%',

                    zIndex: '10',
                },

                step_layer_04:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-31%',
                    marginLeft: '61%',
                    bottom: '',
                    paddingLeft: '',
                    zIndex: '10',
                },

                step_layer_05:{
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-45%',
                    marginLeft: '81%',
                    marginRight: '70%',

                    zIndex: '10',
                },

            }

        }
        //next img here

    },

    images_008_d_implement_passport:{

        hero_img_passport:{
            key: 'hero-img-passport',
            img_properties: {
                src: 'https://i.ibb.co/GMnhk4Z/50462e189228a.jpg',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '75%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},

            }
        },

        passport_config_file: {
            key: 'passport-config-file',

            img_properties: {
                src: 'https://i.ibb.co/1r6dytz/passport-config-file.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

        postman_verify_auth_obtain_token: {
            key: 'postman-verify-auth_obtain_token',

            img_properties: {
                src: 'https://i.ibb.co/vVzFwxF/obtain-token.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-19%',
                    paddingLeft: '40%',
                    paddingRight: '26%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                    transform: 'scale(2.2 , 0.5)',
                },
            }
        },

        postman_verify_auth_add_token_to_header: {
            key: 'postman-verify-auth-add-token-to-header',

            img_properties: {
                src: 'https://i.ibb.co/vZLGTg0/get-req-with-header.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-43%',
                    paddingLeft: '36%',
                    paddingRight: '28%',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                    transform: 'scale(2.2 , 0.5)',
                },
            }
        },

        postman_verify_auth_check_terminal: {
            key: 'postman-verify-auth-check-terminal',

            img_properties: {
                src: 'https://i.ibb.co/vqLXwk3/success-with-header-terminal.png',
            },

            container_properties:{
                position: 'relative',
                display: 'block',
                width: '95%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

    },

    images_009_set_up_redux: {
        reduxLogo:{
            key: 'react-redux-logo',
            img_properties: {
                src: 'https://image.ibb.co/h1rtV0/Redux-no-bg.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '52%',
                margin: '0 auto',
            },
        }
    },

    images_010_react_redux_actions: {
        reactReduxlogo: {
            key: 'react-redux-logo',
            img_properties: {
                src: 'https://image.ibb.co/jgp3FA/react-and-redux-no-bg.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '60%',
                margin: '0 auto',
            },
        },

        createType:{
            key: 'create-types-js',
            img_properties: {
                src: 'https://image.ibb.co/kyv7xq/create-types.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '100%',
                bgColor: 'purple',
            }
        }

    },

    //API  and AJAX SECTIONS

    images_001_ajax_and_api_basic_api_call:{

        hero_img_api_logo:{
            key: 'hero-img-api_logo',
            img_properties: {
                src: 'https://i.ibb.co/pwngvbz/api-icon-9.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '58%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},

            }
        },

        create_server_js:{
            key: 'create-server-js',
            img_properties: {
                src: 'https://i.ibb.co/F31hXXr/create-server-js.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '75%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},

            }
        },

        create_users_js:{
            key: 'create-users-js',
            img_properties: {
                src: 'https://i.ibb.co/3BwQtVk/create-users-js.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '75%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},

            }
        },

        verify_ajax_call_01:{
            key: 'verify-ajax-call_01',
            img_properties: {
                src: 'https://i.ibb.co/tDd9nx8/verify-ajax-call-01.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '98%',
                margin: '0 auto',
            },

            img_layers:{
                layer_01: {
                    display: 'inline-block',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '-20%',
                    paddingLeft: '44%',
                    paddingRight: '0',
                    transform: 'scale(1 , 0.2)',
                    src: 'https://image.ibb.co/jGJZN0/pen-circle-png-1.png',
                },
            }

        },

        verify_ajax_call_02:{
            key: 'verify-ajax-call_02',
            img_properties: {
                src: 'https://i.ibb.co/bJd7VNq/verify-ajax-call-02.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '98%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

        verify_ajax_call_03:{
            key: 'verify-ajax-call_03',
            img_properties: {
                src: 'https://i.ibb.co/sQn9LRF/verify-ajax-call-03.png',
            },
            container_properties:{
                position: 'relative',
                display: 'block',
                width: '98%',
                margin: '0 auto',
            },

            img_layers: {
                layer_01: {},
                layer_02: {},
            }
        },

    },

    section_images: {}

};

export default (state=initialState, action) =>{

    switch(action.type){

        case GET_003_CREATE_BACKEND_SERVER:
            return action.payload;

        case GET_IMAGES_004_MLAB_SETUP:
            return action.payload;

        case GET_IMAGES_005_CONNECT_DB_TO_SERVER:
            return action.payload;

        case GET_IMAGES_007_CREATE_DB_MODEL:
            return action.payload;

        case GET_IMAGES_008_POSTMAN:
            return action.payload;

        case GET_IMAGES_008_A_BACKEND_ROUTES_PART_I:
            return action.payload;

        case GET_IMAGES_008_B_BACKEND_ROUTES_PART_II:
            return action.payload;

        case GET_IMAGES_008_C_BACKEND_ROUTES_PART_III:
            return action.payload;

        case GET_IMAGES_008_D_BACKEND_ROUTES_PART_IV:
            return action.payload;

        case GET_IMAGES_009_SETUP_REDUX:
            return action.payload;

        case GET_IMAGES_010_REDUX_REACT_ACTIONS:
            return  action.payload

        //API SECTION
        case GET_IMAGES_001_AJAX_AND_API_BASIC_API_CALLS:
            return  action.payload

        default:
            return state
    }
};