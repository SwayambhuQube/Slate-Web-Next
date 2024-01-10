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

export const createQueryObject = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  const object: Record<string, string> = {};
  params.forEach((value: string, key: string) => {
    object[key] = value;
  });
  return object;
};
