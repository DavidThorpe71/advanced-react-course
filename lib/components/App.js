import React, { Component } from 'react';
import DataApi from '../dataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    // look up author

    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId],
    }

    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                actions={this.articleActions}
            />
        );
    }
}

export default App;