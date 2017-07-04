import React, { Component } from 'react';
import './SearchBar.css';
/**
 * Simple component responsible of showing a search bar 
 * and notify the parent when the search term changes
 * 
 * @class SearchBar
 * @extends {Component}
 */
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
    /**
     * 
     * React won't show the value in the input while typing if the value property is not
     * updated, in this case is bounded to the state to update the state to see the changes reflected
     * 
     * @param {event} e 
     * @memberof SearchBar
     */
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.value) {
            //in case there is no value stop the function and don't notify the parent
            return;
        }
        this.props.updateSearchQuery(this.state.value);
    }
}

export default SearchBar;