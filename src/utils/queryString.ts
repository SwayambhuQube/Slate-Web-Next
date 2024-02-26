/**
 * Creates a query string from an object of key-value pairs.
 * @param object - The object containing the key-value pairs.
 * @returns The generated query string.
 */
export const createQueryString = (object: Record<string, string>) => {
  let returnParams = "";
  const params = new URLSearchParams();
  Object.keys(object).forEach((key: string, i: number) => {
    params.set(key, object[key]);
    let add = Object.keys(object).length === i ? "" : "&";
    returnParams = params.toString() + add;
  });
  return returnParams;
};

/**
 * Creates a query object from a query string.
 * @param queryString - The query string to parse.
 * @returns An object representing the key-value pairs in the query string.
 */
export const createQueryObject = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  const object: Record<string, string> = {};
  params.forEach((value: string, key: string) => {
    object[key] = value;
  });
  return object;
};
