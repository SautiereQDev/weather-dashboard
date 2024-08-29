/**
 * Constructs a URL with query string parameters.
 *
 * @param {string} baseURI - The base URI of the URL.
 * @param {Object} params - The parameters to be included in the query string.
 * @returns {string} - The URL with query string parameters.
 */
export const setParams = (baseURI: string , params : Object) : string => {
  const queryString = Object.entries(params)
	  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
	  .join('&');
  return `${baseURI}?${queryString}`;
};