
import { COMMENTS } from '../constants'

const commentsReducer = (state = {}, action) => {

    if (action.type === COMMENTS.COMMENTS_LOAD_SUCCESS) {
        const comments = action.comments
        return {
            ...state, comments
        };
    }
    if (action.type === COMMENTS.ADD_COMMENT_SUCCESS) {
        const newComment = action.newComment
        return {
            ...state,
            comments: [...state.comments, newComment]
        };
    }
    if (action.type === COMMENTS.COMMENT_DELETE_SUCCESS) {

        const comments = state.comments;
        const aRemainingComments = comments.filter(comment => action.commentId !== comment.id.toString());

        return {
            ...state,
            comments: aRemainingComments
        };
    }
    return state;
}

export default commentsReducer;