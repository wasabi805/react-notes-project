import React from 'react';
import Highlight from 'react-highlight'
// import {get_010_redux_react_actions_snippets} from "../../actions/code-snippets-actions";

//DOCUMENTATION : https://github.com/akiran/react-highlight

//Common: in-line React comps that get rendered to the DOM via JSX string interpolation.
export const  shortHighlight = {
    browserRouter: `<BrowserRouter/>`,
    router: `<Router/>`,
    route: `<Route/>`,
    link: `<Link/>`,
    Date: `Date()`,
    openBracket: '{',
    closeBracket: '}',
};

//used to prevent jsx interpolation in AddServerPort snippet
let portString =" `Server running on port ${port}` ";
let closeBracket = '}'

//used to prevent jsx interpolation in AddServerScripts snippet
let add_server_script_string= '{\n' +
    '    "name": "basics-react-redux",\n' +
    '    "version": "1.0.0",\n' +
    '    "description": "This package.json is for the SERVER/ BACKEND",\n' +
    '    "main": "server.js",\n' +
    '    "scripts": {\n' +
    '    "server": "node server.js",\n' +
    '    "start": "nodemon server.js"\n' +
    '}, ';
//used to prevent jsx interpolation in CreateKeysFile snippet



let create_keys_file_string= 'module.exports = {\n' +
    '    mongoURI : `mongodb://<yourMongoDbUserName>:<yourMongoDbPassword>@ds127293.mlab.com:27293/theNameofYourMongoDb`'

export const PlaceHolderTerminal = <Highlight id="place-holder-terminal" language="javascript" className='code-block-snippet terminal'>{`npm some script`}</Highlight>
export const PlaceHolderReact = <Highlight language="javascript" className='code-block-snippet ide'>
    {`
    import React, {Component} from 'react';
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <div className="main">
                    <Landing/>
                    <Services/>
                </div>
            );
        }
    }
    `}
</Highlight>;

//SECTION : AJAX and API
// @URL: /basic-api-call
export const InstallDepsBasicApiCall =
    <Highlight key='install-deps-basic-api-call-express-axios' language="javascript" className='code-block-snippet terminal'>
        {`npm i express axios`}
    </Highlight>;

export const InstallNodemonBasicApiCall =
    <Highlight key='install-deps-basic-api-call-nodemon' language="javascript" className='code-block-snippet terminal'>
        {`npm i -D --save-dev nodemon`}
    </Highlight>;

export const SetUpServerJs =
    <Highlight key='set-sup-server-js' language="javascript" className='code-block-snippet ide'>
        {`
        const express = require('express');
        const app = express();
        app.get('/', (req, res)=>{

        res.send('Hello, this is the 1st, server route')});

        app.use('/api/users', users);

        const port = 5000;
        app.listen(port, ()=>{
            console.log(${portString});
        });

        `}
    </Highlight>;
//Make this SetUpUsersJs01
export const SetUpUsersJs =
    <Highlight key='set-up-users-js-basic-api-call' language="javascript" className='code-block-snippet ide'>
        <span className='muted'>{`
        const express = require('express');
        const router = express.Router();
        const axios = require('axios');

        router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));`}</span>
        <span className='text-moccasin'>{`
        router`}</span><span className='text-cyan'>{`.get(`}</span>{`'/all-users' , (req , `}<span className='text-yellow'><i>{`res`}</i></span>{`)=>{ `}
        <span className='text-purple'>{`
            axios`}</span><span className='text-cyan'>{`.get(`}</span><span className='text-lime'>{`'https://jsonplaceholder.typicode.com/users'`}</span>{`,`}<span className='text-yellow'><i>{`res`}</i></span><span className='text-cyan'>{`)`}</span><span className='text-red'>{`.then(`}</span>
        <span className='text-orange'><i>{`
              user`}</i></span>{` =>{ `}
        {`
                console.log(`}<span className='text-orange'><i>{`user`}</i></span> {`, '***This is the response from the server****') ;
              }`}<span className='text-red'>{`)`}</span>{`.catch(err => console.log(err))}`}<span className='text-cyan'>{`)`}</span>{`;`}
        {`

        module.exports = [`}<span className='text-moccasin'>{`router`}</span> {`,`} <span className='text-purple'>{`axios`}</span>{`];
        `}

    </Highlight>;

export const SetUpUsersJs02 =
    <Highlight key='set-up-users-js-02-basic-api-call' language="javascript" className='code-block-snippet ide'>
        <span className='muted'>{`
        const express = require('express');
        const router = express.Router();
        const axios = require('axios');

        router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));`}</span>
        <span className='text-moccasin muted-2'>{`
        router`}</span><span className='text-cyan muted-2'>{`.get(`}</span><span className='muted-2'>{`'/all-users' , (req , `}</span><span className='text-yellow muted-2'><i>{`res`}</i></span><span className='muted-2'>{`)=>{ `}</span>
        <span className='text-purple muted-2'>{`
            axios`}</span><span className='text-cyan muted-2'>{`.get(`}</span><span className='text-lime muted-2'>{`'https://jsonplaceholder.typicode.com/users'`}</span>{`,`}<span className='text-yellow muted-2'><i>{`res`}</i></span><span className='text-cyan muted-2'>{`)`}</span><span className='text-red muted-2'>{`.then(`}</span>
        <span className='text-orange'><i>{`
              user`}</i></span>{` =>{ `}
        <span className='text-yellow'><i>{`
                res`}</i></span>{`.send(`}<span className='text-orange'><i>{`user`}</i></span>{`.data);`}
        <span className='muted-2'>{`
                console.log(`}</span><span className='text-orange muted-2'><i>{`user`}</i></span> <span className='muted-2'>{`, '***This is the response from the server****') ;`}</span>
        <span className='text-white'>{`
              }`}</span><span className='text-red muted-2'>{`)`}</span><span className='muted-2'>{`.catch(err => console.log(err))}`}</span><span className='text-cyan muted-2'>{`)`}</span><span className='muted-2'>{`;`}</span>

        <span className='muted-2'>{`

        module.exports = [`}</span><span className='text-moccasin muted-2'>{`router`}</span> {`,`} <span className='text-purple muted-2'>{`axios`}</span>{`];
        `}


    </Highlight>;

export const DeclareProxyServer =
    <Highlight key='declare-proxy-server' language="javascript" className='code-block-snippet ide'>
    {`
    "proxy" : "http://localhost:5000/"
    `}
    </Highlight>;



export const FetchAPI =
    <Highlight key='fetch-api' language="javascript" className='code-block-snippet ide'>
    <span className='muted-2'>{`
        import React, {Component} from 'react';

        class RenderUsers extends Component{
          constructor(props){
             super(props);`}</span>{`
             this.`}<span className='text-orange-return'>{`state`}</span>{`={ `}
                <span className='text-cyan'>{`
                  users`}</span>{`: [],
             }`}<span className='muted-2'>{`
          }
        }`}</span>

    <span className='text-lime'>{`
        componentDidMount() {`}</span><span className='text-hotpink'>{`
            fetch(`}</span>{`'/api/users/all-users'`}<span className='text-hotpink'>{`)`}</span><span className='text-blue'>{`.then(`}</span><span className='text-pink'><i>{`res`}</i></span>{` =>`}<span className='text-pink'><i>{`res`}</i></span>{`.json()`}<span className='text-blue'>{`)`}</span><span className='text-red'>{`.then(`}</span>
            <span className='text-moccasin'><i>
            {`
                users`}</i></span>{`=> this.setState({`}<span className='text-cyan'>{`users`}</span> {`:`} <span className='text-moccasin'><i>{`users`}</i></span>{`})`}<span className='text-red'>{`)`}</span><span className='text-lime'>{`
        }
        `}</span>
        <span className='muted-2'>{`
        render(){
           return(
              <div>`}</span>{`
                 {this.`}<span className='text-orange-return'>{`state`}</span>{`.`}<span className='text-cyan'>{`users`}</span>{`}`}
        <span className='muted-2'>{`
              </div>
           )
        }

        export default RenderUsers
            `}</span>
    </Highlight>;


//SECTION : Install React
// @URL: install-react
export const GlobalInstallReactSnippet =
    <Highlight key='global-install-react-snippet' language="javascript" className='code-block-snippet terminal'>
        {`npm i -g create-react-app`}
    </Highlight>;

export const CreateProjectSnippet =
    <Highlight key='create-project-snippet' language="javascript" className='code-block-snippet terminal'>
        {`create-react-app client`}
    </Highlight>;

