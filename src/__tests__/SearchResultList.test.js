import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultList from './../components/search-results/SearchResultList';
const setSelected = jest.fn();
const items = [];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResultList loading={false} items={items} setSelected={setSelected} />, div);
});
