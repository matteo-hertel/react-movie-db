import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar/SearchBar';
import SearchResultContainer from './components/search-results/SearchResultContainer';

const state = {
    searchTerm: ""
}
/**
 * 
 * Main App, will receive as props the data enricher and the movideDB API package
 * in order to not having business logic tied to the App
 * the app only stores in its state the search query, the SearchResultContainer will be responsible
 * of getting and showing data
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = state; //set the state to the state object defined above
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
    /**
     * this function will be passed to the children to notify the parent on state change
     * 
     * @param {any} term 
     * @memberof App
     */
    updateSearchQuery(term) {
        this.setState({
            searchTerm: term
        });
    }
}

export default App;
