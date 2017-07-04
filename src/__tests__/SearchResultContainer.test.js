import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultContainer from './../components/search-results/SearchResultContainer';
const updateSearchQuery = jest.fn();
const dataEnricher = jest.fn();
const apiInterface = jest.fn();
const term = "";
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResultContainer dataEnricher={dataEnricher} term={term} apiInterface={apiInterface} />
        , div);
});
