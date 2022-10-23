import { loadAbort } from '@/utilities';
import { publicBaseURL } from '@/settings';

export const getCategories = () => {
  const controller = loadAbort();
  return {
    call: publicBaseURL.get('categories', { signal: controller.signal }),
    controller,
  };
};
