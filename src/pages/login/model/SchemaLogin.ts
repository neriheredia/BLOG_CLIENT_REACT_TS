import * as yup from 'yup';
import { EmailRegex } from '@/models';

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email('Debe ser un email valido!')
      .matches(EmailRegex, 'It must be a valid email!')
      .required('Email es requerido'),
    password: yup.string().required('Password es requerido'),
  })
  .required();
