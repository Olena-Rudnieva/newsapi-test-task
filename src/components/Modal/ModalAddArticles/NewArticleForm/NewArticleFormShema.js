// import * as yup from 'yup';

// const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

// export const RegistrationFormSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(3, 'Username must be at least 3 characters long')
//     .required('Full name is required'),
//   email: yup
//     .string()
//     .email('Please enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(5)
//     .matches(regEx, { message: 'Please create a stronger password' })
//     .required('Required'),
// });

import * as yup from 'yup';

export const NewArticleFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Title must be at least 3 characters long')
    .required('Title is required'),
  description: yup
    .string()
    .min(10, 'Description must be at least 10 characters long')
    .required('Description is required'),
  author: yup
    .string()
    .min(3, 'Author must be at least 3 characters long')
    .required('Author is required'),
  urlToImage: yup
    .string()
    .url('Please enter a valid URL for the image')
    .required('Image URL is required'),
});
