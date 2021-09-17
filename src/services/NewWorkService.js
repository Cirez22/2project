import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getNewWorkFromApi = async () => {
  const response = await axios.get(`${apiUrl}/newwork`);
  return response;
}

export const getSingleNewWorkFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/newwork/newwork/${id}`);
  return response;
}

export const postNewWorkToApi = async (newwork) => {
  const response = await axios.post(`${apiUrl}/newwork/newwork`, NewWork);
  return response;
}

export const updateNewWorkToApi = async (newwork) => {
  const response = await axios.put(`${apiUrl}/newwor/newwork/${newwork._id}`, newwork)
  return response;
}

export const deleteNewWorkFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/newwork/newwork/${id}`);
  return response;
}