import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { useGetContactsQuery } from '../../redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data: contacts, isLoading, isError } = useGetContactsQuery();
  return (
    <>
      {isLoading && !contacts && !isError ? (
        <p>LOADING...</p>
      ) : (
        <List>
          {getVisibleContacts(contacts, filter).map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} number={phone} />
          ))}
        </List>
      )}
      {isError && !isLoading && <p>Ooops, something get wrong</p>}
    </>
  );
};

const getVisibleContacts = (contacts, filter) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
