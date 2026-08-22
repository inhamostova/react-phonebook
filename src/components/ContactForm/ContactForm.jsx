import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Error } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: crypto.randomUUID() });
        resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <Error component="div" name="name" />
        </label>
        <label>
          Telefon
          <Field type="tel" name="number" />
          <Error component="div" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
