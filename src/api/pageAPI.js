import { fetchToken } from './generalAPI';

const resource = '/shareablelinks';

export const createLinkAPI = async (name, JWT) => {
  try {
    const response = await fetchToken(
      `${resource}/${name}`,
      JWT,
      null,
      'POST'
    );
    const data = await response.json();
    if (data.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (error) {
    console.log('Ha ocurrido un error al tratar de obtener el link', error);
    throw error;
  }
};