export const StartReactSnippet =
    <Highlight key='start-react-snippet' language="javascript" className='code-block-snippet terminal'>
        {`npm start`}
    </Highlight>;


//SECTION : Install React Router
// @URL: install-react

export const InstallReactRouterDomSnippet =
    <Highlight key='install-react-router-snippet' language="javascript" className='code-block-snippet terminal'>
        {`npm install --save react-router-dom`}
    </Highlight>;

export const InstallAJVSnippet =
    <Highlight key='install-ajv-snippet'  language="javascript" className='code-block-snippet terminal'>
        {`npm install ajv`}
    </Highlight>;

export const BuildTestCompsSnippet =
    <Highlight key='build-test-comps-snippet' language="javascript" className='code-block-snippet ide'>
    {`
    import React, {Component} from 'react';
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <div className="main">
                    <Landing/>
                    <Services/>
                </div>
            );
        }
    }
    `}
    </Highlight>;

export const ImportReactRouterDomCompsSnippet =
    <Highlight key='import-react-router-snippet' language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <div className="main">
                    <Landing/>
                    <Services/>
                </div>
            );
        }
    }
    `}</Highlight>;

export const RouterWrapSnippet =
    <Highlight key='router-wrap-snippet'  language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <Router>
                    <div className="main">
                        <Landing/>
                        <Services/>
                    </div>
                </Router>
            );
        }
    }
    `}</Highlight>;

export const RouteExactPathSnippet =
    <Highlight key='route-exact-path-snippet' language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <Router>
                    <div className="main">
                        <Route exact path="/" render={ ()=> <Landing/> }/>
                        <Route path="/services" render={ ()=> <Services/> }/>
                        <Services/>
                    </div>
                </Router>
            );
        }
    }
    `}</Highlight>;

export const MakeNavbarSnippet =
    <Highlight key='make-navbar-snippet' language="javascript" className='code-block-snippet ide'>
        {`
    import React from 'react';
    import {Link} from 'react-router-dom'

    const Navbar =()=>{
        return(
            <nav className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
            </nav>
        );
    }
    export default Navbar
    `}</Highlight>;


export const ImportNavbarSnippet =
    <Highlight key='import-navbar-snippet' language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Navbar from './components/nav-bar.js
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <Router>
                    <div className="main">
                        <Navbar/>
                        <Route exact path="/" render={ ()=> <Landing/> }/>
                        <Route path="/services" render={ ()=> <Services/> }/>
                        <Services/>
                    </div>
                </Router>
            );
        }
    }
    `}</Highlight>;

//SECTION : Set Up Back End
// @URL: set-up-backend-server

export const NpmInitBackend =
    <Highlight key='npm-init-backend-snippet' language="javascript" className='code-block-snippet terminal'>
        {`npm init`}
    </Highlight>;

export const InstallAllBackEndDeps =
    <Highlight key='install-all-backend-deps' language="javascript" className='code-block-snippet terminal'>
        {`npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator`}
    </Highlight>;

export const InstallNodemon =
    <Highlight key='install-nodemon' language="javascript" className='code-block-snippet terminal'>
        {`npm i -D --save-dev nodemon`}
    </Highlight>;

export const CreateServerJS =
    <Highlight key='create-server-js' language="javascript" className='code-block-snippet ide'>
        {`
    const express = require('express');
    const app = express();

    app.get('/', (req, res)=>{
        res.send('Hello, this is the 1st, server route')
    });
    `}</Highlight>;

export const AddServerPort =
        <Highlight key='add-server-port' language="javascript" className='code-block-snippet ide'>{`
    const express = require('express');
    const app = express();

    app.get('/', (req, res)=>{
        res.send('Hello, this is the 1st, server route')
    });

    const port = 5000;
    app.listen(port, ()=>{
        console.log(${portString});
    });
    `}</Highlight>

export const AddServerScripts =
        <Highlight key='add-server-scripts' language="javascript" className='code-block-snippet ide'>
            {`${add_server_script_string} `}
        </Highlight>;


//  SECTION: Connect Db to Server
//  @URL: connect-db-to-server

export const RequireMongoose =
    <Highlight key='require-mongoose-snippet' language="javascript" className='code-block-snippet ide'>
         <span className='muted'>  {`
        const express = require('express);`}</span>
        {`
        const mongoose = require('mongoose');
        `}

        <span className='muted'>{`
        const app = express();
        app.get('/', (req, res)=>{
                res.send( 'Hello, this is the 1st, server route')
            });

        const port = process.env.PORT || 5000;
        app.listen(port, ()=>{
            console.log(${portString});
        });
        `}</span>



        </Highlight>;


export const CreateKeysFile =
        <Highlight key='create-keys-file-snippet' language="javascript" className='code-block-snippet ide'>
            {`${create_keys_file_string} `}
{`
    secretOrKey : 'secret'`}
{`
};`}

        </Highlight>;

export const ConnectToMongoose =
    <Highlight key='connect-to-mongoose-snippet' language="javascript" className='code-block-snippet ide'>

    <span className='muted'>  {`
    const express = require('express);
    const mongoose = require('mongoose');
    `}</span>

    <span className='muted'>{`
    const app = express();
    app.get('/', (req, res)=>{
            res.send( 'Hello, this is the 1st, server route')
        });`}
        </span>                 <i className="em em-one"></i>
    {`
    const db = require('./config/keys').mongoURI;  //key file containing mongoDb username & password

    `}

<span>          <i className='em em-two'/> <span>         <i className='em em-three'/></span>
    {`
    mongoose.connect(db).then(()=>{
   `}</span>

    <span>
    {`      console.log('mongodb connect!')}).catch((err)=>{console.log(err);
    })`}
    </span>
        <span>                                      <i className='em em-four'/></span>


   <span className='muted'>
   {`

    const port = process.env.PORT || 5000;

    app.listen(port, ()=>{
        console.log(${portString});
    });`}
   </span>
    </Highlight>;

export const EditGitIgnoreFile =
    <Highlight key='edit-gitignore-file-snippet' language="javascript" className='code-block-snippet ide'>
        {`/keys`}
    </Highlight>;




//  SECTION : Routing With ExpressJS
//@ URL: routing-files-with-express-router

export const BackendModelRoutes =
    <Highlight  key='backend-model-routes-snippet' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>  {`
    const express = require('express);
    const mongoose = require('mongoose');
    `}</span>

    {`
    const users = require('./routes/api/users');
    const profiles = require('./routes/api/profiles');
    const posts = require('./routes/api/posts');
    `}

    <span className='muted'>{`
    const app = express();
    app.get('/', (req, res)=>{
            res.send( 'Hello, this is the 1st, server route')
        });

    const db = require('./config/keys').mongoURI;  //key file containing mongoDb username & password

    mongoose.connect(db).then(()=>{
         console.log('mongodb connect!')}).catch((err)=>{console.log(err);
    });

    const port = process.env.PORT || 5000;
    app.listen(port, ()=>{
        console.log(${portString});
    });

    `}</span>


    </Highlight>;

export const UseRoutes =
    <Highlight  key='use-routes-snippet' language="javascript" className='code-block-snippet ide'>
        <span className='muted'>  {`
    const express = require('express);
    const mongoose = require('mongoose');
    `}</span>

    <span className='muted-2'>{`
    const users = require('./routes/api/users');
    const profiles = require('./routes/api/profiles');
    const posts = require('./routes/api/posts');
    `}</span>

        <span className='muted'>{`
    const app = express();
    app.get('/', (req, res)=>{
            res.send( 'Hello, this is the 1st, server route')
        });

    const db = require('./config/keys').mongoURI;  //key file containing mongoDb username & password

    mongoose.connect(db).then(()=>{
         console.log('mongodb connect!')}).catch((err)=>{console.log(err);
    }); `}</span>

    {`
    app.use('/api/users', users);
    app.use('/api/profile', profile);
    app.use('/api/posts', posts);
    `}

    <span className='muted'>
    {`
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>{
        console.log(${portString});
    });
    `}</span>
    </Highlight>;

export const IncludeExpressRouter =
    <Highlight  key='install-express-router-snippet' language="javascript" className='code-block-snippet ide'>{`
    const express = require('express');
    const router = express`}<span className='text-red'>{`.Router()`}</span>{`:`}
    </Highlight>;

