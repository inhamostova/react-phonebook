import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
