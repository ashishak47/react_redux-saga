import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { USER_ID } from '../services/services.js';

import { addArticlePending, deleteArticlePending, loadArticlesPending, setCurrentPagePending } from '../actions';


class PostList extends Component {

    componentDidMount() {
        const url = this.getArticlesURL(this.props.page.currentPage + 1);
        this.props.loadArticlesPending(url);

        this.props.setCurrentPagePending(this.props.page.currentPage);

    }
    getArticlesURL(selectedPage, userId) {
        let url = "";
        if (!userId)
            url = `/posts?page=${selectedPage}`;
        else
            url = `/posts?page=${1}&user_id=${userId}`;

        return url;
    }


    onPageChange = data => {
        
        const url = this.getArticlesURL(data.selected + 1);

        this.props.loadArticlesPending(url);
        this.props.setCurrentPagePending(data.selected);

    }
    onDeletePost = postId => {
        const url = `/posts/${postId}`;

        this.props.deleteArticlePending({ url: url, id: postId });

    }
    onLoadUsersPosts = () => {
        this.props.setCurrentPagePending(0);
        const user_id = USER_ID;

        const url = this.getArticlesURL(1, user_id);
        this.props.loadArticlesPending(url);
    }

    onLoadAllPosts = () => {
        this.props.setCurrentPagePending(0);
        const url = this.getArticlesURL(1);

        this.props.loadArticlesPending(url);
    }

    onSubmit = event => {
        const title = event.target.title.value;
        const body = event.target.body.value;
        if (!title) {
            return;
        }
        event.target.title.value = "";
        event.target.body.value = "";

        event.preventDefault();
        const data = {
            user_id: USER_ID,
            title: title,
            body: body
        };

        const payload = {
            url: "/posts",
            payload: data
        };

        this.props.addArticlePending(payload);
    }

    render() {
        return (

            <>
                <h2>Add New Article</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" placeholder="title..." name="title" id="title" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="body">Body</label><br />
                        <textarea name="body" id="body" rows="4" cols="50" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>

                <h2>Articles List</h2>

                <button onClick={(event) => {
                    event.stopPropagation();
                    this.onLoadUsersPosts(USER_ID);
                }} >My Posts
                </button>

                <button onClick={(event) => {
                    event.stopPropagation();
                    this.onLoadAllPosts();
                }} >All Posts
                </button>

                <table className="comments">
                    <thead>
                        <tr>
                            <th>Article Id</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.articles.map(article => (
                            <tr key={article.id}>
                                <td>
                                    <Link to={`/post/${article.id}`}>
                                        {article.id}
                                    </Link>
                                </td>
                                <td>{article.title}</td>
                                <td>
                                    {/* <button onClick={(event) => {
                                        event.stopPropagation();
                                        this.onDeletePost(article.id);
                                    }} >Delete
                                    </button> */}

                                    <button
                                        onClick={e =>
                                            window.confirm("Are you sure you wish to delete this item?") &&
                                            this.onDeletePost(article.id)
                                        }
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.props.page.totalPages}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={this.onPageChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    
                    forcePage={this.props.page.currentPage}
                    disableInitialCallback={true}
                    previousClassName={'pages pagination'}
                />


            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadArticlesPending: url => dispatch(loadArticlesPending(url)),
    deleteArticlePending: payload => dispatch(deleteArticlePending(payload)),
    addArticlePending: payload => dispatch(addArticlePending(payload)),
    setCurrentPagePending: currentPage => dispatch(setCurrentPagePending(currentPage))
})

const mapStateToProps = ({ isLoading, articles, error, page }) => ({
    isLoading,
    articles,
    error,
    page
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);