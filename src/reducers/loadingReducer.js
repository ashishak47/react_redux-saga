import { ARTICLES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case ARTICLES.ARTICLES_LOAD_SUCCESS:
            return false;

        case ARTICLES.ARTICLES_LOAD_FAIL:
            return false;

        case ARTICLES.ARTICLES_LOAD:
            return true;

        default:
            return state;
    }
}

export default loadingReducer;