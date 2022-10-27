import { publicBaseURL } from '../settings/methods/publi.base.url';

export const upload = async (file: any) => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', file.name);
    const response = await publicBaseURL.post('storage/upload', formData);
    return response.data;
  } catch (error) {
    return error;
  }
};
