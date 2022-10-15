import React from 'react';
import { Input } from '../input';

const PasswordField = ({ register, errors }: any) => {
  return (
    <Input
      errors={errors}
      label="Password"
      name="password"
      register={register}
      type="password"
    />
  );
};

export default PasswordField;
