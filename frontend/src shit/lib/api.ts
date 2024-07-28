import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/messages';

export const sendMessage = async (message: string) => {
  const response = await axios.post(baseUrl, { content: message });
  return response.data;
};

export const fetchMessages = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
