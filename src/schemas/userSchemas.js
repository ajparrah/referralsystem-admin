import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const registerSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  name: yup.string().required(),
});
