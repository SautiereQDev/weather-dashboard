export const setParams = (baseURI: string , params : Object) : string => {
  const queryString = Object.entries(params)
	  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
	  .join('&');
  return `${baseURI}?${queryString}`;
};