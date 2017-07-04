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
        return (<div>{JSON.stringify(this.props.item, null, 4)}
            <button onClick={this.goBack}>Back</button>
        </div>);

    }

}

export default SearchResultView;