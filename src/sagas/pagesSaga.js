import { takeLatest, put } from 'redux-saga/effects'
import { setTotalPages, setTotalPagesError, setCurrentPage , setCurrentPageFail } from '../actions';

import { PAGE } from '../constants';

function* setTotalPagesValue(action) {
    try {
        yield put(setTotalPages(action.totalPages))
    } catch (error) {
        yield put(setTotalPagesError(error))
        console.error(error) // eslint-disable-line

    }
}

export function* watchTotalPages() {
    yield takeLatest(PAGE.SET_TOTAL_PAGES_PENDING, setTotalPagesValue)
}

function* setCurrentPageValue(action) {
    try {
        yield put(setCurrentPage(action.currentPage))
    } catch (error) {
        yield put(setCurrentPageFail(error))
        console.error(error) // eslint-disable-line

    }
}

export function* watchCurrentPage() {
    yield takeLatest(PAGE.SET_CURRENT_PAGE_PENDING, setCurrentPageValue)
}