export const TestUsersRouterGetRoute =
    <Highlight  key='test-users-router-get-route-snippet' language="javascript" className='code-block-snippet ide'>
   <span className='muted-2'>
    {`
    const express = require('express');
    const router = express`}<span className='text-red'>{`.Router()`}</span>{`:
    `}
   </span>
    <span>              <i className="em em-keycap_star"/></span>
    {`
    router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));
    module.exports = router;
    `}
    </Highlight>;

export const TestProfilesRouterGetRoute =
    <Highlight  key='test-profiles-router-get-route-snippet' language="javascript" className='code-block-snippet ide'>{`
    const express = require('express');
    const router = express.Router();

    router.get('/test' , (req,res)=> res.json({msg: 'profiles route works'}));
    module.exports = router;

    `}
    </Highlight>;

export const TestPostsRouterGetRoute =
    <Highlight  key='test-posts-router-get-route' language="javascript" className='code-block-snippet ide'>{`
    const express = require('express');
    const router = express.Router();

    router.get('/test' , (req,res)=> res.json({msg: 'posts route works'}));
    module.exports = router;

    `}
    </Highlight>;

//  SECTION: Create DB Model
//@ URL : create-db-model

export const InitializeSchemaVar =
    <Highlight key='initialize-schema-var' language="javascript" className='code-block-snippet ide'>{`
    const mongoose = require('mongoose);
    const Schema = mongoose.Schema;

    `}
    </Highlight>;



export const CreateUserModel =
    <Highlight key='create-user-model-snippet' language="javascript" className='code-block-snippet ide'>
    <span className='muted-2'>
    {`
    const mongoose = require('mongoose);
    const Schema = mongoose.Schema;
    `}
    </span>

    {`
    const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            default: Date.now()
        }
    });

    module.exports = User = mongoose.model('users', UserSchema );
    `}
    </Highlight>;

//@ SECTION : BackEnd Routes Part1
//@ URL :

export const RequireBodyParser=
    <Highlight key='require-body-parser' language="javascript" className='code-block-snippet ide'>

    <span className='muted'>  {`
    const express = require('express);
    const mongoose = require('mongoose');
    `}</span>
    {`
    const bcrypt = require('bcryptjs');
    const bodyParser = require('body-parser);
    `}
    <span className='muted'>{`
    const app = express();
    `}</span>
    {`app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());
    `}
    <span className='muted'> {`
    app.get('/', (req, res)=>{
        res.send( 'Hello, this is the 1st, server route')
    });

    const db = require('./config/keys').mongoURI;

    mongoose.connect(db).then(()=>{
    console.log('mongodb connect!')}).catch((err)=>{console.log(err);
            })

    const port = process.env.PORT || 5000;

    app.listen(port, ()=>{
        console.log(${portString});
    });`}
   </span>
    </Highlight>;




export const UsersJsRecap_01 =
    <Highlight key='user-js-recap' language="javascript" className='code-block-snippet ide'>
    {`
    const express = require('express');
    const router = express.Router():

    router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));
    module.exports = router;
    `}
    </Highlight>;


export const CreateUserRegRoutePartOne =
    <Highlight key='create-user-reg-route-part-01' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>{`
    const express = require('express');
    const router = express.Router();`}</span>
    {`
    const User = require('../../models/User')
    `}
    <span className='muted'>{`
    router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));
    `}</span>

    {`router.post('/register, (req,res)=>{
        User.findOne({email : req.body.email})
    });


    module.exports = router;
   `}
    </Highlight>;

export const CreateUserRegRoutePartTwo=
    <Highlight key='create-user-reg-route-part-02' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>{`
    const express = require('express');
    const router = express.Router();

    const User = require('../../models/User')
    `}</span>
        <span className='muted'>{`
    router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));
    `}
    </span>


   <span className='muted-2'>{`
    router.post('/register, (req,res)=>{
        User.findOne({email : req.body.email})`}</span><span className='text-red'>{`.then(`} </span>{`user = > {
            if(user){
                return res.status(400).json({email : 'Email already exists.' })
            }
        }`}<span className='text-red'>{`)
    `}</span>


    <span className='muted-2' >
    {`});
    `}</span>


    <span className='muted'>
    {`
    module.exports = router;`}</span>
    </Highlight>;


export const CreateUserRegRoutePartFour=
    <Highlight key='create-user-reg-route-part-04' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>
    {`
    const express = require('express');
    const router = express.Router();

    const User = require('../../models/User');

    router.get('/test' , ()=> res.json({msg: 'users route works}));

    router.post('/register, ()=>{
        User.findOne({email: req.body.email})`}</span><span className='text-red muted'>{`.then(`}</span>
        <span className='muted'>{`user => {`}</span>
        <span className='muted'>{`
            if(user){
                return res.status(400).json({email: 'Email already exists.})
            }
            else{
                const `}</span><span className='text-orange'>{`newUser`}</span><span className='muted'>{` = newUser({
                    name: req.body.name;
                    email: req.body.email;
                    password: req.body.password;
                    password2: req.body.password2;
            });`}</span>

        <span>{`
            bcrypt`}</span><span className='text-purple'>{`.genSalt(`}</span>{`10,(`}{`err,`}<span className='text-yellow'> <i>{`salt`}</i>  </span>{`)=>{`}
            {`
                bcrypt`}<span className='text-cyan'>{`.hash(`}</span> <span className='text-orange'>{`newUser`}</span>{`.password`}{`,`} <span className='text-yellow'><i>{`salt`}</i></span>{`,`}{`(err, `}<span className='pink-text'><i>{`hash`}</i></span> {`)=>{`}
            {`
                if(err) throw err;
            `}
            <span className='text-orange'>
            {`    newUser`}</span>{'.password = '}<span className='text-pink'><i>{`hash`}</i></span>{`;`}
            <span className='text-orange'>
            {`
                newUser`}</span><span className='text-lime'>{`.save()`}</span><span className='red-text'>{`.then(`}</span> <i>{`user`}</i> {`=> res.json(`}<i>{`user`}</i> {`, msg: 'You are now registered!'`} {')'}<span className='text-red'>{` )`}</span>{`.catch(`}<i>{`err`}</i> {`=> console.log(`}<i>{`err`}</i>{`)`} {`)`}

            {`
                }`}<span className='text-cyan'>{`)`}</span>

            {`
            }`}<span className='text-purple'>{`)`}</span>
            <span className='muted'>
        {`
        ${closeBracket}`}</span><span className='text-red muted'>{`)`}</span>

    <span className='muted'>
    {`
    ${closeBracket})`}{`;`}</span>
    </Highlight>;


export const CreateUserRegRoutePartThree =
    <Highlight key='create-user-reg-route-part-03' language="javascript" className='code-block-snippet ide'>
        <span className='muted'>{`
    const express = require('express');
    const router = express.Router();

    const User = require('../../models/User')
    `}</span>
        <span className='muted'>{`
    router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));
    `}
    </span>


        <span className='muted-2'>{`
    router.post('/register, (req,res)=>{
        User.findOne({email : req.body.email})`}</span><span className='text-red muted-2'>{`.then(`}</span><span className='muted-2'>{`user = > {
            if(user){
                return res.status(400).json({email : 'Email already exists.' })
            }`}</span>
    {`
            else{
                const`} <span className='text-orange'>{'newUser'} </span>{`= new User({`}
                {`
                    name: req.body.name;
                    email: req.body.email;
                    password: req.body.password;
                    password: req.body.password2;
                });
            }`}
    <span className='muted'>
            {`
        ${closeBracket}`}</span>
            <span className='text-red muted' >{`)`}</span><span className='muted'>{`;`}</span>
</Highlight>;


//Backend Routes Part II

export const RequireJWT =
    <Highlight key='require-jwt' language="javascript" className='code-block-snippet ide'>
    <span className='text-muted'>
    {`
    const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    const keys = require('../../config/keys');
    `}</span>

    {`
    const jwt = require('jsonwebtoken');
    const passport = require('passport');
    `}
    </Highlight>;




