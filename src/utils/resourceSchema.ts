import * as Yup from 'yup';

export const createVideoFormSchema = () => {
  return Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    resourceLink: Yup.string().required('Resource link is required'),

    interests: Yup.mixed()
      .label('Object of Booleans')
      .test('at-least-one-true', 'At least one selected', (obj: any) => {
        return Object.values(obj).some(value => value);
      }),
  });
};