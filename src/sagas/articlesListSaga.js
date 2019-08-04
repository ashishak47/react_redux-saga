import { takeLatest, put, call } from 'redux-saga/effects'
import { getData, postData, deleteData } from '../services/services.js';
import { setArticles, loadArticlesFail, setTotalPagesPending, addArticle, addArticleFail, deleteArticleFail, deleteArticle } from '../actions';
import { ARTICLES } from '../constants';

function* fetchPosts(action) {
    try {
        const articles = yield call(getData, action.url)
        yield put(setArticles(articles.result));

        //check this thing
        yield put(setTotalPagesPending(articles._meta.pageCount))
    } catch (error) {
        yield put(loadArticlesFail(error))
        console.error(error) // eslint-disable-line

    }
}

export function* watchFetchPosts() {
    yield takeLatest(ARTICLES.ARTICLES_LOAD, fetchPosts)
}


function* addArticleSaga(action) {
    try {
        const articles = yield call(postData, action.payload.url, action.payload.payload)
        yield put(addArticle(articles.result));

    } catch (error) {
        yield put(addArticleFail(error))
        console.error(error) // eslint-disable-line

    }
}

export function* watchAddArticle() {
    yield takeLatest(ARTICLES.ARTICLE_ADD_PENDING, addArticleSaga)
}

function* deleteArticleSaga(action) {
    try {
        let response = yield call(deleteData, action.payload.url)
        if (response._meta.success) {
            yield put(deleteArticle(action.payload.id));
        }
        else {
            yield put(deleteArticleFail(response._meta.message))
        }



    } catch (error) {
        yield put(deleteArticleFail(error))
        console.error(error) // eslint-disable-line

    }
}

export function* watchDeleteArticle() {
    yield takeLatest(ARTICLES.ARTICLE_DELETE_PENDING, deleteArticleSaga)
}