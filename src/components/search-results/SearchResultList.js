import React, { Component } from 'react';
import './SearchResultList.css';
/**
 * Stateless component to render a set of items and notify the parent if one item has been clicked
 * 
 * @class SearchResultList
 * @extends {Component}
 */
class SearchResultList extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
    }
    render() {
        if (!this.props.items.length && !this.props.loading) {
            return (<div>Search for a movie</div>);
        }
        if (this.props.loading) {
            return (<div>Loading, please wait</div>);
        }
        let items = this.props.items.map((i, key) => {
            return <div className="search-result-list-card" key={key} onClick={() => this.clickHandler(key)}>
                <div className="search-result-list-image">
                    <img src={(i.backdrop_path || `https://placehold.it/450x200?text=Missing+Image`)} alt={i.title} />
                </div>
                <div className="search-result-list-info">
                    <h1>{i.title}</h1>
                    <p>{i.overview}</p>
                </div>
            </div>
        });
        return (<div>{items}</div>);
    }
    /**
     * function from the parent to notify the selected state of an item
     * 
     * @param {any} key 
     * @memberof SearchResultList
     */
    clickHandler(key) {
        this.props.setSelected(key);
    }

}

export default SearchResultList;