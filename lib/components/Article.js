import React, { Component } from 'react';

class Article extends Component {
    render() {
        const { article, actions } = this.props;
        const author = actions.lookupAuthor(article.authorId);
        return (
            <div>
                <div>{article.title}</div>
                <div>{article.date}</div>
                <div><a href={author.website}>{author.firstName}{author.lastName}</a></div>
                <div>{article.body}</div>
            </div>
        );
    }
}

export default Article;