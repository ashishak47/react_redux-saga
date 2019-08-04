import { ARTICLE } from '../constants';


const singleArticleReducer = (state = {}, action) => {
    if(action.type === ARTICLE.LOAD_ONE_ARTICLE_SUCCESS){
        const article = action.article
        return {
            ...state, article
        };
    }
    

    return state;
}

export default singleArticleReducer;