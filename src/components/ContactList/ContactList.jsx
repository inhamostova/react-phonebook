import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisisbleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisisbleContacts);
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};
