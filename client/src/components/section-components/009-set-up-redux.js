import React, {Component} from 'react';
import {connect} from 'react-redux'
import {get_009_set_up_redux_snippets} from '../../actions/code-snippets-actions'
import {get_images_009_setup_redux} from '../../actions/images-actions'
import {ThemeProvider} from 'styled-components'

import {Section, SectionHeaderTextBox, TextBoxPreface, Article, ArticleContainer, TextBox,} from '../styled-components/common/Sections';
import {ImageContainer} from '../styled-components/common/ImageContainers'
import CodeSnippet from '../common/Snipet';


class SetUpRedux extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets: [],
            images: {}
        }
    }
    componentWillMount(){
        this.getSnippets();
        this.setCodeSnippet();
        this.setImages();
    }

    getSnippets =()=>{
        this.props.get_009_set_up_redux_snippets();
    };

    setCodeSnippet =()=>{
        this.setState({
            code_snippets: this.props.set_set_up_redux_snippets.code,
        })
    };

    setImages=()=>{
        this.setState({
            images: this.props.set_images
        })
    };

   render(){
       window.scrollTo(0, 0)
        let {code_snippets, } = this.state;
        let {reduxLogo} = this.state.images;

       console.log( this.state,'whats in here??');

       return(
           <React.Fragment>
               <Section>
                   <SectionHeaderTextBox>
                       <h1>Set Up Redux</h1>
                       <h2>SubHeader </h2>
                   </SectionHeaderTextBox>

                   <Article>
                       <ArticleContainer>
                           <ThemeProvider theme={reduxLogo.container_properties}>
                               <ImageContainer >
                                  <img src={reduxLogo.img_properties.src} alt='' />
                               </ImageContainer>
                           </ThemeProvider>

                           <TextBoxPreface className='article-preface'>
                               <h2>Before We Start</h2>
                               <p>Grocery List of things we will need:</p>
                               <ul>
                                   <li>redux</li>
                                   <li>react-redux</li>
                                   <li>redux thunk</li>
                               </ul>
                           </TextBoxPreface>

                       </ArticleContainer>
                   </Article>
               </Section>

               <Section >
                   <SectionHeaderTextBox>
                       <h2>Install Redux and Its Dependencies</h2>
                       <h2>Part I  </h2>
                   </SectionHeaderTextBox>

                   <Article>
                       <ArticleContainer>
                           <h2>Install via Terminal</h2>
                           <TextBox>
                               <p>  There will be text that describes the picture to the right</p>
                           </TextBox>

                           <CodeSnippet code_snippets={code_snippets}
                               codeKey='install-redux-deps'
                               tabName='terminal'/>

                       </ArticleContainer>
                   </Article>

                   <Article>
                       <ArticleContainer>
                           <h2>Wrap App Component in Provider</h2>
                           <TextBox>
                               <p>  There will be text that describes the picture to the right</p>
                           </TextBox>
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-provider-and-wrap'
                                        tabName='app.js'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Pass Store into Provider</h2>
                           <TextBox>
                               <p>  There will be text that describes the picture to the right</p>
                           </TextBox>
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='pass-store-to-provider'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Define Store App: Temporarilly</h2>
                           <TextBox>
                               <p>  There will be text that describes the picture to the right</p>
                           </TextBox>
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='define-store-var'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Import Create Store And MiddleWare : Temporarily</h2>
                           <TextBox>
                               <p>  There will be text that describes the picture to the right</p>
                           </TextBox>
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-create-store-and-middleware'
                                        tabName='tab-name'/>
                       </ArticleContainer>
                   </Article>
               </Section>


               <Section >
                   <SectionHeaderTextBox>
                       <h2>Setting up the The store.js file</h2>
                       <h2>Part II  </h2>
                   </SectionHeaderTextBox>

                   <Article>
                       <ArticleContainer>
                            <h2>Create a store.js file</h2>
                           {/*CreateStoreJS*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='create-store-js'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Import Thuk Middleware</h2>
                           {/*ImportThunkAndDefineMiddleware*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-thunk-and-define-middleware'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Set Apply Middleware</h2>
                           {/*SetApplyMiddleware*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='set-applymiddleware'
                                        tabName='tab-name'/>
                       </ArticleContainer>
                   </Article>
               </Section>

               <Section >
                   <SectionHeaderTextBox>
                       <h2>Setting up the Index Reducer</h2>
                       <h2>Part III  </h2>
                   </SectionHeaderTextBox>

                   <Article>
                       <ArticleContainer>
                           <h2>Import Combine reducer</h2>
                           {/*ImportCombineReducers*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-combine-reducers'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Import the Auth Reducer</h2>
                           {/*ImportAuthReducer*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-auth-reducer'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>Include Sub Reducer and Export combineReducer </h2>
                           {/*ExportCombineReducers*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='export-combine-reducers'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2> ReducerInitState</h2>
                           {/*ReducerInitState*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='reducer-init-state'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>CreateReducer</h2>
                           {/*CreateReducer*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='create-reducer'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>SetUpSwitchCase</h2>
                           {/*SetUpSwitchCase*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='set-up-switch-case'
                                        tabName='tab-name'/>
                       </ArticleContainer>
                   </Article>
               </Section>

               {/*Back to Store.js SECTION*/}
               <Section>
                   <Article>
                       <ArticleContainer>
                           <h2>ImportRootReducer</h2>
                           {/*ImportRootReducer*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-root-reducer'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>ReviewOfStoreJs</h2>
                           {/*ReviewOfStoreJs*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='review-of-store-js'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>ImportCompose</h2>
                           {/*ImportCompose*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='import-compose'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>SetComposeWithApplyMiddleware</h2>
                           {/*SetComposeWithApplyMiddleware*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='set-compose-with-apply-middleware'
                                        tabName='tab-name'/>
                       </ArticleContainer>

                       <ArticleContainer>
                           <h2>IncludeReduxDevTools</h2>
                           {/*IncludeReduxDevTools*/}
                           <CodeSnippet code_snippets={code_snippets}
                                        codeKey='include-redux-dev-tools'
                                        tabName='tab-name'/>
                       </ArticleContainer>
                   </Article>
               </Section>
           </React.Fragment>
       )
   }
};

const mapDispatchToProps ={
    get_009_set_up_redux_snippets,
    get_images_009_setup_redux,

};

const mapStateToProps = (state)=>({
    set_set_up_redux_snippets : state.code_snippets,
    set_images : state.images.images_009_set_up_redux
});

export default connect(mapStateToProps, mapDispatchToProps)(SetUpRedux)