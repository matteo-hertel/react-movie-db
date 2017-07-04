import React, { Component } from 'react';
import './SearchResultList.css';

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
            return <li key={key} onClick={() => this.clickHandler(key)}>{JSON.stringify(i, null, 4)}</li>
        });
        return (<ul>{items})</ul>);
    }

    clickHandler(key) {
        this.props.setSelected(key);
    }

}

export default SearchResultList;