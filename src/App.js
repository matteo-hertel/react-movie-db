import React, { Component } from 'react';
import './App.css';

const state = {
    searchTerm: ""
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = state;
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
}

export default App;
