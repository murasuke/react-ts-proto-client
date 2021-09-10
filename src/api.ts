import axios, { AxiosResponse } from 'axios';

type PostData = { [index: string]: string };

const request = async (path: string, config = {}): Promise<any> => {
  // const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const response = await axios.get(path, config);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
};

export const getSearchResults = async (arg: { key: string }): Promise<any> =>
  request(`/search?key=${arg.key}`);

export const postPage1 = async (
  postData: PostData,
): Promise<AxiosResponse<any>> => {
  const response = await axios.post('page1', postData);

  return response;
};

export const postPage2 = async (
  postData: PostData,
): Promise<AxiosResponse<any>> => {
  const response = await axios.post('page2', postData);

  return response;
};

export const postPage3 = async (
  postData: PostData,
): Promise<AxiosResponse<any>> => {
  const response = await axios.post('page3', postData);

  return response;
};
