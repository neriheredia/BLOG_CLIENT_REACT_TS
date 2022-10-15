import * as yup from 'yup';
import { PasswordRegex } from '@/models';

export const schemaRegister = yup
  .object({
    username: yup.string().required('Username es requerido'),
    email: yup
      .string()
      .email('Debe ser un email valido!')
      .required('Email es requerido'),
    password: yup
      .string()
      .required('Password es requerido')
      .max(18, 'Máximo 18 caracteres')
      .matches(
        PasswordRegex,
        'Password debe ser alfanumérico, y contener máximo 18 caracteres, una mayúscula y un caracter especial'
      ),
  })
  .required();
