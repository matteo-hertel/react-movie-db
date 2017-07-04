import React, { Component } from 'react';
import './App.css';

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
                    <div>Search Bar</div>
                    <div>Search Results</div>
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
