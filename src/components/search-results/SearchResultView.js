import React, { Component } from 'react';
import './SearchResultView.css';
/**
 * Simple view of the single result, stateless component that has no logic
 * but a simple go back button to notify the parent to go back to the list view
 * 
 * @class SearchResultView
 * @extends {Component}
 */
class SearchResultView extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    /**
     * function from the parent to go back to list view
     * 
     * @memberof SearchResultView
     */
    goBack() {
        this.props.goBack();
    }
    render() {
        return (
            <div>
                <div className="search-result-view-container">
                    <div className="search-result-view-image">
                        <img src={this.props.item.poster_path || `https://placehold.it/250x500?text=Missing+Image`} alt={this.props.item.title} />
                    </div>
                    <div className="search-result-view-info">
                        <h1>{this.props.item.title}</h1>
                        <p>{this.props.item.overview}</p>
                    </div>
                </div>
                <button className="search-result-view-back" onClick={this.goBack}>Back</button>
            </div>
        );

    }

}

export default SearchResultView;