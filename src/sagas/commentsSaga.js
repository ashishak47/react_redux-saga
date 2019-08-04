import { takeLatest, put, call } from 'redux-saga/effects'
import { getData, postData, deleteData } from '../services/services.js';
import { setComments, loadCommentsFail, addComment, addCommentFail, deleteComment, deleteCommentFail } from '../actions';

import {COMMENTS} from '../constants';

function* fetchComments(action) {
    try {
        const comments = yield call(getData, action.url)
        yield put(setComments(comments.result))
    } catch (error) {
        yield put(loadCommentsFail(error))

    }
}

export function* watchFetchComments() {
    yield takeLatest(COMMENTS.COMMENTS_LOAD_PENDING, fetchComments)
}

function* addCommentSaga(action) {
    try {
        const newComment = yield call(postData, action.payload.url, action.payload.payload)
        yield put(addComment(newComment.result))
    } catch (error) {
        yield put(addCommentFail(error))

    }
}

export function* watchAddComment() {
    yield takeLatest(COMMENTS.ADD_COMMENT_PENDING, addCommentSaga)
}

function* deleteCommentSaga(action) {
    try {
        let response = yield call(deleteData, action.payload.url)
        if (response._meta.success) {
            yield put(deleteComment(action.payload.id));
        }
        else {
            yield put(deleteCommentFail(response._meta.message))
        }

    } catch (error) {
        yield put(deleteCommentFail(error))
        console.error(error) // eslint-disable-line

    }
}

export function* watchDeleteComment() {
    yield takeLatest(COMMENTS.COMMENT_DELETE_PENDING, deleteCommentSaga)
}