import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//grab all the dependencies and inject them through the components for them to use em
import config from "./config";
import { MovieDb } from "./api/moviedb";
import { enrichSearchResults } from "./api/transformers/data";

const dataEnricher = enrichSearchResults(config);
const movieAPI = MovieDb(config);
/**
 * Render the main app and pass through the dependencies
 */
ReactDOM.render(<App moviedb={movieAPI} dataEnricher={dataEnricher} />, document.getElementById('root'));
