import { Input } from '@/components';

const UsernameField = ({ register, errors }: any) => {
  return (
    <Input
      errors={errors}
      name="username"
      label="Username"
      register={register}
      type="text"
    />
  );
};

export default UsernameField;
