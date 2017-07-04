import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultView from './../components/search-results/SearchResultView';
const goBack = jest.fn();
const item = {}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResultView item={item} goBack={goBack} />, div);
});
