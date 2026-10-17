import { useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading your contacts...</p>}
      {error ? <p>Oops something went wrong...</p> : <ContactList />}
    </Container>
  );
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const filterChange = evt => {
  //   setFilter(evt.target.value);
  // };

  // const deleteContact = contactId => {
  // setContacts(prevContacts =>
  //   prevContacts.filter(({ id }) => id !== contactId)
  // );
  // };

  // const addContact = contact => {
  //   const normalizedName = contact.name.toLowerCase().trim();

  //   const isNameInContacts = contacts.some(
  //     ({ name }) => name.toLowerCase() === normalizedName
  //   );

  //   if (isNameInContacts) {
  //     alert(`${contact.name} is already in contacts`);
  //     return;
  //   }

  //   setContacts(prevContacts => [contact, ...prevContacts]);
  // };
};

// export class OldApp extends Component {
//   state = {
//     contacts: initContatcs,
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (savedContacts) {
//       this.setState({ contacts: savedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   filterChange = evt => {
//     this.setState({ filter: evt.target.value });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   addContact = contact => {
//     const { contacts } = this.state;
//     const normalizedName = contact.name.toLowerCase().trim();

//     const isNameInContacts = contacts.some(
//       ({ name }) => name.toLowerCase() === normalizedName
//     );

//     if (isNameInContacts) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const { filterChange, addContact, deleteContact } = this;

//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={filterChange} />

//         <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//       </Container>
//     );
//   }
// }
