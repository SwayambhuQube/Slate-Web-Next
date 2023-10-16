export const loadMetaData = async (context: string, id: string) => {
  const data = await fetch(
    `https://admin-api.staging.qubeslate.com/api/v0/metadata/get?context=${context}&ids=${id}`
  );
  const response = await data.json();
  //   console.log(response);
  return response;
};
