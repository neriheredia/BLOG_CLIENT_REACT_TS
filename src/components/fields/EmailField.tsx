import { Input } from '../input';

const EmailField = ({ register, errors }: any) => {
  return (
    <Input
      errors={errors}
      name="email"
      label="Email"
      register={register}
      type="email"
    />
  );
};

export default EmailField;
