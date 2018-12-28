import {combineReducers} from 'redux';
import code_snippet_reducer from './code-snippet-reducer'
import images_reducer from './images-reducer'
import navigation_reducer from './navigation-reducer'
import text_reducer from './text-reducer'


export default combineReducers({
    code_snippets : code_snippet_reducer,
    images : images_reducer,
    navigation : navigation_reducer,
    text: text_reducer,
});