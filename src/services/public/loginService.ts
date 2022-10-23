import { publicBaseURL } from '@/settings';
import { loadAbort } from '@/utilities';

interface UserProps {
  email: string;
  password: string;
}

export const loginUser = (user: UserProps) => {
  const controller = loadAbort();
  return {
    call: publicBaseURL.post('auth/login', user, { signal: controller.signal }),
    controller,
  };
};
