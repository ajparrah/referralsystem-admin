import * as yup from 'yup';

export const createLinkSchema = yup.object().shape({
  name: yup.string().required(),
});