export const SetUpLoginRoute =
    <Highlight key='set-up-login-route' language="javascript" className='code-block-snippet ide'>
    {`
    router.post('/login , (req, res)=>{
        const`} <span className='text-cyan'>{`email`}</span> {` = req.body.email
        `}
    {`const`}<span className='text-pink'> {`password`}</span>{` = req.body.password
    `}
        {`
        User.findOne({email : `}<span className='text-cyan'>{`email`}</span>{`})`}<span className='text-red'>{`.then(`}</span> <span className='text-blue'><i>{`user`}</i></span>{` =>{`}
        <i className='text-muted' >{`
        //Below, check to see if the email the user is attempting to login with is actually registered in our db
        `}</i>
        {`  if(`}<span className='text-orange-return'>{`!`}</span><span className='text-blue'>{`user`}</span>{`){`}
        <span className='text-orange-return'>{`
            return `}</span>{`res.status(404).json( {email: 'User not found.} );`}
        {`
          }`}
        <i className='text-muted'>{`
        //if there is a user, the code above will not run, instead we'll continue below and check if the submitted password belongs to the submitted email...
        `}</i>
    {`  bcrypt`}<span className='text-lime'>{`.compare(`}</span><span className='text-pink'>{`password`}</span> {`,`} <span className='text-blue'><i>{`user`}</i></span>{`.password`}<span className='text-lime'>{`)`}</span>
        <span className='text-magenta'>{`
            .then(`}</span><span className='text-moccasin'><i>{`isMatch`}</i></span>{` => {`}
            {`
                if(`}<i className='text-moccasin'>{`isMatch`}</i>{`){`}
                <span className='text-orange-return'>{`
                    return`}</span>{` res.json({`}<span className='text-yellow'>{`msg`}</span>{` : 'Success, pw matches hashed pw in db})`}
                {`
                }`}
            {`
                else{`}<span className='text-orange-return'>{`
                    return `}</span>{`res.status(400).json({`}<span className='text-yellow'>{`password`}</span>{`: "Password is inccorrect."});`}
                {`
                }`}
        {`
            }`}<span className='text-magenta'>{`)`}</span>{`:`}
        {`
        }`}<span className='text-red'>{`)`}</span>{`;`}

    {`
    });`}
    </Highlight>

//Backend Routes Part III - Create a Token :

export const BringInJWT =
    <Highlight key='bring-in-jwt' language="javascript" className='code-block-snippet ide'>
     <span className='text-muted'>
    {`
    const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    `}</span>
    {`
    const jwt = require('jsonwebtoken');
    `}
    {`const`}<span className='text-pink'>{` keys`}</span>{` = require('../../config/keys) `}

    </Highlight>


export const AddJwtTokenToLogin =
    <Highlight key='add-jwt-token-to-login' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>{`
    router.post('/login , (req, res)=>{
        const`}</span> <span className='text-cyan muted '>{`email`}</span> <span className='muted'>{` = req.body.email
        `}</span>
                <span className='muted'>{`const`}</span><span className='text-pink muted'> {`password`}</span> <span className='muted'>{` = req.body.password
    `}</span>
                <span className='muted'>{`
        User.findOne({email : `}</span> <span className='text-cyan muted'>{`email`}</span><span className='muted'>{`})`}</span><span className='text-red muted'>{`.then(`}</span> <span className='text-blue muted'><i>{`user`}</i></span>  <span className='muted'>{` =>{`}</span>

        <span className='muted'>
        {`
          if(`}</span> <span className='text-orange-return muted'>{`!`}</span><span className='text-blue muted'>{`user`}</span><span className='muted'>{`){`}</span>
                        <span className='text-orange-return muted'>{`
            return `}</span><span className='muted'> {`res.status(404).json( {email: 'User not found.} );`}</span>
                    <span className='muted'>{`
          }`}</span>

        <span className='muted'>{`
          bcrypt.compare(password,`}</span> <span className='text-blue muted'><i>{`user`}</i></span><span className='muted'>{`.password)`}</span>
                    <span className='muted'>{`
            .then(`}</span><span className='text-moccasin muted'><i>{`isMatch`}</i></span> <span className='muted'>{` => {`}</span>
                {`
                if(`}<i className='text-moccasin'>{`isMatch`}</i>{`){`}
                {`
                  const`}<span className='text-pink'>{` payload`}</span>{`={`}
                {`
                      id :`}<span className='text-blue'>{` user`}</span>{`.id,`}
                {`
                      name :`}<span className='text-blue'>{` user`}</span>{`.name,`}
                {`
                  }`}

                <span className='muted' ><i>{`
                  //sign the token`}</i></span>
                {`
                  jwt`}<span className='text-purple'>{`.sign(`}</span>
                    <span className='text-pink'>{`
                    payload `}</span>{`, `}<span className='text-cyan'>{`keys`}</span>{`.secretOrKey`} {`, {expiresIn : 3600}, `}
                    {`
                    (`}<i>{`err ,`}</i> <i><span className='text-yellow'>{`token`}</span></i> {`)=>{`}
                    {`
                        res.json({`}{`token:`}<span className='text-lime'>{` "Bearer "`}</span>{` + `}<span className='text-yellow'>{`token`}</span> {`, msg: "Success, pw matches hashed pw in db"`} {`})`}
                    {`
                    }`}
                  <span className='text-purple'>{`)`}</span>{`;`}
                {`
                }`}
                <span className='muted'>{`
                else{`}</span><span className='text-orange-return muted'>{`
                    return `}</span><span className='muted'>{`res.status(400).json({`}</span><span className='text-yellow muted'>{`password`}</span><span className='muted'>{`: "Password is inccorrect."});`}</span>
                <span className='muted'>{`
                }`}</span>
                <span className='muted'>{`
            }`}</span><span className='text-magenta muted'>{`)`}</span><span className='muted'>{`:`}</span>
                <span className='muted'>{`
        }`}</span><span className='text-red muted'>{`)`}</span><span className='muted'>{`;`}</span>

                   <span className='muted'> {`
    });`}</span>
                </Highlight>

//Backend Routes Part IV - Passport :
export const BringInPassport =
    <Highlight key='bring-in-passport' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>
    {`
    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    `}
    </span>
    {`const`}<span className='text-cyan'>{` passport`}</span>{` = require('passport')`}
    </Highlight>;

export const PassportMiddleware =
    <Highlight key='passport-middleware' language="javascript" className='code-block-snippet ide'>

    <span className='text-muted'>
    {`
    ...
    mongoose.connect(db).then(()=>{
        console.log('mongodb connect!')}).catch((err)=>{console.log(err);
    });
    `}</span>

    {`
    app.use(`}<span className='text-cyan'>{`passport`}</span>{`.initialize());`}

    <span className='text-muted'>{`
    app.use('/api/users', users);
    app.use('/api/profile', profile);
    app.use('/api/posts', posts);

    ...
    `}</span>
    </Highlight>

export const RequirePassportConfigFile =
    <Highlight key='require-passport-config-file' language="javascript" className='code-block-snippet ide'>

    <span className='text-muted'>
    {`
    ...
    mongoose.connect(db).then(()=>{
        console.log('mongodb connect!')}).catch((err)=>{console.log(err);
    });
    `}</span>

    <span className='muted'>{`
    app.use(`}</span><span className='text-cyan muted'>{`passport`}</span><span className='muted' >{`.initialize());`}</span>
    {`
    require('./config/passport')(`}<span className='text-cyan'>{`passport`}</span>{`);`}
    <span className='text-muted'>{`
    app.use('/api/users', users);
    app.use('/api/profile', profile);
    app.use('/api/posts', posts);

    ...
    `}</span>
    </Highlight>


export const SetUpPassportConfigJsPartOne =
    <Highlight key='set-up-passport-config-js' language="javascript" className='code-block-snippet ide'>
    {`
    const`}<span className='text-lime'>{` JwtStrategy`}</span>{` = require('passport-jwt').Strategy`}
    {`
    const`}<span className='text-blue'>{` ExtractJwt`}</span>{` = require('passport-jwt').ExtractJwt`}
    {`
    const`}<span className=''>{` mongoose`}</span>{` = require('mongoose')`}
    {`
    const`}<span className=''>{` User`}</span>{` mongoose.model('`}<span className='text-yellow'>{`users`}</span>{`');`}
    {`
    const`}<span className='text-pink'>{` keys`}</span>{`= require('../config/keys):`}

    </Highlight>

