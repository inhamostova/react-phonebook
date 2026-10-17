import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Error, InputBlock } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(6, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const normalizedName = values.name.toLowerCase().trim();
      const isAlreasdyInContacts = contacts.some(
        ({ name }) => name.toLowerCase() === normalizedName
      );
      if (isAlreasdyInContacts) {
        alert(`Contact ${values.name} is already in list`);
        return;
      }

      await dispatch(addContact(values)).unwrap();
      resetForm();
      return;
    } catch (rejectedValueOrSerializedError) {
      return rejectedValueOrSerializedError;
    }

    // resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
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
          <Field type="tel" name="phone" />
          <Error component="div" name="phone" />
        </InputBlock>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
