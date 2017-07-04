import { addLanguage, addAdultFilter, addPagination, addQuery, addApiKey } from "./transformers/url";


/**
 * High level function that will return the available function
 * to query MovieDB API
 * 
 * Because of the time constraint I might skip some tests or go
 * with questionable choices :)
 * 
 * @export
 * @param {any} config injected configs 
 * @returns Object
 */
export function MovieDb(config) {
    return {
        searchMovies: searchMovies(config), //the search movie is exportable but I'll inject the configs so this module is ready to use
        getMovie: function () { }
    };
}
/**
 * @export
 * @param {any} config requires baseUrl and apiKey
 * this will make this function working with different configs and be highly reusable
 * @returns function
 */
export function searchMovies(config) {
    /**
     * in here maybe a check to see if the required configs are there
     * it's a super small app so for now will skip that just add a comment in the
     * docs above
     */

    /**
     * Name your anonymous functions, it will be extremely helpful while debugging
     * 
     * search function will accept a query in a return a promise (using fetch) to resolve the 
     * HTTP call
     * 
     * @param string query
     * @return Promise
     */
    return function search(query) {
        /**
         * having this hardcoded URL is not good, I'll spend a bit more time adding a better way 
         * to handle the query parameters in a better way
         */
        let url = addLanguage(
            addAdultFilter(
                addPagination(
                    addQuery(
                        addApiKey(`${config.baseUrl}/search/movie`, config.apiKey, true),
                        query)
                )
            )
        )
        return fetch(url)
    }
}