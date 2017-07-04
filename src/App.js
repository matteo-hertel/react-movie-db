import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar/SearchBar';
import SearchResultContainer from './components/search-results/SearchResultContainer';

const state = {
    searchTerm: ""
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = state;
        this.updateSearchQuery = this.updateSearchQuery.bind(this);
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>MovieDB App</h2>
                </div>
                <div className="App-intro">
                    <SearchBar updateSearchQuery={this.updateSearchQuery} />
                    <SearchResultContainer dataEnricher={this.props.dataEnricher} term={this.state.searchTerm} apiInterface={this.props.moviedb} />
                </div>
            </div>
        );
    }

    updateSearchQuery(term) {
        let newState = this.state;
        newState.searchTerm = term;
        this.setState(newState);
    }
}

export default App;
