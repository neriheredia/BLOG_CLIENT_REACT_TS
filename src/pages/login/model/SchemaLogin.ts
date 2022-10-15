import * as yup from 'yup';

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email('Debe ser un email valido!')
      .required('Email es requerido'),
    password: yup.string().required('Password es requerido'),
  })
  .required();
