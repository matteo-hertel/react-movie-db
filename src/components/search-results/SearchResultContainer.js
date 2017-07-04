import React, { Component } from 'react';
import SearchResultList from "./SearchResultList"
import SearchResultView from "./SearchResultView"
/**
 * The container is a react structural pattern to deal with those
 * misc components that have the responsibility of making HTTP requests
 * and deal with the results or have some more miscellaneous logic in
 * 
 * this component will be responsible of fetching data
 * and render either the list of the view
 * 
 * @class SearchResultContainer
 * @extends {Component}
 */
class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            results: [],
            selected: false,
            loading: false
        }
        this.setSelected = this.setSelected.bind(this);
    }
    /**
     * when the props on the parent are updated we can get notified by using
     * componentWillReceiveProps, because the props will be empty in the beginning as
     * the user didn't type anything yet, this is perfectly fine
     * 
     * @param {any} nextProps 
     * @memberof SearchResultContainer
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.term && nextProps.term !== this.state.term) {
            this.setState({
                term: nextProps.term
            });
        }
        this.searchMovie.bind(this)(nextProps.term);
    }
    /**
     * Search to movie through the apiInterface injected in the index and passed through
     * 
     * @param {any} query 
     * @memberof SearchResultContainer
     */
    searchMovie(query) {
        //update the state to reflect le loading state of the component
        this.setState({
            loading: true,
            selected: false
        })
        this.props.apiInterface.searchMovies(query)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    loading: false,
                    results: this.props.dataEnricher(data.results)
                })
            })
            .catch(exc => {
                //some sort of error state is needed, no time for it tough
                this.setState({
                    loading: false,
                    results: []
                })
            });
    }
    /**
     * The big idea here is to make only one HTTP call and use the results for both list and view
     * the apiInterface supports getMovieById, but for speed's sake I'll just re-use already in memory data
     * in here the extra HTTP call can be made and the result bounded to the SearchResultView
     * 
     * @param {any} index 
     * @memberof SearchResultContainer
     */
    setSelected(index) {
        this.setState({
            selected: index
        })
    }
    render() {
        if (!this.state.results.length || this.state.selected === false) {
            return (<SearchResultList loading={this.state.loading} items={this.state.results} setSelected={this.setSelected} />);
        }
        return (<SearchResultView item={this.state.results[this.state.selected]} goBack={() => { this.setSelected(false) }} />);
    }
}

export default SearchResultContainer;