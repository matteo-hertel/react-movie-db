/**
 * add the full url to the poster path
 * 
 * @export
 * @param {object} config 
 * @param {object} item 
 * @returns object
 */
export function enrichPosterPath(config, item) {
    if (!item.poster_path) {
        return item;
    }
    item.poster_path = `${config.imagesUrl}/w500/${item.poster_path}`
    return item;
}
/**
 * Add the full url to the backdrop path
 * 
 * @export
 * @param {object} config 
 * @param {object} item 
 * @returns object
 */
export function enrichBackdropPath(config, item) {
    if (!item.backdrop_path) {
        return item;
    }
    item.backdrop_path = `${config.imagesUrl}/w500/${item.backdrop_path}`
    return item;
}

/**
 * Enrich the search result data by adding the URL
 * 
 * @export
 * @param {object} config 
 * @param {array} items 
 * @returns function
 */
export function enrichSearchResults(config) {
    return function dataEnricher(items) {
        return items.map((i) => {
            return enrichBackdropPath(config,
                enrichPosterPath(config, i)
            );
        })
    }
}