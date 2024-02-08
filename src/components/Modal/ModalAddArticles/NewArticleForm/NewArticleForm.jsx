import { Formik, Field } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  FormWrapper,
  InputWrapper,
} from './NewArticleForm.styled';

import { Button } from 'components/Button/Button';
import { ErrorMessage } from 'formik';
import { NewArticleFormSchema } from './NewArticleFormShema';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../../../redux/articles/articlesSlice';
import { v4 as uuidv4 } from 'uuid';

const initialValues = {
  title: '',
  description: '',
  author: '',
  urlToImage: '',
};

export const NewArticleForm = ({ handleModalToggle }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newArticle = {
      id: uuidv4(),
      ...values,
    };

    dispatch(addArticle(newArticle));
    console.log(newArticle);
    actions.resetForm();
    handleModalToggle();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={NewArticleFormSchema}
    >
      {({ handleSubmit }) => (
        <form>
          <FormWrapper>
            <InputWrapper>
              <label>
                <Field type="text" name="title" placeholder="Title" />
                <ErrorMessage name="title" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field
                  type="text"
                  name="description"
                  placeholder="Description"
                />
                <ErrorMessage name="description" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field type="text" name="author" placeholder="Author" />
                <ErrorMessage name="author" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field type="text" name="urlToImage" placeholder="Image URL" />
                <ErrorMessage name="urlToImage" component={ErrorText} />
              </label>
            </InputWrapper>
          </FormWrapper>

          <ButtonWrapper>
            <Button
              text={'Add Article'}
              type={'submit'}
              handleClick={handleSubmit}
            />
          </ButtonWrapper>
        </form>
      )}
    </Formik>
  );
};
