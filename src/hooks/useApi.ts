import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_API_URL,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 1,
        name: 'Vinicius Mendes',
        email: 'vinimendesdev@gmail.com',
      },
    };

    const response = await api.post('/validate', { token });

    return response.data;
  },

  signin: async (email: string, password: string) => {
    return {
      user: {
        id: 1,
        name: 'Vinicius Mendes',
        email: 'vinimendesdev@gmail.com',
      },
      token: 'pihjbgadqsC1548@$piuygdefswAS',
    };

    const response = await api.post('/signin', { email, password });

    return response.data;
  },

  logout: async () => {
    return { status: true };

    const response = await api.post('/logout');

    return response.data;
  },
});
