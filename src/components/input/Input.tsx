import { InputBaseProps, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { InputError } from '@/styled-components';

const formValidation = (errors: FieldErrors | any, errorKey: string) =>
  errors[errorKey] ? (
    <InputError className="error-message">
      {errors[errorKey].message}
    </InputError>
  ) : (
    ''
  );

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldErrors;
  label?: string;
  type: string;
  inputProps?: InputBaseProps['inputProps'];
  disabled?: boolean;
  trigger?: UseFormTrigger<any>;
}

export const Input = ({
  disabled = false,
  errors,
  inputProps,
  label = '',
  name,
  register,
  trigger,
  type,
}: InputProps) => {
  return (
    <div>
      <TextField
        {...register(name)}
        {...(inputProps && { inputProps })}
        disabled={disabled}
        error={errors && !!errors[name]}
        fullWidth
        id={name}
        label={label}
        type={type}
        required
        variant="standard"
        onChange={() => trigger && trigger()}
      />
      {errors && formValidation(errors, name)}
    </div>
  );
};

export default Input;
