import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}

export default SearchBar;