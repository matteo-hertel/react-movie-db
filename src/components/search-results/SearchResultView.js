import React, { Component } from 'react';
import './SearchResultView.css';

class SearchResultView extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
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