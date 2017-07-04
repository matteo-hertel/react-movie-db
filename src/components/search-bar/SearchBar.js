import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (<div className="search-bar-container">
            <form className="search-bar-form" onSubmit={this.handleSubmit}>
                <input className="search-bar-input" placeholder="Search for a movie" type="text" value={this.state.value} onChange={this.handleChange} />
                <input className="search-bar-submit" type="submit" value="Submit" />
            </form>
        </div>
        );
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.value) {
            return;
        }
        this.props.updateSearchQuery(this.state.value);
    }
}

export default SearchBar;