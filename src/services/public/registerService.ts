import { loadAbort } from '@/utilities';
import { publicBaseURL } from '@/settings';
import { registerAdapter } from '@/adapters';

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerUser = (user: UserProps) => {
  const controller = loadAbort();
  const userFormatted = registerAdapter(user);
  return {
    call: publicBaseURL.post('auth/register', userFormatted, {
      signal: controller.signal,
    }),
    controller,
  };
};
