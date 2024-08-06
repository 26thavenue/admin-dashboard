import * as Yup from 'yup';

export const createCommunityFormSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    welcomeNote: Yup.string().optional(),
    targetAudience: Yup.string().optional(),

    country: Yup.object().shape({
      value: Yup.string().required('Country is required'),
      label: Yup.string().required('Country is required'),
    }),
    state: Yup.object()
      .shape({
        value: Yup.string().required('State is required'),
        label: Yup.string().required('State is required'),
      })
      .optional(),
    city: Yup.string().optional(),
    interests: Yup.mixed()
      .label('Object of Booleans')
      .test('at-least-one-true', 'At least one selected', (obj: any) => {
        return Object.values(obj).some(value => value);
      }),
    isPublic: Yup.string().oneOf(['public', 'private']).optional(),
    joinApprovalRequired: Yup.string().oneOf(['open', 'close']).optional(),
    isMemeberVisible: Yup.string().oneOf(['all', 'admin']).optional(),
    // author: Yup.bool().optional(),
  });
};

export const createGistFormSchema = Yup.object().shape({
  title: Yup.string().required('Name is required'),
  message: Yup.string().optional(),
});

export const createEventFormSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  eventDateTime: Yup.string().required('Event date time is required'),
  eventLocation: Yup.string().required('Event location is required'),
  otherDetails: Yup.string().optional(),
});