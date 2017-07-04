import { MovieDb } from "./../api/moviedb";

const MovieAPI = new MovieDb();
/**
 * Test the high level module in order to have test something ready for production
 * if I have spare time I'll be able to test every single bit
 */
describe("The high level module", function () {

    it('should return an object', () => {
        expect(typeof MovieAPI).toEqual("object"); //I'm sure there is a better way to do this but for now will do
    });
})