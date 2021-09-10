type returnType = { id: number; data: string }[];
const getSearchResults = async (): Promise<returnType> => {
  const data: returnType = [];
  for (let i = 1; i <= 20; i += 1) {
    data.push({ id: i, data: `data${i}` });
  }

  return new Promise((resolve) => {
    resolve(data);
  });
};

export default getSearchResults;
