import { PAGE } from '../constants';

const initialPageState = {
    totalPages: 10,
    currentPage: 0
};

const paginationReducer = (state = initialPageState, action) => {
    switch (action.type) {
        case PAGE.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case PAGE.SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages
            };


        default:
            return state;
    }
}

export default paginationReducer;