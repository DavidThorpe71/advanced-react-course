import React, { Component } from 'react';
import axios from 'axios';
import DataApi from '../dataApi';
import ArticleList from './ArticleList';

class App extends Component {
    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors
    }

    async componentDidMount() {
        const response = await axios.get('/data');
        const api = new DataApi(response.data);

        this.setState(() => {
            return {
                articles: api.getArticles(),
                authors: api.getAuthors()
            };
        });
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