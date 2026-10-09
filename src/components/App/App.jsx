import { useMemo } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? initContatcs;
  // });
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  // const [filter, setFilter] = useState('');

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList contacts={visibleContacts} />
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

// function findShort(str) {
//   const arr = str.split(' ');
//   let shortestWord = arr[0];
//   for (const word of arr) {
//     shortestWord = word.length < shortestWord.length ? word : shortestWord;
//   }
//   return shortestWord;
// }

// function findShort(str) {
//   return str.split(' ').sort((a, b) => a.length - b.length)[0];
// }

// console.log(findShort('The smallest word in sentence'));
// console.log(findShort('Just test string'));
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
