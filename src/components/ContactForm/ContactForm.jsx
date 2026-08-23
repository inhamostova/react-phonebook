import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Error, InputBlock } from './ContactForm.styled';

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
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ ...values, id: crypto.randomUUID() });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputBlock>
          <span>Name</span>
          <Field type="text" name="name" />
          <Error component="div" name="name" />
        </InputBlock>
        <InputBlock>
          <span>Telefon</span>
          <Field type="tel" name="number" />
          <Error component="div" name="number" />
        </InputBlock>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
