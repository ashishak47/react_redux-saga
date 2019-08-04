import { ARTICLES } from '../constants';
import { ARTICLE } from '../constants';
import { COMMENTS } from '../constants';
import { PAGE } from '../constants';

// ###load articles
const loadArticlesPending = (url) => ({
    type: ARTICLES.ARTICLES_LOAD,
    url
});

const setArticles = (articles) => ({
    type: ARTICLES.ARTICLES_LOAD_SUCCESS,
    articles,
});

const loadArticlesFail = (error) => ({
    type: ARTICLES.ARTICLES_LOAD_FAIL,
    error
});

//### delete article
const deleteArticle = (articleId) => ({
    type: ARTICLES.ARTICLE_DELETE_SUCCESS,
    id: articleId
});

const deleteArticlePending = (payload) => ({
    type: ARTICLES.ARTICLE_DELETE_PENDING,
    payload
});

const deleteArticleFail = (error) => ({
    type: ARTICLES.ARTICLE_DELETE_FAIL,
    error
});


//##add Article
const addArticle = (newArticle) => ({
    type: ARTICLES.ARTICLE_ADD_SUCCESS,
    newArticle
});

const addArticlePending = (payload) => ({
    type: ARTICLES.ARTICLE_ADD_PENDING,
    payload
});

const addArticleFail = (error) => ({
    type: ARTICLES.ARTICLE_ADD_FAIL,
    error
});

//###load comments
const setComments = (comments) => ({
    type: COMMENTS.COMMENTS_LOAD_SUCCESS,
    comments,
});

const loadCommentsPending = (url) => ({
    type: COMMENTS.COMMENTS_LOAD_PENDING,
    url
});

const loadCommentsFail = (error) => ({
    type: COMMENTS.COMMENTS_LOAD_FAIL,
    error,
});




//###add comments
const addComment = (newComment) => ({
    type: COMMENTS.ADD_COMMENT_SUCCESS,
    newComment,
});

const addCommentPending = (payload) => ({
    type: COMMENTS.ADD_COMMENT_PENDING,
    payload
});

const addCommentFail = (error) => ({
    type: COMMENTS.ADD_COMMENT_FAIL,
    error,
});



//###delete comments
const deleteComment = (commentId) => ({
    type: COMMENTS.COMMENT_DELETE_SUCCESS,
    commentId
});

const deleteCommentPending = (payload) => ({
    type: COMMENTS.COMMENT_DELETE_PENDING,
    payload
});

const deleteCommentFail = (error) => ({
    type: COMMENTS.COMMENT_DELETE_SUCCESS,
    error
});



//### set single article
const setOneArticle = (article) => ({
    type: ARTICLE.LOAD_ONE_ARTICLE_SUCCESS,
    article,
});

const setOneArticlePending = (url) => ({
    type: ARTICLE.LOAD_ONE_ARTICLE,
    url
});

const setOneArticleFail = (error) => ({
    type: ARTICLE.LOAD_ONE_ARTICLE_FAIL,
    error,
});


//###set total pages
const setTotalPages = (totalPages) => ({
    type: PAGE.SET_TOTAL_PAGES,
    totalPages
});

const setTotalPagesPending = (totalPages) => ({
    type: PAGE.SET_TOTAL_PAGES_PENDING,
    totalPages
});

const setTotalPagesError = (error) => ({
    type: PAGE.SET_TOTAL_PAGES_FAIL,
    error
});


//set current page
const setCurrentPage = (currentPage) => ({
    type: PAGE.SET_CURRENT_PAGE,
    currentPage
});

const setCurrentPagePending = (currentPage) => ({
    type: PAGE.SET_CURRENT_PAGE_PENDING,
    currentPage
});

const setCurrentPageFail = (error) => ({
    type: PAGE.SET_CURRENT_PAGE_FAIL,
    error
});

export {
    loadArticlesPending,
    setArticles,
    loadArticlesFail,

    deleteArticle,
    deleteArticlePending,
    deleteArticleFail,

    addArticle,
    addArticlePending,
    addArticleFail,

    setOneArticle,
    setOneArticlePending,
    setOneArticleFail,

    setComments,
    loadCommentsPending,
    loadCommentsFail,

    addComment,
    addCommentPending,
    addCommentFail,


    deleteComment,
    deleteCommentFail,
    deleteCommentPending,

    setTotalPages,
    setTotalPagesPending,
    setTotalPagesError,

    setCurrentPage,
    setCurrentPageFail,
    setCurrentPagePending
}