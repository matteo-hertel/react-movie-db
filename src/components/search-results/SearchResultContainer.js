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
        this.setSelected = this.setSelected.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.term && nextProps.term !== this.state.term) {
            this.setState({
                term: nextProps.term
            });
        }
        this.searchMovie.bind(this)(nextProps.term);
    }

    searchMovie(query) {
        this.setState({
            loading: true,
            selected: false
        })
        this.props.apiInterface.searchMovies(query)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                console.log(this);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        results: this.props.dataEnricher(data.results)
                    })
                }, 1000);
            });
    }
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