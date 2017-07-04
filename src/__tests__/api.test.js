global.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

import { MovieDb } from "./../api/moviedb";
import config from "./../config";

const MovieAPI = MovieDb(config);
const query = `Wonder Woman`;
const movieId = 297762;
/**
 * Test the high level module in order to have test something ready for production
 * if I have spare time I'll be able to test every single bit
 */
describe("The high level module", function () {

    it('should return an object', () => {
        expect(typeof MovieAPI).toEqual("object"); //I'm sure there is a better way to do this but for now will do
    });

    it('should have a searchMovie function', (done) => {
        // need to add a mock function for fetch, it's doing real HTTP requests ATM
        let request = MovieAPI.searchMovies(query);
        expect(typeof request.then).toEqual("function"); //I'm sure there is a better way to do this but for now will do
        expect(typeof request.catch).toEqual("function"); //I'm sure there is a better way to do this but for now will do
        request.then((data) => {
            expect(data).toBeDefined();
            return data.json();
        })
            .then(json => {
                expect(json).toMatchSnapshot();
                done();
            })
            .catch(exc => {
                expect(exc).toBeUndefined();
                done();
            })
    });

    it('should have a getMovie function', (done) => {
        // need to add a mock function for fetch, it's doing real HTTP requests ATM
        let request = MovieAPI.getMovie(movieId);
        expect(typeof request.then).toEqual("function"); //I'm sure there is a better way to do this but for now will do
        expect(typeof request.catch).toEqual("function"); //I'm sure there is a better way to do this but for now will do

        request.then((data) => {
            expect(data).toBeDefined();
            return data.json();
        })
            .then(json => {
                expect(json).toMatchSnapshot();
                done();
            })
            .catch(exc => {
                expect(exc).toBeUndefined();
                done();
            })
    });
})