export const SetUpPassportConfigJsPartTwo =
    <Highlight key='set-up-passport-config-js-part-II' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>{`
    const`}</span><span className='text-lime muted'>{` JwtStrategy`}</span><span className='muted'>{` = require('passport-jwt').Strategy`}</span>
    <span className='muted'>{`
    const`}</span><span className='text-blue muted'>{` ExtractJwt`}</span><span className='muted'>{` = require('passport-jwt').ExtractJwt`}</span>
    <span className='muted'>{`
    const`}</span><span className='muted'>{` mongoose`}</span><span className='muted'>{` = require('mongoose')`}</span>
    <span className='muted'>{`
    const`}</span><span className='muted'>{` User`}</span><span className='muted'>{` mongoose.model('`}</span><span className='text-yellow muted'>{`users`}</span><span className='muted' >{`');`}</span>
    <span className='muted'>{`
    const`}</span><span className='text-pink muted'>{` keys`}</span><span className='muted'>{`= require('../config/keys):`}</span>
    {`

    const`}<span className='text-hotpink'>{` opts `}</span>{`= {};`}
    <span className='text-hotpink'>{`
    opts`}</span><span className=''>{`.jwtFromRequest = `}</span><span className='text-blue'>{`ExtractJwt`}</span><span className=''>{`.formAuthHeaderAsBearerToken();`}</span>
    <span className='text-hotpink'>{`
    opts`}</span><span className=''>{`.secretOrKey = `}</span><span className='text-pink'>{`keys`}</span><span className=''>{`.secretOrKey;`}</span>
    </Highlight>

export const SetUpPassportConfigJsPartThree =
    <Highlight key='set-up-passport-config-js-part-III' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>{`
    const`}</span><span className='text-lime muted'>{` JwtStrategy`}</span><span className='muted'>{` = require('passport-jwt').Strategy`}</span>
                <span className='muted'>{`
    const`}</span><span className='text-blue muted'>{` ExtractJwt`}</span><span className='muted'>{` = require('passport-jwt').ExtractJwt`}</span>
                <span className='muted'>{`
    const`}</span><span className='muted'>{` mongoose`}</span><span className='muted'>{` = require('mongoose')`}</span>
                <span className='muted'>{`
    const`}</span><span className='muted'>{` User`}</span><span className='muted'>{` mongoose.model('`}</span><span className='text-yellow muted'>{`users`}</span><span className='muted' >{`');`}</span>
                <span className='muted'>{`
    const`}</span><span className='text-pink muted'>{` keys`}</span><span className='muted'>{`= require('../config/keys):`}</span>
    <span className='muted'>{`

    const`}</span><span className='text-hotpink muted'>{` opts `}</span><span className='muted'>{`= {};`}</span>
    <span className='text-hotpink muted'>{`
    opts`}</span><span className='muted'>{`.jwtFromRequest = `}</span><span className='text-blue muted'>{`ExtractJwt`}</span><span className='muted'>{`.formAuthHeaderAsBearerToken();`}</span>
    <span className='text-hotpink muted'>{`
    opts`}</span><span className='muted'>{`.secretOrKey = `}</span><span className='text-pink muted'>{`keys`}</span><span className='muted'>{`.secretOrKey;`}</span>
    <span className=''>{`

    module.exports = (`}</span><span className='text-cyan'>{`passport`}</span><span className=''>{`)=>{`}</span>

    <span className='text-cyan'>
    {`
      passport`}</span><span className=''>{`.use(`}</span><span className='text-orange-return'>{`new`}</span><span className='text-lime'>{` JwtStrategy(`}</span><span className='text-hotpink'>{` opts`}</span><span className='text-white'>{`,`}</span><span className='text-white'>{`(`}</span><span className='text-purple'>{`jwt_payload`}</span><span className=''>{`,`}</span><span className='text-moccasin'>{` done`}</span> <span className='text-white'>{`)=>{`}</span>

    <span className=''>{`
        console.log(`}</span><span className='text-purple'>{`jwt_payload`}</span><span className='text-white'>{`);`}</span>
    <br/>
    <span className='text-white'>      {shortHighlight.closeBracket}</span><span className='text-lime'>{`)`}</span>
    <span className='text-white'>{')'}</span>
    <br/>
    <span className=''>   {shortHighlight.closeBracket}</span><span>{`;`}</span>

    </Highlight>

export const BringInPassportToUserJs =
    <Highlight key='bring-in-passport-users-js' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>
    {`
    const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    `}</span>
    <span className='muted'>{`
    const jwt = require('jsonwebtoken');
    `}</span>
    <span className='muted'>{`const`}</span><span className='text-pink muted'>{` keys`}</span><span className='muted'>{` = require('../../config/keys) `}</span>
    <span className='text-white'>{`
    const`}</span><span className='text-cyan '>{` passport`}</span><span className='white'>{` = require('passport'); `}</span>

    </Highlight>

export const CreateRestrictedRoute =
    <Highlight key='create-restricted-route' language="javascript" className='code-block-snippet ide'>
    <span className=''>{`
     ..... `}</span>

    <span className=''>{`

    router.get('/current' , `}</span><span className='text-cyan'>{`passport`}</span><span className='text-red'>{`.authenticate(`}</span><span className='text-white'>{`'jwt'`}</span><span className='text-white'>{`, { session: false }`}</span><span className='text-red'>{`)`}</span><span className='text-white'>{`, (req, res)=>{`}</span>
    <span className='white'>{`
        res.json({ msg : 'Success, we were able to autheticate.' })`}</span>
    <br/>
    <span className=''>    {shortHighlight.closeBracket}{`);`}</span>
    <span className='muted'>{`

    module.exports = router;`}</span>
    </Highlight>


export const SetUpPassportConfigJsPartFour =
    <Highlight key='set-up-passport-config-js-part-IV' language="javascript" className='code-block-snippet ide'>
    <span className='muted'>{`
    const`}</span><span className='text-lime muted'>{` JwtStrategy`}</span><span className='muted'>{` = require('passport-jwt').Strategy`}</span>
                            <span className='muted'>{`
    const`}</span><span className='text-blue muted'>{` ExtractJwt`}</span><span className='muted'>{` = require('passport-jwt').ExtractJwt`}</span>
                            <span className='muted'>{`
    const`}</span><span className='muted'>{` mongoose`}</span><span className='muted'>{` = require('mongoose')`}</span>
                            <span className='muted'>{`
    const`}</span><span className='muted'>{` User`}</span><span className='muted'>{` mongoose.model('`}</span><span className='text-yellow muted'>{`users`}</span><span className='muted' >{`');`}</span>
                            <span className='muted'>{`
    const`}</span><span className='text-pink muted'>{` keys`}</span><span className='muted'>{`= require('../config/keys):`}</span>
                            <span className='muted'>{`

    const`}</span><span className='text-hotpink muted'>{` opts `}</span><span className='muted'>{`= {};`}</span>
                            <span className='text-hotpink muted'>{`
    opts`}</span><span className='muted'>{`.jwtFromRequest = `}</span><span className='text-blue muted'>{`ExtractJwt`}</span><span className='muted'>{`.formAuthHeaderAsBearerToken();`}</span>
                            <span className='text-hotpink muted'>{`
    opts`}</span><span className='muted'>{`.secretOrKey = `}</span><span className='text-pink muted'>{`keys`}</span><span className='muted'>{`.secretOrKey;`}</span>
    <span className='muted'>{`

    module.exports = (`}</span><span className='text-cyan muted'>{`passport`}</span><span className='muted'>{`)=>{`}</span>

    <span className='text-cyan muted'>
                                {`
      passport`}</span><span className='muted'>{`.use(`}</span><span className='text-orange-return muted'>{`new`}</span><span className='text-lime muted'>{` JwtStrategy(`}</span><span className='text-hotpink muted'>{` opts`}</span><span className='text-white muted'>{`,`}</span><span className='text-white muted'>{`(`}</span><span className='text-purple muted'>{`jwt_payload`}</span><span className='muted'>{`,`}</span><span className='text-moccasin muted'>{` done`}</span> <span className='text-white muted'>{`)=>{`}</span>

    <span className=''>{`
        User.findById(`}</span><span className='text-purple'>{`jwt_payload`}</span><span className='text-white'>{`.id)`}</span><span className='text-red'>{`.then(`}</span>
        <span className=''>{`
          (`}</span><i><span className=''>{`user`}</span></i><span className=''>{`)=>{`}</span>
        <span className=''>{``}</span>
        <span className=''>{`
            if(`}</span><span className=''><i>{`user`}</i></span><span className=''>{`){`}</span><span className='text-orange-return'>{`return`}</span><span className='text-moccasin'>{` done(`}</span><span className=''>{`null,user`}</span><span className='text-moccasin'>{`)`}</span><span className='text-white'>{shortHighlight.closeBracket}</span><span className='text-white'>{`;`}</span>
        <span className='text-orange-return'>{`
             return`}</span><span className='text-moccasin'>{` done(`}</span><span className='text-white'>{`null,false`}</span><span className='text-moccasin'>{`);`}</span>
    <span className='text-white'>{`
          }`}</span><span className='text-red'>{`)`}</span><span className=''>{`.catch(`}</span><span className=''><i>{`err`}</i></span><span className=''>{` => console.log(`}</span><span className=''><i>{`err`}</i></span><span className='text-white'>{`));`}</span>
                                    <br/>
    <span className='text-white muted'>      {shortHighlight.closeBracket}</span><span className='text-lime muted'>{`)`}</span>
    <span className='text-white muted'>{')'}</span>
                                    <br/>
    <span className='muted'>    {shortHighlight.closeBracket}</span><span className='muted'>{`;`}</span>

    </Highlight>

                        // <span className=''>{``}</span>



