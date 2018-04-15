import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    render() {
        return (
            <div className="test">
                {Object.values(this.props.articles).map((article) => (
                    <Article
                        key={article.id}
                        article={article}
                        actions={this.props.actions}
                    />
                ))}
            </div>
        );
    }
}

export default ArticleList;