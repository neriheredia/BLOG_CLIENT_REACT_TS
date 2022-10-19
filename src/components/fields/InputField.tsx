import { Input } from '@/components';

const InputField = ({ errors, label, name, register, type }: any) => {
  return (
    <Input
      errors={errors}
      label={label}
      name={name}
      register={register}
      type={type}
    />
  );
};

export default InputField;
