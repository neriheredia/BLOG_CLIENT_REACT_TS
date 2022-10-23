import * as yup from 'yup';
import { EmailRegex, PasswordRegex } from '@/models';

export const schemaRegister = yup
  .object({
    firstName: yup.string().required('First name is required!').trim(),
    surname: yup.string().required('Surname is required!').trim(),
    email: yup
      .string()
      .email('It must be a valid email!')
      .trim()
      .matches(EmailRegex, 'It must be a valid email!')
      .required('Email is required!'),
    password: yup
      .string()
      .required('Password is required!')
      .max(8, 'Minimum 18 characters')
      .max(18, 'Maximum 18 characters')
      .matches(
        PasswordRegex,
        'Password must be aphanumeric, and contain between 8 and 18 characters, one uppercase and one special character!'
      ),
  })
  .required();
