export const section_text = {

    text_008A_backend_routes_part_I: {

        find_user_email: [
            {list_item: '1.) Defined a variable "User" that is the User Model we created in earlier Section'},
            {list_item: "2.) Since this will be a form submit, we use .post() method from express.Router() : The .post() method takes a route handle as its first argument and a callback function when it hist the route."},
            {list_item: "3.) The callback includes a mongoose method of .findOne() which will search the database to see if the email the user tries to register with exists in the database."},
            {list_item: "4.) When the data from the reg form is sent as a post request via the form we'll create later, the data will get sent in the form of an object/ hash table"},
            {list_item: "5.) Since we just installed BodyParser, we can access the object as \"req.body\". To target a specific form field, we append \"req.body\" followed by a specific input on the form. The above example is for \".email\" ."},
        ],

        promises: {
            after_promise_a: "a.) the email didin't exist prior to the user entering it in the form which in this case, we'll continue registering the user with the email the sent to the post req",
            after_promise_b: "b.) the email already exists in the database which in this case, we'll send back an error to user and notify them to pick a different email."
        },

        bcrypt_breakdown: {
            highlight: 'highlight-text text-',

            color: {
                cyan: 'cyan',
                orange: 'orange',
                red: 'red',
                white: 'white',
                yellow: 'yellow',
                purple: 'purple',

            },

            term: {
                bcrypt: 'bcrypt.',
                genSalt: 'genSalt( )',
                err: 'err',
                salt: 'salt',
                hash: 'hash( )',
                newUser: 'newUser',
                password: '.password',
                if_: 'if',
                throw_error: 'throw err;',
                password_equals: '.password = ',
                save: '.save( )',
                then: '.then( )',
                user: 'user',
                catch: '.catch( )'
            },


            bcrypt_gen_salt: {
                start_text: ' use bcrypt which we required previously into the server.js file: append the .genSalt( ) method. The genSalt( ) method gets passed 2 arguments: ',
                list_item_01: '1.) The first arg is the number 10.',
                list_item_02: '2.) The second argument is a callback.'
            },

            err_and_salt: "pass an err arg and a salt arg : Later, we'll set up the arg err to return a msg back to the user in the event that that something prevents the password encryption. The salt arg is requireded for encryption and gets sent into this callback so that we can pass it to the hash( ) method in the next step...",

            hash: {
                start_text: "The hash( ) method provided by bcrypt takes three args:",
                list_items_01: " : the password key as newUser.password",
                list_items_02: " :  the salt mentiond from point b",
                list_items_03: " :  a callback. ",
                list_items_04: 'pass theses args into callback : ',
                render_cb: '( )=>{ }',
            },

            inside_hash: {
                start_text: "now that we've set up our hasing fucntion, let's examine how it works when the user submits a password:",
                list_items_01: "This simply states that if there is an error, throw an error and stop hashing.",
                list_items_02: "If there are no errors, the new value for newUser.password obj is set to a hashed/encrypted copy of the password the user submitted through the form.",
                list_items_03: "This simply saves the password value as the new encrypted password inside the the newUser obj",
            },

            inside_dot_then: {
                start_text: "Now that we've successfully created a newUser obj containing all the fields from register form completed by the user, we can verify the obj values. When using a promise, the return value of the previous function .then( ) is appended to is stored in an arg that we can pass to the callback inside the .then( ) method. Keep in mind that the results of newUser.save() includes all the data from the form submit including the hashed password. ",
                list_items_01: "We'll run a promise by appending the .then( ) method to newUser.save(). The .then( ) method gets one argument in the form of a callback that gets passed in :",
                render_cb: '( )=>',
                list_items_02_a: "In our example, we've defined the arg containing the newUser obj data as ",
                list_items_02_b: ". We can set up this callback so that it simply renders the newUser obj by having the callback return",
                res_dot_json: "res.json(user)",
                list_items_03: "Append ,catch() to .then(). Similar to what we did for .then(), pass a callback into the .catch. This call back will simply console log the error"

            },

            lets_recap: [
                {list_item: "1.) findOne() method runs on the User Schema and searches the User model to see if the email is already in the Schema (see Find User submitted email)"},
                {list_item: "2.) if the email the user submits is found in the User model, the responce from the server will notify the user that the email already exists in the User Schema thus, preventing them saving the form data into the User database. (see Promises)"},
                {list_item: "3.) if the email the user provided in the form submit, does not exist in the User schema, a new user object is created an poultaed with values from the form submit. (see promises part II)"},
                {list_item: "4.) registration process continues by encrypting the user's password with bcrypt (see Brcypt)"},
                {list_item: "5.) if there's an error during encryption, an error is thrown"},
                {list_item: "6.) if encyption is succesfull, then the newUser object is saves the encrypted password along with the form data"},
                {list_item: "7.) after the successful addition of the encrypted password to the newUser object, we use .then( ) provided from the javascript promise method to render the newUser object"},
                {list_item: "8.) Finally, if there's an error, we'll just console log the error"},
            ],

            postman_initial_set_up: [
                {list_item: "1.) Method: Click the dropdown and select 'POST' for the method then, in the form field located directly to thr right, enter the URI to register route of our server. "},
                {list_item: "2.) Body: Select body so that Postman is aware that this post request will dealwith with parsing a form."},
                {list_item: "3.) Form Type: Select the radio button for 'x-www-form-urlencoded' "},
                {list_item: "4.)Key : Under the 'Key' header, type in the key names from the form"},
            ],
        }
    },

    text_008B_backend_routes_part_II_Login: {
        highlight: 'highlight-text text-',

        color: {
            cyan: 'cyan',
            orange: 'orange',
            red: 'red',
            white: 'white',
            yellow: 'yellow',
            purple: 'purple',

        },

        intro: {
            content: {
                previously: "From last section creating our register route, upon success of the user creating a valid registration through the form submit, we left off with adding the the form data into our database and simply console logged the user's data. This section will focus on creating a token and passing it back to the user so that they can login into our site.",
                create_json_web_token: 'When the user email and password are verified, we\'ll send the user back a token . The presence of token acts like a "key" that allows or restricts access a user or groups of users on your site. This section will cover how to use JSON webtoken module to issue tokens to users. Once the user is issued a token, we\'ll set up our app so that the token is sent along with any requests the users makes to our server. We can then control the level of access based on that token.',
                validate_token_passport_jwt: "We'll need these two modules to validate the token sent with the requests and extract the users information from the token.",
                set_up_user_login_route: "Since we'll send back a token to user, it makes sense in this section to set up the user's login route",

            }
        },

        bring_in_jwt: {
            content: {
                recall_dep_install: "Recall that we've alredy installed Passport and JSONwebtoken. If you haven't done so, make sure to install both modules via terminal . ",
                require_jwt_and_passport: "Once you're sure that you have both installed, bring in jwt into the users.js file:"
            },

            linksTo: {
                install_passport_and_jwt: 'http://localhost:3000/set-up-backend-server#install-backend-dependencies'
            }
        },

        edit_users_js: [
            {key: 'router-dot-post-login',
                term:[{name:'router.post( )', color: 'white'},],
                name_01: 'router.post( )',
                color_01: 'white',

                text_01: 'receives two arguments: a route handle & a callback ',

                sub_list : [
                    {key: 'handle-login', letter: 'a.)', sub_term: [{name: 'handle: ',  color:'white', text: "The handle chosen for this example is '/login'"} , ]},
                    {key: 'callback-login', letter: 'b.)', sub_term: [{name: 'callback: ', color:'white', text: 'Pass in the req and res arguments: all our logic for user authentication will occur inside this callback. '},], },
                    ]
            },

            {key: 'const-email-login',
                term:[{name:'const', color: 'white'}, {name:' email', color: 'cyan'},{name:' = req.body.email', color: 'white'},],
                text_01: 'variable containing the form submitted email extracted with bodyParser.',
                sub_list : []
            },

            {key: 'const-password-login',
                term:[{name:'const', color: 'white'}, {name:' password', color: 'pink'},{name:' = req.body.password', color: 'white'},],
                text_01: 'variable containing the form submitted password extracted with bodyParser.',
                sub_list : []
            },

            {key: 'user-find-one-email-login',
                term:[{name:'User.findOne({ email : ', color: 'white'}, {name:' email', color: 'cyan'},{name:' })', color: 'white'},],
                text_01: 'Use the .findOne() method from mongoose to search mongoDb if the user submitted email from the form exists in the database..',
                sub_list : []
            },

            {key: 'find-user-promise-login',
                term:[{name:'.then( )', color: 'red'},],
                text_01: "Takes one argument: a callback . This callback's primary job is to either notify the user there was an error regarding their email  OR if their email exists in our database then we can then continue to check verify their password matches what we have when they registered.  ",
                sub_list : [
                    {key: 'find-user-promise-cb-p1-login', letter: 'c.)',
                    sub_term: [
                        {name: '(', color:'white'} ,
                        {name: 'user', color: 'blue'},
                        {name: ')=> { } ', color: 'white' , text: " : Because .then( ) is directly chained to User.findOne({ email : email}), the result of from step 4.) gets passed into .then( ) . "},
                    ]},

                    {key: 'find-user-promise-cb-p2-login', letter: 'd.)',
                        sub_term: [
                            {name: 'user', color: 'blue' , text: " : Since .then( ) is part of a Javascript promise, when using a promise, you are provided with an argument and a callback. I've named the argument 'user' since it contains all the user data the user registered with. "},
                        ]},

                    {key: 'find-user-promise-cb-p3-login', letter: 'e.)',
                        sub_term: [
                            {name: '()=>{ }', color: 'white' , text: " : As for the callback, we'll pass it the user arg and extract the user's data later to perform authentication.  "},
                        ]},

                ]
            },

            {key: 'if-not-user-login',
                term:[{name:'if(', color: 'white'}, {name:'!', color: 'orange'}, {name:'user', color: 'blue'},{name:'){...}', color: 'white'},],
                name_01: 'router.post( )',
                color_01: 'white',

                text_01: "Simply, if User.findOne(email: email) failed to find the email provided by the user from the form submit, we'll send back an object containing an error msg.",

                sub_list : []
            },

            {key: 'bcrypt-compare-login',
                term:[{name:'bcrypt', color: 'white'}, {name:'.compare(', color: 'lime'}, {name:'password', color: 'pink'}, {name:', ', color: 'white'}, {name:'user', color: 'blue'}, {name:'.password', color: 'white'}, {name:') ', color: 'lime'}],
                text_01: "If user is true, meaning that the email submitted by the user does exist in the database, we'll continue by checking the password provided in the login form against the the hashed password in our database.  ",
                sub_list : [
                    {key: 'find-user-promise-cb-p1-login', letter: 'f.)',
                        sub_term: [
                            {name:'brcrypt', color:'white'} ,
                            {name:'.compare( )', color: 'lime', text: ' : brcypt has a method called "compare( )" which receives two arguments:   '},
                        ]},

                    {key: 'find-user-promise-cb-p2-login', letter: 'g.)',
                        sub_term: [
                            {name: 'password', color: 'pink' , text: " : The password from the login form as mentioned in step 3.) . "},
                        ]},

                    {key: 'find-user-promise-cb-p3-login', letter: 'h.)',
                        sub_term: [
                            {name:'user', color: 'blue'},
                            {name:'.password', color: 'white' , text: " : The object containing the user's data from the database as mentioned in step 6d.)  "},
                        ]},

                    {key: 'find-user-promise-cb-p3-login', letter: 'i.)',
                        sub_term: [

                            {name:'.', color: 'white' , text: " : By passing both passwords into bcrypt.compare( ), the method will return either true, they matched of false, they don't match . See ref"},
                        ],
                        refs: [{url: 'https://www.npmjs.com/package/bcrypt#to-check-a-password'}]
                    }]
            },

            {key: 'bcrypt-promise-login',
                term:[{name:'.then(', color: 'magenta'}, {name:'isMatch', color: 'moccasin'}, {name:'=>{ }', color: 'white'}, {name:')', color: 'magenta'}],
                text_01: "This callback directly follows bcrypt.compare(password, user.password ).  ",
                sub_list : [
                    {key: 'bcrypt-promise-isMatch-login', letter: 'j.)',
                        sub_term: [
                            {name:'isMatch', color: 'moccasin', text:" : The argument provided from the promise that gets passed into the call back. This argument will either be true or false and is derived from step 7.)"  },
                        ]},

                    {key: 'bcrypt-if-check-isMatch-login', letter: 'k.)',
                        sub_term: [
                            {name: 'if(', color: 'white'},
                            {name: 'isMatch', color: 'moccasin'},
                            {name: ' =>{...}', color: 'white', text: " : The logic provided within the code block of this if statement will either send back an object success or error message. "},
                        ]
                    },
                ]
            },

            {key: 'bcrypt-return-success-msg-login',
                term:[{name:'res.json({', color: 'white'}, {name:'msg', color: 'yellow'}, {name:':', color: 'white'}, {name:"'Success, pw matches ...})'", color: 'white'}],
                text_01: "Return a message notifying the user their email and password combination they sent from the login form matches in our database. ",
                sub_list : [

                    {key: 'bcrypt-if-check-isMatch-login', letter: 'k.)',
                        sub_term: [
                            {name: 'msg', color: 'yellow', text : " : This key was created inside this if statement: It's important to remember the name of this key because we'll later need this key for form validations.  "},
                        ]
                    },
                ]
            },

            {key: 'bcrypt-return-error-msg-login',
                term:[{name:'res.json({', color: 'white'}, {name:'password', color: 'yellow'}, {name:':', color: 'white'}, {name:"'Password is incorrect.})'", color: 'white'}],
                text_01: "Return a message notifying the user an error occurred during password validation . ",
                sub_list : [

                    {key: 'bcrypt-if-check-isMatch-login', letter: 'k.)',
                        sub_term: [
                            {name: 'password', color: 'yellow', text : " : This key was created inside this if statement: It's important to remember the name of this key because we'll later need this key for form validations.  "},
                        ]
                    },
                ]
            },

        ]
    },

    text_008c_backend_routes_part_III_Token:{
        highlight: 'highlight-text text-',

        issue_token: [
            {key: 'isMatch-jwt-token',
                term:[{name:'if(', color: 'white'}, {name:'isMatch', color: 'moccasin'}, {name:'){...}', color: 'white'},],
                // name_01: 'router.post( )',
                color_01: 'white',

                text_01: "We're still working in the if statement from the previous section: The following terms reside within this if statement.",

                sub_list : [

                ]
            },

            {key: 'const-payload-jwt-token',
                term:[{name:'const', color: 'white'}, {name:' payload', color: 'pink'}, {name:' = {}', color: 'white'},],
                // name_01: 'router.post( )',
                color_01: 'white',

                text_01: "Create an object containing unique user data associated with the token.",

                sub_list : [
                    {key: 'payload-user-id', letter: 'a.)', sub_term: [{name: 'id:',  color:'white'} , {name: 'user',  color:'blue'}, {name: '.id',  color:'white', text: ": Set a key of id with a value equal to the user id in the database."}]},
                    {key: 'payload-user-name', letter: 'b.)', sub_term: [{name: 'name:',  color:'white'} , {name: 'user',  color:'blue'}, {name: '.name',  color:'white', text: ": Set a key of name with a value equal to the user name in the database."}]},
                ]
            },

            {key: 'jwt-sign-jwt-token',
                term:[{name:'jwt', color: 'white'}, {name:'.sign()', color: 'purple'},],
                // name_01: 'router.post( )',
                color_01: 'white',

                text_01: "Use .sign( ) method that's provided from when we required 'jwt' : Four arguments will get passed into the .sign ( ) method: ",

                sub_list : [
                    {key: 'payload-dot-sign-jwt-token', letter: 'c.)', sub_term: [{name: 'payload:',  color:'pink' , text: " : The object we created in step 2.)"} ,]},
                    {key: 'keys-jwt-token', letter: 'd.)', sub_term: [{name: 'key:',  color:'cyan'} , {name: '.secretOrKey',  color:'white', text: " : "}, ]},
                    {key: 'expiresIn-jwt-token', letter: 'e.)', sub_term: [{name: '{expiresIn : 3600}:',  color:'white', text: " : "} ,  ]},
                    {key: 'callback-jwt-token', letter: 'f. )', sub_term: [{name: '(err ,',  color:'white',}, {name: 'token',  color:'yellow'} , {name: ')=>',  color:'white', text: " : Pass into .sign ( ) a callback with an 'err' and 'token' arguments into the callback "},]},
                    {key: 'token-jwt-token', letter: 'g.)', sub_term: [{name: 'res.json({token: ',  color:'white'} , {name:`"Bearer " `,  color:'lime'}, {name:"+" ,  color:'white'}, {name:"token" ,  color:'yellow'}, {name:")}" ,  color:'white', text: " : Inside the callbacks function block, we'll set up our server response to reply back with a string of Bearer which includes a white space: This string will have the token appended to it.  "}, ]},
                ]
            },
        ]
    },

    text_008d_backend_routes_part_IV_Passport:{
        highlight: 'highlight-text text-',

        jwt_strategy: [
            {key: 'jwt-strategy-module-exports',
                term:[{name:'module.exports = (', color: 'white'}, {name:'passport', color: 'cyan'}, {name:')=>{ ... }', color: 'white'},],

                text_01: "foo-bar",

                sub_list : [
                    {key: 'module-dot-exports', letter: 'a.)', sub_term: [{name: 'module.exports',  color:'white', text: ": stuff."}]},
                    {key: 'module-dot-exports-cb', letter: 'b.)', sub_term: [{name: '(',  color:'white'} , {name: 'passport',  color:'cyan'}, {name: ')=>{ ... } ',  color:'white', text: ": things."}]},
                ]
            },

            {key: 'jwt-strategy-passport-dot-use',
                term:[{name:'passport', color: 'cyan'}, {name:'.use(', color: 'white'}, {name:')', color: 'white', text: "hello"}, ],

                text_01: "Takes one method of new JwtStrategy as the only argument",

                sub_list : [
                ]
            },

            {key: 'jwt-strategy-new-jwt-strategy',
                term:[{name:'new ', color: 'orange-return'}, {name:'JwtStrategy( )', color: 'lime'}, ],

                text_01: " : Takes two arguments: ",

                sub_list : [
                    {key: 'new-jwt-strategy-opts', letter: 'c.)', sub_term: [{name: 'opts',  color:'hotpink', text: ": stuff."}]},
                    {key: 'new-jwt-strategy-cb', letter: 'd.)', sub_term: [{name: '(',  color:'white'} , {name: 'jwt_payload',  color:'purple'}, {name: ',',  color:'white',}, {name: 'done',  color:'moccasin',}, {name: ')=>{ ... }',  color:'white', text: ": things."}]},
                    {key: 'new-jwt-inside-cb', letter: ' Two arguments get passed into the callback passed into new JwtStrategy..',
                        sub_term: []
                    },
                    {key: 'new-jwt-jwt-payload', letter: 'e.)', sub_term: [{name: 'jwt_payload',  color:'purple', text: ": things n."}]},
                    {key: 'new-jwt-done', letter: 'f. )', sub_term: [{name: 'done',  color:'moccasin', text: ": more stuff."}]},
                ]
            },
        ],

        create_protected_route: [
            {key: 'create-protected-route',
                term:[{name:'router.get( )', color: 'white'},],

                text_01: " : Takes three arguments :  ",

                sub_list : [
                    {key: 'create-protected-route-handle', letter: 'a.)', sub_term: [{name: "'/current'",  color:'white', text: ": the name of the route handle that will authenticate when visited ."}]},
                    {key: 'create-protected-route-passport-dot-auth', letter: 'b.)', sub_term: [{name: 'passport',  color:'cyan'} , {name: '.authenticate( )',  color:'red' , text: " : Takes two arguments that I'll go over in step 2.)."},]},
                    {key: 'create-protected-route-cb', letter: 'c.)', sub_term: [{name: '( )=>{ ... }',  color:'white', text: " : Takes two arguments that I'll go over in step 3)."} , ]},
                ]
            },

            {key: 'create-protected-route-passport-dot-auth-args',
                term:[{name:'passport', color: 'cyan'}, {name:'.authenticate(', color: 'red'}, {name:"'jwt' , { session: false }", color: 'white'}, {name:')', color: 'red', text: "hello"}, ],

                text_01: "Takes two arguments : ",

                sub_list : [
                    {key: 'create-protected-route-passport-dot-auth-jwt', letter: 'd.)', sub_term: [{name: "'jwt'",  color:'white', text: " : the first arg passport.authenticate( ) expects to see is a string of the strategy name: We're using 'jwt' as our strategy. "} , ]},
                    {key: 'create-protected-route-passport-dot-auth-session-false', letter: 'e.)', sub_term: [{name: '{session : false }',  color:'white', text: " : This just simply means that our site will not use session to store the users' data."} , ]},
                ]
            },

            {key: 'create-protected-route-passport-dot-auth-cb',
                term:[{name:'(req, res)=>{ ... }', color: 'white'},  ],

                text_01: "Takes two arguments : ",

                sub_list : [
                    {key: 'create-protected-route-cb-req', letter: 'f.)', sub_term: [{name: "req & res",  color:'white', text: " : Standard arguments needed in callback that communicates with server. We'll later store auth tokens from the server ins the req objects when the user visits protected routes. "} , ]},
                    {key: 'create-protected-route-cb-msg', letter: 'g.)', sub_term: [{name: "res.json({ msg : 'Success, we were able to autheticate.' })",  color:'white', text: " : For now, we'll simply return a message if we pass authentication.  "} , ]},

                ]
            },

        ]
    }

};
