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
 * @returns 
 */
export function addApiKey(url, api_key, first_chain = false) {
    return `${url}${first_chain ? "?" : "&"}api_key=${api_key}`;
}