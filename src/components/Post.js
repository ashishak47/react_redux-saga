import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setOneArticle, setOneArticlePending } from '../actions';
import Comments from './Comments';

// import { getData } from '../services/services.js';

class Post extends Component {

    componentDidMount() {
        console.log("## componentdidmount " + " posts");

        const id = this.props.match.params.id;
        const url = `/posts/${id}`;
        this.props.setOneArticlePending(url);
        
    }

    render() {
        console.log("## render " + " posts");

        var singleArticle = this.props.singleArticle;
        if (singleArticle.article){
            return (

                <>
                    <h2>
                       title:  {singleArticle.article.title}
                    </h2>
                    <h4>
                       body:  {singleArticle.article.body}
                    </h4>
                    <br/>
                    <Comments postId={this.props.match.params.id}/>
                </>

            )
        }
        else{
            return(
                <div>
                    NO article found!!!! something went wrong
                </div>
            )
        }
    }

}


const mapDispatchToProps = dispatch => ({
    setOneArticle: article => dispatch(setOneArticle(article)),
    setOneArticlePending: (url) => dispatch(setOneArticlePending(url))
});

const mapStateToProps = ({ singleArticle }) => ({
    singleArticle
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
