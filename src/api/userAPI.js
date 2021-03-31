import { fetchNoToken } from './generalAPI';

const resource = '/users';

export const loginAPI = async ({ email, password }) => {
  try {
    const action = 'login';
    const credentials = {
      email,
      password,
    };
    const response = await fetchNoToken(
      `${resource}/${action}`,
      credentials,
      'POST'
    );
    const data = await response.json();
    if (data.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (error) {
    console.log('Ha ocurrido un error al tratar el login', error);
    throw error;
  }
};

export const registerAPI = async () => {};
