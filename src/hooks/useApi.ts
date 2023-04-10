import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_API_URL,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 1,
        name: 'Vinicius Developer',
        email: 'viniciusdeveloper@gmail.com',
        phone: '34999999999',
        birth: '04/04/2023',
        city: 'Uberlândia',
        uf: 'Minas Gerais',
      },
    };

    const response = await api.post('/validate', { token });

    return response.data;
  },

  signin: async (email: string, password: string) => {
    return {
      user: {
        id: 1,
        name: 'Vinicius Developer',
        email: 'viniciusdeveloper@gmail.com',
        phone: '34999999999',
        birth: '04/04/2023',
        city: 'Uberlândia',
        uf: 'Minas Gerais',
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
