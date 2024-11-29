import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import toast from 'react-hot-toast';
import clsx from 'clsx';

interface IFormInputs {
  name: string;
  email: string;
  date: string;
  comment: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  date: Yup.date().required('Booking date is required'),
  comment: Yup.string(),
});

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const onSubmit = (
    _: IFormInputs,
    { resetForm }: FormikHelpers<IFormInputs>
  ) => {
    toast.success('Successfully!');
    resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <div className={css.formElement}>
            <Field name='name' placeholder='Name*' className={css.input} />
            <ErrorMessage name='name' component='p' className={css.error} />
          </div>
          <div className={css.formElement}>
            <Field
              type='email'
              name='email'
              placeholder='Email*'
              className={css.input}
            />
            <ErrorMessage name='email' component='p' className={css.error} />
          </div>
          <div className={css.formElement}>
            <Field
              type='date'
              name='date'
              className={css.input}
              placeholder='Booking date*'
            />
            <ErrorMessage name='date' component='p' className={css.error} />
          </div>
          <div className={css.formElement}>
            <Field
              as='textarea'
              placeholder='Comment'
              name='comment'
              className={clsx(css.input, css.textarea)}
            />
            <ErrorMessage name='comment' component='p' className={css.error} />
          </div>
          <button type='submit' className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
