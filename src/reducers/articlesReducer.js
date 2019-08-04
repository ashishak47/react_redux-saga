import { ARTICLES } from '../constants'



const articleReducer = (state = [], action) => {
    if (action.type === ARTICLES.ARTICLES_LOAD_SUCCESS) {
        return [...action.articles];
        //    const aArticles = action.articles
        //     return {
        //         ...state, 
        //         aArticles
        //     };
    }

    if (action.type === ARTICLES.ARTICLE_DELETE_SUCCESS) {
        const aRemainingArticles = state.filter(article => action.id !== article.id.toString());

        return aRemainingArticles;
    }

    if (action.type === ARTICLES.ARTICLE_ADD_SUCCESS) {
        return [...state, action.newArticle];
    }
    return state;
}

export default articleReducer;