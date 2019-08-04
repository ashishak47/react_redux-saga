import watchFetchPost from './articleSaga';
import { watchFetchComments, watchAddComment, watchDeleteComment } from './commentsSaga';
import { watchFetchPosts, watchAddArticle, watchDeleteArticle } from './articlesListSaga';
import { watchTotalPages, watchCurrentPage } from './pagesSaga';

import { all } from 'redux-saga/effects'

function *rootSaga(){
    yield all([
        watchFetchPost(),
        watchFetchComments(),
        watchFetchPosts(),
        watchTotalPages(),
        watchAddArticle(),
        watchDeleteArticle(),
        watchAddComment(),
        watchDeleteComment(),
        watchCurrentPage()
      ])
}

export default rootSaga;