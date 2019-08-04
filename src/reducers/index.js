import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import articlesReducer from './articlesReducer';
import commentsReducer from './commentsReducer';

import singleArticleReducer from './singleArticleReducer';
import pagination from './pagination';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    articles: articlesReducer,
    error: errorReducer,

    singleArticle: singleArticleReducer,
    comments: commentsReducer,
    page: pagination
})

export default rootReducer;