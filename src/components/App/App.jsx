import { useEffect, useMemo, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container } from './App.styled';

const initContatcs = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initContatcs;
  });
  const [filter, setFilter] = useState('');

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterChange = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const addContact = contact => {
    const normalizedName = contact.name.toLowerCase().trim();

    const isNameInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (isNameInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />

      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Container>
  );
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
