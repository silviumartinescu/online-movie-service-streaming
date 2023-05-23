'use strict'

const api_key = 'b11b1adf41fea93b12a7421bf293f00e';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * fetch data from a server using the 'url' and passes
 * the result in JSON data to a 'callback' function,
 * along with an optional parameter if it has 'optionalParam'
 */

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer }