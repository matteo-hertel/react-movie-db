/**
 * Let's thorow a bit of functional programming in, a pure function that
 * adds and API key to a url, changing slightly based if it's first in the chain or not
 * the idea is to have something like:
 * 
 * addApiKey("https://google.com", "my-api-key", true)
 * 
 * to return 
 * 
 * https://google.com?api_key=my-api-key
 * 
 * 
 * @export
 * @param {string} url 
 * @param {string} api_key 
 * @param {boolean} [first_chain=false] 
 * @returns string
 */
export function addApiKey(url, api_key, first_chain = false) {
    return `${url}${first_chain ? "?" : "&"}api_key=${api_key}`;
}
/**
 * same principle as above
 * 
 * @export
 * @param {string} url 
 * @param {string} query
 * @param {boolean} [first_chain=false] 
 * @returns string
 */
export function addQuery(url, query, first_chain = false) {
    return `${url}${first_chain ? "?" : "&"}query=${encodeURIComponent(query)}`;
}

//All the default values should be in some sort of config this is just a PoC

/**
 * same principle as above
 * 
 * @export
 * @param {string} url 
 * @param {string} [filter="false"] 
 * @param {boolean} [first_chain=false] 
 * @returns string
 */
export function addAdultFilter(url, filter = "false", first_chain = false) {
    return `${url}${first_chain ? "?" : "&"}include_adult=${filter}`;
}
/**
 * same principle as above
 * 
 * @export
 * @param {string} url 
 * @param {string|int} [page="1"] 
 * @param {boolean} [first_chain=false] 
 * @returns string
 */
export function addPagination(url, page = "1", first_chain = false) {
    return `${url}${first_chain ? "?" : "&"}page=${page}`;
}
/**
 * same principle as above
 * 
 * @export
 * @param {string} url 
 * @param {string} [language="en-GB"] 
 * @param {boolean} [first_chain=false] 
 * @returns string
 */
export function addLanguage(url, language = "en-GB", first_chain = false) {
    return `${url}${first_chain ? "?" : "&"}language=${language}`;
}