import { ARTICLES } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case ARTICLES.ARTICLES_LOAD_SUCCESS:
            return null;

        case ARTICLES.ARTICLES_LOAD_FAIL:
            return action.error;

        case ARTICLES.ARTICLES_LOAD:
            return null;

        default:
            return state;
    }
}

export default errorReducer;