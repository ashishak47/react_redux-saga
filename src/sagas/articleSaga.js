import { takeLatest, put, call } from 'redux-saga/effects'
import { getData } from '../services/services.js';
import { setOneArticle, setOneArticleFail } from '../actions';
import {ARTICLE} from '../constants';

function* fetchPost(action) {
    try {
        const article = yield call(getData, action.url)
        yield put(setOneArticle(article.result))
    } catch (error) {
        yield put(setOneArticleFail(error))
        console.error(error) // eslint-disable-line

    }
}

export default function* watchFetchPost() {
    yield takeLatest(ARTICLE.LOAD_ONE_ARTICLE, fetchPost)
}