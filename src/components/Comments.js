import React, { Component } from 'react'
import { connect } from 'react-redux';

import { loadCommentsPending, addCommentPending, deleteCommentPending } from '../actions';

class Comments extends Component {

    componentDidMount() {
        console.log("## componentdidmount " + "comments");
        const id = this.props.postId;
        const url = `/comments?post_id=${id}`;
        this.props.loadCommentsPending(url);
        

    }

    onSubmit = event => {
        const comment = event.target.comment.value;
        if (!comment) {
            return;
        }
        event.target.comment.value = "";
        // const bearer = "pQVlaaSRdI4ZmWjqnCeZxZqzNNYVzZWJ4j-X";
        const id = this.props.postId;
        event.preventDefault();
        const data = {
            body: comment,
            email: "iambatman@gmail.com",
            name: "Batman",
            post_id: id
        };

        this.props.addCommentPending({
            url: "/comments",
            payload: data
        });
    }

    onDeleteComment = commentId => {

        const url = `/comments/${commentId}`;
        this.props.deleteCommentPending({ url: url, id: commentId });
    }

    render() {
        console.log("## render " + " commrnts");

        var comments = this.props.comments;
        if (comments.comments) {
            return (
                <div>
                    <h2>Comments</h2>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div>
                            <textarea name="comment" id="comment" rows="4" cols="50" />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>


                    <table className="comments">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Body</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {comments.comments.map(comment => (
                                <tr key={comment.id}>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                    <td>
                                        {/* <button onClick={(event) => {
                                            event.stopPropagation();
                                            this.onDeleteComment(comment.id);
                                        }} >Delete
                                    </button> */}


                                    <button
                                            onClick={e =>
                                                window.confirm("Are you sure you wish to delete this item?") &&
                                                this.onDeleteComment(comment.id)
                                            }
                                        >Delete
                                    </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            )
        }
        else {
            return (
                <div>
                    NO Comments found!!!!
                </div>
            )
        }
    }

}


const mapDispatchToProps = dispatch => ({
    loadCommentsPending: url => dispatch(loadCommentsPending(url)),
    addCommentPending: payload => dispatch(addCommentPending(payload)),
    deleteCommentPending: payload => dispatch(deleteCommentPending(payload))

});

const mapStateToProps = ({ comments }) => ({
    comments
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);
