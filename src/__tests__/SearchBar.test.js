import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './../components/search-bar/SearchBar';
const updateSearchQuery = jest.fn();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar updateSearchQuery={updateSearchQuery} />, div);
});
