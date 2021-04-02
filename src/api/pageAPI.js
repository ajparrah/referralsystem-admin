import { fetchNoToken } from './generalAPI';

const resource = '/shareablelinks';

export const createLinkAPI = async (name) => {
  try {
    const response = await fetchNoToken(`${resource}/${name}`, null, 'POST');
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

export const getLinkByNameAPI = async (name) => {
  try {
    const response = await fetchNoToken(`${resource}/${name}`);
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
