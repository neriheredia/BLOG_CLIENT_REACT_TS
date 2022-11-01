import { publicBaseURL } from '../settings/methods/publi.base.url';

export const createAndUpdatePost = async (id: string, post: any) => {
  if (id.length) {
    try {
      const response = await publicBaseURL.put(`post/${id}`, post);

      return { status: true, data: response.data, type: 'update' };
    } catch (error: any) {
      return { status: false, data: error.message, type: 'update' };
    }
  }

  try {
    const response = await publicBaseURL.post('post', post);

    return { status: true, data: response.data, type: 'create' };
  } catch (error: any) {
    return { status: false, data: error.message, type: 'create' };
  }
};