//@ URL : Marvel API Part I

export const DateNow =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>{`
    let ts = new Date().getTime().toString();
    `}
    </Highlight>;

export const Md5Js =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>
        {`npm install js-md5t`}
    </Highlight>;

export const RequireJSMd5 =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>{`
    md5 = require('js-md5');
    `}
    </Highlight>;


export const ExportKeys =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>{`
    const apiKeys={
        PUBLIC_KEY: 'theKeyThatWasGeneratedFromMarvel',
        PRIV_KEY: 'theOtherKeyThatWasGeneratedFromMarvel'
    };
    module.exports= apiKeys;

    `}
    </Highlight>;

export const ImportKeys =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>{`
    let apiKeys = require('./config/keys');

    `}
    </Highlight>;

export const InstallAxios =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>{`
    npm install axios
    `}
    </Highlight>;

export const ImportAxios =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>{`
   const axios = require('axios');
    `}
    </Highlight>;

export const CreateHash =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>{`
    let hash = md5(ts+apiKeys.PRIV_KEY+apiKeys.PUBLIC_KEY);
    `}
    </Highlight>;

//@ SECTION : Set up Redux
//@ URL :  /install-react

//PART I : Creating the Store
export const InstallReduxDeps =
    <Highlight key='install-redux-deps' language="javascript" className='code-block-snippet terminal'>
    {`npm i redux react-redux redux-thunk`}
    </Highlight>;

export const ImportProviderAndWrap =
    <Highlight key='import-provider-and-wrap' language="javascript" className='code-block-snippet ide'>
    {`
    import {Provider} from 'react-redux';
    class App extends Component {
      render() {
          return (
              <Provider>
                    <Router>
                        <div className='main'>
                            <NavBar/>
                            <Route exact path="/"render={() => <Landing/>} />
                                <div className='comp-container'>
                                    <Route exact path="/login" render={() => <Login/>} />
                                    <Route exact path="/register" render={() => <Register/>} />
                                    <Route exact path="/home" render={() => <Home/>} />
                                </div>
                             <Footer/>
                         </div>
                     </Router>
                 </Provider>
             );
          }
       }
    `}
    </Highlight>;


export const PassStoreToProvider =
    <Highlight key='pass-store-to-provider' language="javascript" className='code-block-snippet ide'>
    {`
    <Provider store={store}>
        ..........
     </Provider>
   `}
    </Highlight>;


export const DefineStoreVar =
    <Highlight key='define-store-var' language="javascript" className='code-block-snippet ide'>
        {`const store= createStore(()=>[], {}, applyMiddleware);`}
    </Highlight>;

export const ImportCreateStoreAndMiddleWare =
    <Highlight key='import-create-store-and-middleware' language="javascript" className='code-block-snippet ide'>
        {`import {createStore, applyMiddleware} from 'redux';`}
    </Highlight>;

//  PART II

export const CreateStoreJS =
    <Highlight key='create-store-js' language="javascript" className='code-block-snippet ide'>
    {`
    import {applyMiddleware, createStore} from "redux";
    const store= createStore(()=>[], {}, applyMiddleware);

    export default store;
    `}
    </Highlight>;

export const ImportThunkAndDefineMiddleware =
    <Highlight key='import-thunk-and-define-middleware' language="javascript" className='code-block-snippet ide'>
    {`
    import thunk from 'redux-thunk';
    const middleware =[thunk];
    `}
    </Highlight>;

export const SetApplyMiddleware =
    <Highlight key='set-applymiddleware' language="javascript" className='code-block-snippet ide'>
    {`
    import {applyMiddleware, createStore} from "redux";
    import thunk from 'redux-thunk';
    const middleware =[thunk];

    const store = createStore(()=>[], {}, applyMiddleware(...middleware));
    export default store;
    `}
    </Highlight>;


//   PART III creating  indexReducer

export const ImportCombineReducers =
    <Highlight key='import-combine-reducers' language="javascript" className='code-block-snippet ide'>
    {`
    import {combineReducers} from 'redux'
    `}
    </Highlight>;


export const ImportAuthReducer =
    <Highlight key='import-auth-reducer' language="javascript" className='code-block-snippet ide'>
    {`
    import authReducer from './auth-reducer';
    `}
    </Highlight>;

export const ExportCombineReducers =
    <Highlight key='export-combine-reducers' language="javascript" className='code-block-snippet ide'>
    {`
    import {combineReducers} from 'redux';

    //sub-reducers
    import authReducer from './auth-reducer';

    export default combineReducers({
        auth: authReducer
    });
    `}
    </Highlight>;

//PART IV
export const ReducerInitState =
    <Highlight key='reducer-init-state' language="javascript" className='code-block-snippet ide'>
    {`
    const initialState={
        isAutheticated: false,
        user:{},
    };
    `}
    </Highlight>;


export const CreateReducer =
    <Highlight key='create-reducer' language="javascript" className='code-block-snippet ide'>
    {`
    const initialState={
        isAutheticated: false,
        user:{},
    };

    export default (state= initialState, action)=>{

    };
    `}
    </Highlight>;

export const SetUpSwitchCase =
    <Highlight key='set-up-switch-case' language="javascript" className='code-block-snippet ide'>
    {`
    export default (state= initialState, action)=>{
        switch(action.type){
            default:
                return state
        }
    };
    `}
    </Highlight>;

//PART V


export const ImportRootReducer =
    <Highlight key='import-root-reducer' language="javascript" className='code-block-snippet ide'>
    {`
    import rootReducer from './reducers';
    `}
    </Highlight>;


export const ReviewOfStoreJs =
    <Highlight key='review-of-store-js' language="javascript" className='code-block-snippet ide'>
    {`
    import {applyMiddleware, createStore} from "redux";
    import thunk from 'redux-thunk';
    import rootReducer from './reducers'
    const middleware =[thunk];

    const store = createStore(rootReducer , {}, applyMiddleware(...middleware));

    export default store; //this imports to App.js to give to the provider
    `}
    </Highlight>;


export const ImportCompose =
    <Highlight key='import-compose' language="javascript" className='code-block-snippet ide'>
    {`
    import {applyMiddleware, createStore, compose} from "redux";
    `}
    </Highlight>;


export const SetComposeWithApplyMiddleware =
    <Highlight key='set-compose-with-apply-middleware' language="javascript" className='code-block-snippet ide'>
    {`
    const store = createStore(rootReducer , initialState , compose(applyMiddleware(...middleware)));
    `}
    </Highlight>;

export const IncludeReduxDevTools =
    <Highlight key='include-redux-dev-tools' language="javascript" className='code-block-snippet ide'>
    {`
    const store = createStore(rootReducer , initialState ,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    `}
    </Highlight>;


//@ SECTION : REACT/REDUX ACTIONS
//@ URL : redux-react-actions

// PART I : Action And Reducer Setup
export const CreateType =
    <Highlight key='create-type' language="javascript" className='code-block-snippet ide'>
    {`  export const REGISTER_USER = 'REGISTER_USER'; `}
    </Highlight>;

export const AnatomyOfReduxAction =
    <Highlight key='anatomy-of-redux-action' language="javascript" className='code-block-snippet ide'>
        <i className="em em-one"></i>
    {` import {TEST_DISPATCH} from "./00-types";`}
    <br/><br/>
        <i className="em em-two"></i>
    {` export const registerUser = (userData)=>{
        return{
            type: REGISTER_USER,
            payload: userData
        }
     };`}
    </Highlight>;

export const AnatomyOfTheReducer =
    <Highlight key='anatomy-of-the-reducer' language="javascript" className='code-block-snippet ide'>
        <i className="em em-one"></i>
    {` import {TEST_DISPATCH} from "../actions/00-types";`}
        <br/><br/>
        <i className="em em-two"></i>
    {` const initialState={
        isAutheticated: false,
        user:{},
        //NOTE: add any key and val can go here.
    };`}
        <br/><br/>
        <i className="em em-three"></i>
    {` export default (state= initialState, action)=>{
        switch(action.type){
            default:
                return state
        }
    };`}


    </Highlight>;

