import React, { Component } from 'react';
import SearchResultList from "./SearchResultList"
import SearchResultView from "./SearchResultView"

class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            results: [],
            selected: false,
            loading: false
        }
    }

    render() {
        if (!this.state.results.length || this.state.selected === false) {
            return (<SearchResultList />);
        }
        return (<SearchResultView />);
    }
}

export default SearchResultContainer;