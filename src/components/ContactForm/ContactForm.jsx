// import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Error, InputBlock } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

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

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const normalizedName = values.name.toLowerCase().trim();
    const isAlreasdyInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (isAlreasdyInContacts) {
      alert(`Contact ${values.name} is already in list`);
      return;
    }
    dispatch(addContact(values));

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