export const AddCaseToReducer =
    <Highlight key='add-case-to-reducer' language="javascript" className='code-block-snippet ide'>

        <span style={{color: '#555555'}}>
    {`
    import {TEST_DISPATCH} from "../actions/00-types";

    const initialState={
        isAutheticated: false,
        user:{},
    };

    export default (state= initialState, action)=>{
        switch(action.type){
    `}</span>

    <span style={{color: '#e1e16b' , lineHeight: '2em'}}> <i style={{position: 'relative', right: '-1em'}} className="em em-one"></i>
    {`     case TEST_DISPATCH:`}</span>
    <br/>
    <span style={{color: '#e1e16b'}}> <i style={{position: 'relative', right: '-3.4em'}} className="em em-two"></i>
    {`             return{`} </span> <br/>
        <span style={{color: '#e1e16b'}}> <i style={{position: 'relative', right: '-3.4em', top: '1em'}} className="em em-three"></i>
    {`                 ...state,
                    user: action.payload
                };`}</span>
    <br/>
        <span style={{color: '#555555'}}>
    {`            default:
                return state
        }
    };
        `}</span>

    </Highlight>;

// PART II : Component SetUp

export const ImportConnectAndAction =
    <Highlight key='import-connect-and-action' language="javascript" className='code-block-snippet ide'>
    {` import `} <span style={{color: 'yellow'}}>{`{ connect } `}</span> {`from 'react-redux';`}<br/>
    {` import `}<span style={{color: 'orange'}} >{`{ registerUser } `}</span>{`from "../actions/auth-actions";`}
    </Highlight>;

export const PreviousExportOfComp =
    <Highlight key='previous-export-of-comp' language="javascript" className='code-block-snippet ide'>
        {` export default`} <span style={{color: 'red'}}>{` Register `}</span>
    </Highlight>;




export const ConnectActionToComp =
    <Highlight key='connect-action-to-comp' language="javascript" className='code-block-snippet ide'>
    {`export default`} <span style={{color: 'yellow'}}>{`connect(`}</span>{`null,`} <span style={{color: 'orange'}}>{`{ registerUser }`}</span><span style={{color: 'yellow'}}>{`)`}</span>{`(`}<span style={{color: 'red'}}>{`Register`}</span>{`)`}
    </Highlight>;


export const CreateRegisterUserCompInitState =
    <Highlight key='create-register-user-comp-init-state' language="javascript" className='code-block-snippet ide'>
    {`class Register extends Component{
        constructor(props){
            super(props);
                this.`}<span className='lime-text'>{`state`}</span>{`={`}
    <span className='cyan-text'>{`
                    name`}</span>{`: '' ,
                    `}<span className='cyan-text'>{`email`}</span>{`: '' ,
                    `}<span className='cyan-text'>{`password`}</span>{`: '' ,
                    `}<span className='cyan-text'>{`password2`}</span>{`: '' ,
                    `}<span className='cyan-text'>{`errors`}</span>{`: {},
                }
        }
    }`}
    </Highlight>;

export const CreateFormSubmitNameAndValue =
    <Highlight key='create-form-submit-name-and-value' language="javascript" className='code-block-snippet ide'>
        <span className='dark-out-text'>
    {`
    render(){
        return(
           <section className='register-main'>
               <div className='container form-container bg-light'>
                   <h1>REGISTER FORM </h1>
                `}</span>
                  {`
                   <input`}<span className='orange-text ' >{` name =`}</span> {`"name"`} <span className='red-text' >{` value =`}</span>{` {this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`name`}</span>{`}`}{` className='form-input' placeholder='name: '/>`}
                  {`
                   <input`}<span className='orange-text' >{` name =`}</span> {`"email"`} <span className='red-text' >{` value =`}</span>{` {this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`email`}</span>{`}`}{` className='form-input' placeholder='email: '/>`}
                  {`
                   <input`}<span className='orange-text' >{` name =`}</span> {`"password"`} <span className='red-text' >{` value =`}</span>{` {this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`password`}</span>{`}`}{` className='form-input' placeholder='password: '/>`}
                  {`
                   <input`}<span className='orange-text' >{` name =`}</span> {`"password2"`} <span className='red-text' >{` value =`}</span>{` {this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`password2`}</span>{`}`}{` className='form-input' placeholder='confirm password: '/>`}
                  {`

                   <div className='button-wrapper'>
                        <div className='btn bg-info button'`}{`>Submit</div>
                   </div>`}

        <span className='dark-out-text'>
        {`
                </div>
            </section>
        )};`}
        </span>
    </Highlight>;

// create-form-onSubmit-and-onChange
export const CreateFormOnSubmitAndOnChange =
    <Highlight key='create-form-onSubmit-and-onChange' language="javascript" className='code-block-snippet ide'>
        <span className='dark-out-text'>
    {`
    render(){
        return(
           <section className='register-main'>
               <div className='container form-container bg-light'>
                   <h1>REGISTER FORM </h1>
                `}</span>
        {`
                   <input`}<span className='orange-text muted ' >{` name =`}</span> {`"name"`} <span className='red-text muted' >{` value =`}</span><span className='muted'>{`{this.`}</span><span className='lime-text muted'>{`state.`}</span><span className='cyan-text muted'>{`name`}</span><span className='muted'>{`}`}</span> <span className='pink-text'>{`onChange`}</span>{` ={`}{`this.`}<span className='hotpink-text'>{`onInputChange`}</span>{`}`} <span className='muted'>{`className='form-input' placeholder='name: '`}</span> {`/>`}
        {`
                   <input`}<span className='orange-text muted ' >{` name =`}</span> {`"email"`} <span className='red-text muted' >{` value =`}</span><span className='muted'>{`{this.`}</span><span className='lime-text muted'>{`state.`}</span><span className='cyan-text muted'>{`email`}</span><span className='muted'>{`}`}</span> <span className='pink-text'>{`onChange`}</span>{` ={`}{`this.`}<span className='hotpink-text'>{`onInputChange`}</span>{`}`} <span className='muted'>{`className='form-input' placeholder='email: '`}</span> {`/>`}
        {`
                   <input`}<span className='orange-text muted ' >{` name =`}</span> {`"password"`} <span className='red-text muted' >{` value =`}</span><span className='muted'>{`{this.`}</span><span className='lime-text muted'>{`state.`}</span><span className='cyan-text muted'>{`password`}</span><span className='muted'>{`}`}</span> <span className='pink-text'>{`onChange`}</span>{` ={`}{`this.`}<span className='hotpink-text'>{`onInputChange`}</span>{`}`} <span className='muted'>{`className='form-input' placeholder='password: '`}</span> {`/>`}
        {`
                   <input`}<span className='orange-text muted ' >{` name =`}</span> {`"password2"`} <span className='red-text muted' >{` value =`}</span><span className='muted'>{`{this.`}</span><span className='lime-text muted'>{`state.`}</span><span className='cyan-text muted'>{`password2`}</span><span className='muted'>{`}`}</span> <span className='pink-text'>{`onChange`}</span>{` ={`}{`this.`}<span className='hotpink-text'>{`onInputChange`}</span>{`}`} <span className='muted'>{`className='form-input' placeholder='password2: '`}</span> {`/>`}
        <span className='muted'>{`

                   <div className='button-wrapper'>`}</span>
                   {`
                        <button`}{` type='button'`}<span className='yellow-green-text'>{`onClick`}</span>{`={this.`}<span className='yellow-text'>{`onSubmit`}</span>{`}`}{`>Submit</button>`}
                   <span className='muted' >{`
                   </div>`}</span>

        <span className='dark-out-text'>
        {`
                </div>
            </section>
        )};`}
        </span>
    </Highlight>;


export const CreateOnInputChangeAction =
    <Highlight key='create-onInputChange-action' language="javascript" className='code-block-snippet ide'>
        <span className='hotpink-text'>
        {`
        onInputChange`}</span>{` =( event )=>{`}
        {`
            this.setState({[event.target.`}<span className='orange-text'>{`name`}</span>{`] : event.target.`}<span className='red-text'>{`value`}</span>{`})`}
        {`
         };
        `}
    </Highlight>;

