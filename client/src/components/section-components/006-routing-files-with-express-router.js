import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_images_006_routing_with_express} from '../../actions/images-actions';
import {get_006_routing_with_express_router_snippets} from '../../actions/code-snippets-actions'
import {ThemeProvider} from 'styled-components'

import {Section, SectionHeaderTextBox, TextBoxPreface, Article, ArticleContainer, TextBox,} from '../styled-components/common/Sections';
import {ImageContainer, } from "../styled-components/common/ImageContainers";
import CodeSnippet from '../common/Snipet';


class RoutingWithExpress extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets: [],
            images: {},

            image_display_props:{
                hero: {width: '72%'},
                transform: 'translateX(50%)',
            }
        }
    }

    componentWillMount(){
        this.getSnippets();
        this.setCodeSnippets();
        this.setImages();

    }

    componentDidMount(){
        window.scrollTo(0,0);

    }

    getSnippets=()=>{
        this.props.get_006_routing_with_express_router_snippets();
    };

    setCodeSnippets=()=>{
        this.setState({
            code_snippets: this.props.set_routing_with_express_router_snippets.code
        })
    };

    setImages=()=>{
        this.setState({
            images: this.props.set_images
        })
    };



    render(){
        let {code_snippets} = this.state;
        let{fibers} = this.state.images;

        console.log(fibers, 'whats in here?');
        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Routing With ExpressJS</h1>
                            <h2>SubHeader </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <ThemeProvider theme={fibers.container_properties}>
                                <ImageContainer >
                                    <img src={fibers.img_properties.src} alt=''/>
                                </ImageContainer>
                            </ThemeProvider>


                            <TextBoxPreface className='article-preface'>
                                <h2>Before We Start</h2>
                                <p>We'll go ahead first create the routes on our backend server before making any
                                    models. In this example, we'll create models for:</p>

                                <ul>
                                    <li>1.) users : this model will contain unique information about a user such as email and passwords as well as their name and personal data</li>
                                    <li>2.) profiles: this model will contain public data we can use to display information about the user </li>
                                    <li>3.) posts: this model will contain posts and comments made by each user</li>
                                </ul>

                                <p>Now that we have an idea of what each model is responsible for, lets start to create the routes in our
                                    backened that will lead to the models in mLab that we'll create in the next section</p>
                            </TextBoxPreface>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Creating the Route Files</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBox>
                                <h2>Organize Routes with separate files </h2>
                                <p>Although we could simply start building our routes within the server.js file, things will ge messy quick if we go with that separate approach</p>
                                <p>Instead, let's create separate files to separate our routes: First, within the root directory of you app, create a directory called <i>"routes" </i> AND inside the routes directory, create another directory and name it <i>"routes"</i></p>
                                <div className='mb-3'>  <small style={{color: 'red'}}>NOTE: put a pic of the project folder structure</small></div>
                                <p>Next within the routes/api directory we just created, create three files for users, profiles, posts:</p>
                                <div className='mb-3'>  <small style={{color: 'red'}}>NOTE: put a pic of the project folder structure</small></div>
                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>

                        <SectionHeaderTextBox>
                            <h2>Wire up the Routes</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBox >
                                <h2>Import routes files </h2>
                                <p>Now that we've created the files that will later contain our routes, we'll need to let our server.js file know where to find those routes! In essence, all we're doing here is pointing to the location within our app where the server can find the routes URLS to use to communciate with our database . </p>
                                <p>Back in server.js, import the 3 route files.</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             codeKey='backend-model-routes-snippet'
                                             tabName='server.js'/>
                            </TextBox>


                            <TextBox >
                                <h2>Define Route Variables</h2>
                                <p>We'll need to define the routes to for express to use when connecting to the database. In server.js include the following code:</p>
                                {/*<UselRoutes/>*/}
                                <CodeSnippet code_snippets={code_snippets}
                                             codeKey='use-routes-snippet'
                                             tabName='server.js'/>

                                <p>LATER: EXPLAIN THIS CODE</p>
                                <p>NOTE, at this point you'll see errors in the console. That's because there's nothing in the route files. Let's change that.</p>
                            </TextBox>

                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Adding Express Router </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBox>
                                <h2>Defining the Routes</h2>

                                <p>Let's start with routes/api/users.js</p>
                                <p>We'll need to bring in the express itself and the .Router() method provided by express. Go to your routes/api/users.js file and add the following to the file:  </p>
                                {/*<IncludeExpressRouter/>*/}
                                <CodeSnippet code_snippets={code_snippets}
                                             codeKey='install-express-router-snippet'
                                             tabName='routes/api/users.js'/>

                                <p>Next, lets add our first route:</p>
                                {/*<TestUsersRouterGetRoute/>*/}
                                <CodeSnippet code_snippets={code_snippets}
                                             codeKey='test-users-router-get-route-snippet'
                                             tabName='routes/api/users.js'/>
                                <p>What does this mean in regards to routing?</p>

                                <TextBoxPreface>
                                    <ul>
                                        <li><i className="em em-keycap_star"/> : since we already defined app.use('/api/users, users), we only need to pass in the specific route and not the whole route of app/users/test</li>

                                        <li>1.) We brought in express into this file so that we can have access to the .Router() method </li>
                                        <li>2.) We instantiate Router() with a variable called router</li>
                                        <li>3.) .get() is chained to router in order to make a get request to the db</li>
                                        <li>4.) After it's chained , .get() gets passed the route we would like to define and a callback containing the request and the response objects passed as arguments.  </li>
                                        <li>5.) When the url localhost:5000/test is entered into the browser, the response object gets appended with a json object containing a key of msg and a value of 'users route works" </li>
                                    </ul>
                                </TextBoxPreface>

                                <p>Now lets go ahead and to the same with profile and posts routes:</p>

                                <div className='row mb-5'>
                                    <div className='col'><small><p>routes/api/profiles.js</p></small>
                                        {/*<TestProfilesRouterGetRoute/>*/}
                                        <CodeSnippet code_snippets={code_snippets}
                                                     codeKey='test-profiles-router-get-route-snippet'
                                                     tabName='routes/api/profiles.js'/>

                                    </div>
                                    <div className='col'><small><p>routes/api/posts.js</p></small>
                                        {/*<TestPostsRouterGetRoute/>*/}
                                        <CodeSnippet code_snippets={code_snippets}
                                                     codeKey='test-posts-router-get-route'
                                                     tabName='routes/api/post.js'/>
                                    </div>
                                </div>

                                <p>Notice that the only real difference between the three routes is the files names in the URL and the json response.</p>

                            </TextBox>
                        </ArticleContainer>


                    </Article>
                </Section>


                <Section>
                    <Article>
                        <ArticleContainer>
                            <h2>Testing Our Route</h2>
                            <p>In the browser, enter the URL : localhost:5000/users/test. We should see the following:</p>
                            <div className='mb-3'>  <small style={{color: 'red'}}>NOTE: put a pic of the project folder structure</small></div>

                            <p>Likewise, verify the json response for profiles and posts by visiting localhost:3000/profiles/test  and  localhost:3000/posts/test  </p>
                        </ArticleContainer>

                    </Article>
                </Section>


            </React.Fragment>
        )
    }
};

const mapDispatchToProps={
    get_006_routing_with_express_router_snippets,
    get_images_006_routing_with_express
};

const mapStateToProps=(state)=>({
    set_routing_with_express_router_snippets : state.code_snippets,
    set_images : state.images.images_006_routing_with_express
});

export default connect(mapStateToProps, mapDispatchToProps )(RoutingWithExpress)