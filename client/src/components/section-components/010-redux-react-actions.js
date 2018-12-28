import React, {Component} from 'react';
import {connect} from 'react-redux'

import {get_010_redux_react_actions_snippets} from '../../actions/code-snippets-actions'
import {get_images_010_redux_react_actions} from '../../actions/images-actions'

import {ThemeProvider} from 'styled-components'

import {Section, Article, ArticleContainer, SectionHeaderTextBox, TextBoxPreface, TextBox, InlineContainerStyled,} from '../styled-components/common/Sections';
import {ImageContainer, } from '../styled-components/common/ImageContainers';

import InlineImageTextboxContainer from '../common/inline-textbox-container';

import CodeSnippet from '../common/Snipet';



class ReduxReactActions extends Component{
    constructor(){
        super();
        this.state={
            code_snippets: [],
            images:{}
        }
    }

    componentWillMount(){
        this.getSnippets();
        this.setImages();
        this.setCodeSnippets();
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    getSnippets =()=>{
        this.props.get_010_redux_react_actions_snippets();
    };

    setCodeSnippets=()=>{
        this.setState({
            code_snippets: this.props.set_redux_react_actions_snippets.code,
        })
    };

    setImages=()=>{
        this.setState({
            images: this.props.set_images
        })
    };


    render(){

        let {code_snippets} = this.state;
        let {reactReduxlogo, createType} =this.state.images;

        return(
            <React.Fragment>
                <ThemeProvider theme={{paddingTop: '4em'}}>
                    {/*HEADER*/}
                    <Section>
                        <SectionHeaderTextBox>
                            <h1>Redux Actions with React</h1>
                            <h2>Creating a Submit Form</h2>
                        </SectionHeaderTextBox>

                        <Article>

                            <ArticleContainer>
                                {/*Hero Img container*/}
                                <ThemeProvider theme={reactReduxlogo.container_properties}>
                                    <ImageContainer>
                                       <img src={reactReduxlogo.img_properties.src} alt=''/>
                                    </ImageContainer>
                                </ThemeProvider>

                                <TextBoxPreface>
                                    <h3>Before We Start</h3>
                                    <p>On a high level overview, things to keep in mind while working in Redux: </p>
                                    <ul>
                                        <li>- an action's job is to get data from within our app. </li>
                                        <li>- the reducer's job is where the data returned from the action is stored.</li>
                                        <li>- with the .connect() from react-redux library, mapStateToProps and MapDispatchToProps React Components can access and interact with redux data stored in the reducer.   </li>
                                    </ul>
                                </TextBoxPreface>

                            </ArticleContainer>
                        </Article>
                    </Section>
                </ThemeProvider>

                {/*PART I : Action And Reducer Setup*/}
                <Section >
                    <SectionHeaderTextBox>
                        <h2>PART I : Action And Reducer Setup</h2>
                    </SectionHeaderTextBox>

                    <Article>

                        {/*INLINE IMAGE*/}
                        <ArticleContainer>
                            <h2>Create actions.js</h2>
                            <InlineImageTextboxContainer image={createType} alt='' />
                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Create Type</h2>

                            <TextBox>
                                <p>Inside types.js, create a create a variable name for the action that we'll export. Set it to a string that is equal to the variable name.  </p>
                            </TextBox>

                            {/*CreateType*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-type'
                                tabName='types.js'
                            />
                        </ArticleContainer>


                        <ArticleContainer>
                            <h2>Anatomy Of  A Redux Action </h2>
                            <TextBoxPreface>

                                <p> "Keep in mind that an action in Redux is a function that returns back an object" (make sure to cite me)
                                    The object must have a type. Think of the type as a unique identifier for behaviors and actions you want your site to perform.
                                    At the end of each action you create, you can collect pieces of data that are associated examples such as user interaction, interacting with api's, and ultimately make updates to change's in your app's state.
                                </p>

                                <p>For these notes, we'll be passing in a user's data form an input form: </p>

                                {/*<p>now go to auth-actions.js </p>*/}
                            </TextBoxPreface>

                            {/*AnatomyOfReduxAction*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='anatomy-of-redux-action'
                                tabName='actions.js'
                            />

                            <TextBox>
                                <p>
                                    Just wanted to point out that if you want to interact with or manipulate data before it gets returned, you can do that above the return.
                                    For example, what if you need to take a calendar date and convert it to epoch time for your database.
                                    Let's now take a look at the the action we are creating feeds back data
                                </p>
                            </TextBox>
                        </ArticleContainer>


                        <ArticleContainer>
                            <h2>Anatomy of the Reducer</h2>
                            <TextBox>
                                <p> A reducer consists of these 3 parts: </p>
                            </TextBox>


                            {/*AnatomyOfTheReducer*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='anatomy-of-the-reducer'
                                tabName='reducer.js'
                            />


                            <TextBox>
                                <ul>
                                    <li>1.) The Type: The name of the action get's registered with the reducer </li>
                                    <li>2,) Initial State: Contains app's initial state : initial state can get modified based on the data within the object returned from an action function. </li>
                                    <li>3.) The reducer: Simply is a function containing a switch case. The reducer will house specified data returned by a specified action in Redux store.</li>
                                </ul>
                            </TextBox>
                        </ArticleContainer>


                        <ArticleContainer>
                            <h2>Add a Case to the Reducer</h2>
                            <TextBox>
                                <p>  Below, I've added our test case into the reducer's switch statement.. </p>
                            </TextBox>

                            {/*AddCaseToReducer*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='add-case-to-reducer'
                                tabName='reducer.js'
                            />

                            <TextBox>
                                <p><i className="em em-one"/> The case is the identifier from types.js for the speficied action we want to trigger.</p>
                            </TextBox>

                            <TextBox>
                               <p><i className="em em-two"/> Notice that the switch statement returns an object.
                                   Every case you set up in the reducer will always return back an object which contain the values you want to store in the Redux store.</p>
                            </TextBox>

                            <TextBox>
                             <p><i className="em em-three"/> The reducer in this example returns two things: </p>
                                <ul>
                                    <li><i style={{width: '1em'}} className="em em-a"/>  <b>...state</b> : With es6 sytax, we can take advantage of the spread operator. <br/>
                                        <div style={{position: 'relative', right: '-5em', width: '80%' }} className='list-item-textbox'>
                                            What "<i>...state</i>" simply means is return all the current values that exist in state. <br/>
                                            In this case, state contains a key of <i><b>isAutheticated</b></i> with a value of <i><b>false</b></i> and a key of <i><b>user</b></i> with an empty object as it's value. <br/>
                                            The spread operator is syntactical sugar which saves us from having to explicityly state each key contained in the object.
                                        </div>
                                    </li><br/>

                                    <li><i style={{width: '1em'}} className="em em-b"/> <b>user: action.payload</b> </li>
                                        <div style={{position: 'relative', right: '-5em', width: '80%' }} className='list-item-textbox'>
                                            <p>Here, we're simply going to append the data returned from the action's payload into the previously empty user object within the reducer's initial state.</p>
                                        </div><br/>
                                </ul>
                            </TextBox>

                        </ArticleContainer>
                    </Article>
                </Section>

                {/*PART II : Component SetUp*/}
                <Section >
                    <SectionHeaderTextBox>
                        <h2>PART II : Component SetUp</h2>
                    </SectionHeaderTextBox>

                    <Article>
                        <ArticleContainer>
                            <h2>Connect from react-redux  </h2>

                            <TextBox>
                                Onto the component. Go ahead and import .connect() from 'react-redux library AND import the registerUser action from action/actions.js
                            </TextBox>


                            {/*ImportConnectAndAction*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='import-connect-and-action'
                                tabName='Register.js'
                            />



                            <h2>Connect action to Component</h2>
                            <TextBox>
                                <p> Currently, our component is unaware of the redux store which contains various pieces of state within our app.</p>
                                <p>in order to render our component, its export looks like this:</p>
                            </TextBox>

                            {/*PreviousExportOfComp*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='previous-export-of-comp'
                                tabName='Register.js'
                            />

                            <TextBoxPreface>
                                <p>In order to grant our component access to state data contained within the redux store, we'll need to create a jucttion allowing our React component access to Redux data.  </p>
                                <p>The connect function takes two arguments in order to achieve this connection; connect will state and an action.  For now, I'm going to pass in <b><i>null</i></b> in place of state and <b><i>registerUser</i></b> as the action to get us up and running w/o having our app crash. <br/>
                                    Keep in mind that within connect(),  I will later re-define state's null value and actions single action of <i>registerUser</i> with an object that will contain multiple functions associated with the registerUser component<br/>
                                </p>
                                <p>  For now; our export default should look like below:</p>
                            </TextBoxPreface>

                            {/*ConnectActionToComp*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='connect-action-to-comp'
                                tabName='Register.js'
                            />

                            <TextBox>
                                <p>Now that we've established a connection between React and Redux via .connect(), if we were to console.log props, we will see that our registerUser action is now a part of the component props. </p>
                            </TextBox>

                            <h3>TODO : PUT A PIC OF THE CONSOLE LOG RESULTS</h3>

                            <TextBox>
                                <p>We'll comeback to the connect function later after we've set up more of our React component's functionality.</p>
                                <p>For now, let's move onto setting our component so that it can pass data from the component over to our regiserUser action </p>
                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <ArticleContainer>
                            <h2>Create a Submit Form</h2>
                            <h3>Set Up Component State</h3>

                            {/*CreateRegisterUserCompInitState*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-register-user-comp-init-state'
                                tabName='Register.js'
                            />


                            <TextBox>
                                <p>Pretty standard of for this portion: we've created the <span className='highlight-text text-cyan'>keys</span> within our Register component's <span className='highlight-text text-lime'>state</span> which resides inside the constructor that contain
                                    empty strings initially when the component renders. We'll continue to set up the component so that once the user
                                    submits theie data, the component state gets updated by what the user types into the form field. </p>
                            </TextBox>

                            <h2>Set Up the User Form Fields</h2>
                            <h3>Input Fields : Name and Value</h3>

                            {/*CreateFormSubmitNameAndValue*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-form-submit-name-and-value'
                                tabName='Register.js'
                            />

                            <TextBox>
                                <p>Inside the return of our component, let's have it render the form inputs and the submit button </p>
                                <p>Make sure that each form input contains attributes for <span className='highlight-text text-orange'><b><i>"name"</i></b></span> and  <span className='highlight-text text-red'><b><i>'value' </i></b></span> so that way we can target the data entered into each input.  </p>
                            </TextBox>

                            <TextBoxPreface>
                                <h2>Keep in mind...</h2>
                                <p>A point of emphasis and some important things to keep in mind regarding the logic of setting up a React component to communicate with redux: </p>
                                <ul>
                                    <li>name: We define name for the input so that later, we can target the particular input and derive the data entered into the form form the user.</li>
                                    <br/>
                                    <li>value : The value attribute for our input fields is equal to the values we just created for the state of our register component:
                                        When the component initially loads, the form values are empty strings.
                                        As continue to build up our form submit form, keep in mind that our goal is to get the form data into the component state. This way, we create a place to pull the datat and send it to our Redux action.</li>
                                </ul>
                            </TextBoxPreface>

                            <h2>Set Up Input Functionality</h2>
                            <h3>Input Fields: onChange and onSubmit</h3>
                            {/*CreateFormOnSubmitAndOnChange*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-form-onSubmit-and-onChange'
                                tabName='Register.js'
                            />
                            <TextBox>
                                text about onchange and on submit
                                <p>Pass the <span className='highlight-text yellow-green-text'><b><i>"onClick"</i></b></span> listener to the form submit button and give onClick a value equal to a function. In this exmple , we'll call it <span className='highlight-text text-yellow'><b><i>"onSubmit" </i></b></span></p>
                                <p>Pass the <span className='highlight-text text-pink '><b><i>"onChange"</i></b></span> listener to the form input and give onClick a value equal to a function. In this exmple , we'll call it <span className='highlight-text text-hotpink'><b><i>"onInputChange" </i></b></span></p>
                            </TextBox>
                           <h3>At this point...</h3>
                            <TextBox>
                                Up to this part, we've set up parts of our component that are nessesary in order to pass the data coming from our  React component which contains our form submit:
                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>

                        <ArticleContainer>
                            <h2>Create onInputChange Action in the Component</h2>
                            <h3>Set Up onInputChange Function</h3>

                            <TextBox>
                                <p>Let's go ahead and set up the <span className='highlight-text text-hotpink'>onInputChange</span> function inside our registerUser component .....</p>
                            </TextBox>

                            {/*CreateOnInputChangeAction*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-onInputChange-action'
                                tabName='Register.js'
                            />


                            <TextBox>
                                <ul>
                                    <li>Pass an event into <span className='highlight-text text-hotpink'><b><i>onInputChange</i></b></span></li>
                                    <li>Use this.setState() to update coponent state</li>
                                    <li>set the key equal to [event.target. <span className='highlight-text text-orange'>name</span>]</li>
                                    <li>set the value equal to event.target.<span className='highlight-text text-red'>value</span></li>
                                </ul>
                            </TextBox>
                            <TextBoxPreface>
                                <h3>So what's happening here?</h3>
                                <p>Describe how this function is bound to the comp via es6</p>
                                <p>mention that this function's sole responsibility is to listen for changes in the form via onChange</p>
                                <p>Any changes are stored in the component state</p>
                            </TextBoxPreface>

                        </ArticleContainer>




                        <ArticleContainer>
                            <h2>Create onSubmit Action in the Component</h2>
                            <h3>Set Up onSubmit Function</h3>

                            <TextBox>
                                <p>So now that we have our form data in comp state, it's time to do something with that data. What we'll do is begin to pass that data from comp state into an object THEN, ship that object over to registerUser action in redux</p>
                                <p>Since we've already appended the redux action (registerUser) to components props, we simply call this.props.registerUser and pass in the newUser object </p>
                                <p>Let's go ahead and set up the <span className='highlight-text text-yellow'>onSubmit</span> function inside our registerUser component that will take an object containing data from a form submit the user will filll out :</p>
                            </TextBox>

                            {/*CreateOnSubmitCompAction*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-on-submit-comp-action'
                                tabName='Register.js'
                            />


                            <TextBoxPreface>
                                <h3>Passing the data from component state to Redux store</h3>
                                <p> The onSubmit function takes an event which will be when the user clicks the submit button.</p>
                                <p>We'll append the .preventDefault() method to the event arg to prevent the page from refreshing everytime the submit button is clicked </p>
                                <p>Last, we create a const of <span className='highlight-text text-purple'>newUser</span> which is an object where the keys represent the form input names. The values for each of the keys within newUser are directly linked to the register component's <span className='highlight-text text-lime'>state</span>.</p>
                                <p>This <span className='highlight-text text-purple'>newUser</span>  object is what we'll pass to our Redux <span className='highlight-text text-red'>registerUser()</span> Redux action in order to update our App's data contained in the store. Before we can pass this datat to redux, we'll still need to wire up a few more things to our React component. Let's continue reading so we can do that. </p>
                            </TextBoxPreface>

                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <ArticleContainer>
                            <h2>Connecting React to Redux</h2>
                            <TextBoxPreface>
                                <h2>How is everything connected?</h2>
                                <p>Before we continue, I want to stress the important roles that these two functions provide. For both of these functions, their names are very telling of what each function will do:</p>
                                <ul>
                                    <li><b><i className='highlight-text text-blue'>mapStateToProps</i></b>: This function will take the state values stored in our redux store and append it to the props of our React form submit component.
                                        This function allows our form submit component to interact with the data stored in Redux.
                                        At any point we need to work with the data from the redux store within the form component, we can access the store data by calling on the key we created within the reducers/index.js.
                                        Recall that we set up auth as the key and it's value is derived from authReducer.js
                                    </li>
                                    <br/>
                                    <li><b><i className='highlight-text peach-text'>mapDispatchToProps</i></b>: Similar to how mapStateToProps appends the values for our Redux store to the props of our form component, mapDispatchToProps instead appends the Redux actions we create to the form submit component
                                    </li>
                                </ul>
                                <p>When both mapStateToProps and mapDispatchToProps are set up within our React component, we can call them in our React componnets by calling this.props. Let's continue to see how both these methods work in practice.</p>
                            </TextBoxPreface>

                            <h2>Set up mapStateToProps</h2>
                            <TextBox>
                                <p>Start by including <span className='highlight-text text-blue'>mapStateToProps</span> directly AFTER the component and BEFORE the export.</p>
                            </TextBox>

                            {/*CreateMapStateToProps*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-mapStateToProps'
                                tabName='Register.js'
                            />

                            <TextBox>
                                <p>Let's examine the basic antomey required to set up for mapStateToProps:</p>
                                <ul><i className="em em-one"/> <b>state: </b> This is the FROM REDUX, not the component state. The state getting passed in referes to reducers/index.js which is the obect that contains all the reducers within our app </ul>
                                <ul><i className="em em-two"/><b> auth:</b> auth is simply a key name we define inside mapStateToProps. You can name this whatever you want but, in order to keep things organizied I've chosen to give it the same value we defined in reducers/index.js which is also named auth.</ul>
                                <ul><i className="em em-three"/> <b>state.auth:</b> state.auth explicityly poiints to the the auth reducer stored within the state object from reducers/index.js.</ul>

                                <p></p>
                            </TextBox>

                            <h2>Set up mapDispatchToProps</h2>
                            <TextBoxPreface>
                                <h2>Keep in mind where regiserUser is Coming from..</h2>

                                <InlineContainerStyled>
                                    <TextBox>
                                        <p>Reacll in PART I : Anatomy Of A Redux Action ,</p>
                                    </TextBox>

                                        {/*RevisitAnatomyOfReduxAction*/}
                                        <CodeSnippet
                                            code_snippets={code_snippets}
                                            codeKey='revisit-anatomy-of-redux-action'
                                            tabName='actions.js'
                                        />

                                </InlineContainerStyled>

                                <InlineContainerStyled>
                                    <TextBox>
                                        <p>Reacll in PART II : Component SetUp , we imported registerUser from actions.js</p>
                                    </TextBox>

                                    {/*RevisitImportConnectAndAction*/}
                                    <CodeSnippet
                                        code_snippets={code_snippets}
                                        codeKey='revisit-import-connect-and-action'
                                        tabName='Register.js'
                                    />
                                </InlineContainerStyled>

                            </TextBoxPreface>


                            <TextBox>
                                <p>Since we've exported our redux action from actions.js AND imported it into our Register component, into mapDispatchToProps. </p>
                                <p>mapDispatchToProps will ALWAYS return back an object.</p>
                                <p>Now, set up <span className='highlight-text peach-text'>mapDispatchToProps</span> directly AFTER the mapStateToProps. I've decided to give a key of registerUser. It's value will equal <span className='highlight-text text-red'>registerUser</span></p>
                            </TextBox>
                            {/*CreateMapDispatchToProps*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-mapDispatchToProps'
                                tabName='Register.js'
                            />

                        </ArticleContainer>


                        <ArticleContainer>
                            <h2>Connect mapStateToProps and mapDispatchToProps to Component</h2>

                            <TextBoxPreface>
                                <h2>Make Final Changes within connect</h2>
                                <p>Reacll that in that when we first started this section, our Register component exported the connect() method: Inisde the <span className='highlight-text text-yellow'>connect()</span> method, we passed in null in place of our App's state from the reducer and registerUser in place of our actions from actions.js </p>
                                <p>As a reminder, this is what it looked like:</p>
                                {/*ConnectActionToComp*/}
                                <CodeSnippet
                                    code_snippets={code_snippets}
                                    codeKey='connect-action-to-comp'
                                    tabName='Register.js'
                                />

                            </TextBoxPreface>

                            <TextBox>
                                <p>Now , that we've passed in our app's Redux state from the reducer into mapStateToProps and our actions are stored in mapDispatchToProps, we can now include them into the <span className='highlight-text text-yellow'>connect()</span> method of our Register component: </p>
                            </TextBox>

                            {/*ConnectMapStateToProps*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='connect-mapStateToProps-and-mapDispatchToProps'
                                tabName='Register.js'
                            />

                        </ArticleContainer>
                    </Article>
                </Section>

                {/*PART III : Component SetUp*/}
                <Section >
                    <SectionHeaderTextBox>
                        <h2>PART III : Test Connection Between React and Redux</h2>
                    </SectionHeaderTextBox>

                    <Article>
                        <ArticleContainer>
                            <h2>Verify React Data makes it over to Redux</h2>
                            <TextBoxPreface>
                                <p>Let's summarize what we've done up to this point:</p>
                            </TextBoxPreface>


                            <h2>ADD THESE LAST TWO IN LATER IF YOU NEED THEM</h2>
                            <h2>Deconstruct Props and State</h2>
                            {/*DeconstructPropsAndState*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='deconstruct-props-and-state'
                                tabName='Register.js'
                            />

                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Create Case in the Reducer</h2>
                            {/*CreateCaseInReducer*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='create-case-in-reducer'
                                tabName='Register.js'
                            />
                        </ArticleContainer>
                    </Article>
                </Section>

                {/*PART VI : Conditional Rendering In the Component*/}
                <Section>
                    <SectionHeaderTextBox>
                        <h2>PART VI : Conditional Rendering In the Component</h2>
                    </SectionHeaderTextBox>
                    <Article>
                        <ArticleContainer>
                            <h2>Conditionally render App State</h2>
                            {/*ConditionalRenderInitState*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='conditional-render-init-state'
                                tabName='Register.js'
                            />

                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Import propTypes</h2>
                            {/*ImportPropTypes*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='import-prop-types'
                                tabName='Register.js'
                            />

                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Register propTypes</h2>
                            {/*RegisterPropTypes*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='register-propTypes'
                                tabName='Register.js'
                            />

                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Summary</h2>
                            {/*ReduxReactActionsSummary*/}
                            <CodeSnippet
                                code_snippets={code_snippets}
                                codeKey='redux-react-actions-summary'
                                tabName='Register.js'
                            />

                        </ArticleContainer>

                    </Article>
                </Section>
            </React.Fragment>
        )
    }
};

const mapDispatchToProps ={
    get_010_redux_react_actions_snippets,
    get_images_010_redux_react_actions,
};

const mapStateToProps = (state)=>({
    set_redux_react_actions_snippets : state.code_snippets,
    set_images : state.images.images_010_react_redux_actions
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxReactActions)