export const CreateOnSubmitCompAction =
    <Highlight key='create-on-submit-comp-action' language="javascript" className='code-block-snippet ide'>
        <span className='yellow-text'>
    {`
    onSubmit(`}</span>{`event`}<span className='yellow-text'>{`){`}</span>{`
        event.preventDefault();
        `}
        <span className='dark-out-text'>{`//The newUser obj we're creating below gets sent to our Redux action shortly...`}</span>
        {`
        const`} <span className='purple-text'>{`newUser ={`}</span>
            {`
            name: this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`name`}</span>{`,`}
            {`
            email: this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`email`}</span>{`,`}
            {`
            password: this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`password`}</span>{`,`}
            {`
            password2: this.`}<span className='lime-text'>{`state`}</span>{`.`}<span className='cyan-text'>{`password2`}</span>{`,`}
            <span className='purple-text'>{`
        }`}</span>
        {`

        this.props.`}<span className='red-text'>{`registerUser(`}</span><span className='purple-text'>{`newUser`}</span><span className='red-text' >{`)`}</span>
        <span className='yellow-text'>
        {`
    }`}</span>



    </Highlight>;

export const CreateMapStateToProps =
    <Highlight key='create-mapStateToProps' language="javascript" className='code-block-snippet ide'>
        <span>                              <i className="em em-one"/></span>
        {`
    const `}<span className='blue-text'>{`mapStateToProps `}</span>{`= (state)=>({
        auth: state.auth
    });`}
        <span>  <i className="em em-two"/>       <i className="em em-three"/></span>
    </Highlight>;


export const RevisitAnatomyOfReduxAction =
    <Highlight key='revisit-anatomy-of-redux-action' language="javascript" className='code-block-snippet ide'>{`
    import {REGISTER_USER} from "./00-types";

    export const`}<span className='red-text'>{` registerUser`}</span>{` = (userData)=>{
        return{
            type: REGISTER_USER,
            payload: userData
        }
     };`}
    </Highlight>;

export const RevisitImportConnectAndAction =
    <Highlight key='revisit-import-connect-and-action' language="javascript" className='inline-snippet'>
        {`
    import  { connect }  from 'react-redux';
    import {`}<span className='red-text'>{` registerUser`}</span>{` } from "../actions/auth-actions";`}
    </Highlight>;


export const CreateMapDispatchToProps =
    <Highlight key='create-mapDispatchToProps' language="javascript" className='code-block-snippet ide'>
    <span className='dark-out-text'>
    {`
    const mapStateToProps = (state)=>({
        auth: state.auth
    });`}</span>
    {`

    const `}<span className='peach-text'>{`mapDispatchToProps`}</span>{`={`}
    {`
        registerUser :`} <span className='red-text'>{`registerUser`}</span>  {`,`}
    {`
    };`}
    </Highlight>;

export const ConnectMapStateToPropsAndMapDispatchToProps =
    <Highlight key='connect-mapStateToProps-and-mapDispatchToProps' language="javascript" className='code-block-snippet ide'>
        <span className='dark-out-text'>
    {`
    const `}</span><span className='blue-text'>{`mapStateToProps`}</span> <span className='dark-out-text'>{` = (state)=>({
        auth: state.auth
    });

     const `}</span><span className='peach-text'>{`mapDispatchToProps `}</span><span className='dark-out-text'>{`={
        registerUser :registerUser,
    };`}</span>

    {`
    export default`}<span className='yellow-text'>{` connect(`}</span><span className='blue-text'>{`mapStateToProps`}</span>{`, `}<span className='peach-text'>{`mapDispatchToProps`}</span><span className='yellow-text'>{`)`}</span>{`(Register)`}
    </Highlight>;




// PART III : Component SetUp
export const KeyValueFromReducer =
    <Highlight key='key-value-from-reducer' language="javascript" className='code-block-snippet ide'>
    {`
    import {combineReducers} from 'redux';

    //sub-reducers
    import authReducer from './auth-reducer';

    export default combineReducers({
        auth: authReducer
    });

    `}
    </Highlight>;




export const DeconstructPropsAndState =
    <Highlight key='deconstruct-props-and-state' language="javascript" className='code-block-snippet ide'>
    {`
    const {errors} = this.state;
    const { user } = this.props.auth; //*NOTE remember that { user  } came from the empty obj initially set up in the auth reducer
    `}
    </Highlight>;

export const CreateCaseInReducer =
    <Highlight key='create-case-in-reducer' language="javascript" className='code-block-snippet ide'>
    {`
    export default (state= initialState, action)=>{
        switch(action.type){
            case TEST_DISPATCH:
                return{
                    ...state,
                   user: action.payload
                };
            default:
                return state
        }
    };
    `}
    </Highlight>;

//PART VI : Conditional Rendering In the Component

export const ConditionalRenderInitState =
    <Highlight key='conditional-render-init-state' language="javascript" className='code-block-snippet ide'>
    {`
    <section className='register-main'>
        <div className='container form-container bg-light'>

            <h1>REGISTER</h1>
            <input name='name'  value={this.state.name}  onChange={this.onChange} className='form-input' placeholder='name: '/>
            <input name='email' value={this.state.email} onChange={this.onChange} className='form-input' placeholder='email: : '/>
            <input name='password'  value={this.state.password} onChange={this.onChange} className='form-input' placeholder='password: '/>
            <input name="password2"  value={this.state.password2} onChange={this.onChange} className='form-input' placeholder='confirm password: '/>

            <div className='button-wrapper'>
                <div className='btn bg-info button' onClick={this.onSubmit}>Submit</div>
            </div>

            <div className='spacer mb-5'>
                <div className='bg-light'>{user ? user.name : null }</div>
            </div>
        </div>
    </section>
    `}
    </Highlight>;

export const ImportPropTypes =
    <Highlight key='import-prop-types' language="javascript" className='code-block-snippet ide'>
    {`
    import PropTypes from 'prop-types'
    `}
    </Highlight>;

export const RegisterPropTypes =
    <Highlight key='register-propTypes' language="javascript" className='code-block-snippet ide'>
    {`
    Register.propTypes = {
        auth: PropTypes.object.isRequired,
        registerUser: PropTypes.func.isRequired
    };
    `}
    </Highlight>;


export const ReduxReactActionsSummary =
    <Highlight key='redux-react-actions-summary' language="javascript" className='code-block-snippet ide'>
    {`
    import React, {Component} from 'react';
    import {connect} from 'react-redux';
    import {registerUser} from "../actions/auth-actions";
    import PropTypes from 'prop-types'

    class Register extends Component{
        constructor(props){
            super(props);
                this.state={
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                    errors: {},
                };
                this.onChange = this.onChange.bind(this);
                this.onSubmit = this.onSubmit.bind(this);
        }
    onChange(event){
        this.setState({ [event.target.name]: event.target.value })
    };

    onSubmit(event){
        event.preventDefault();
        //We'll send the newUser obj to redux later
        const newUser ={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
        this.props.registerUser(newUser)
    };

   render(){
        // console.log( this.state);
       const {errors} = this.state;
       const { user } = this.props.auth; //*NOTE remember that { user  } came from the empty obj initially set up in the auth reducer
    return(
           <section className='register-main'>
               <div className='container form-container bg-light'>
                   <h1>REGISTER</h1>

                   <input name='name'  value={this.state.name}  onChange={this.onChange} className='form-input' placeholder='name: '/>
                   <input name='email' value={this.state.email} onChange={this.onChange} className='form-input' placeholder='email: : '/>
                   <input name='password'  value={this.state.password} onChange={this.onChange} className='form-input' placeholder='password: '/>
                   <input name="password2"  value={this.state.password2} onChange={this.onChange} className='form-input' placeholder='confirm password: '/>

                   <div className='button-wrapper'>
                       <div className='btn bg-info button' onClick={this.onSubmit}>Submit</div>
                   </div>
                   <div className='spacer mb-5'>
                       <div className='bg-light'>{user ? user.name : null }</div>
                   </div>

               </div>
           </section>
           )
       }
    }

    Register.propTypes = {
    auth: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired
    };

    const mapStateToProps = (state)=>({
        auth: state.auth
    });

    export default connect(mapStateToProps, {registerUser})(Register)
    `}
    </Highlight>;

export const changeME14 =
    <Highlight key='' language="javascript" className='code-block-snippet ide'>
    {`

    `}
    </Highlight>;

export const TestComp =()=>{

    return <Highlight language="javascript" className='code-block-snippet ide'>{`
        hello
    `}
    </Highlight>;

};

