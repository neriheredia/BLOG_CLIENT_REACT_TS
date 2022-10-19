import { publicBaseURL } from '@/settings';
import { loadAbort } from '@/utilities';

export const getPosts = () => {
  const controller = loadAbort();
  return {
    call: publicBaseURL.get('post', { signal: controller.signal }),
    controller,
  };
};