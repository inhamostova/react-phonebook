import PropTypes from 'prop-types';
import { Btn, Item } from './ContactListItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Item>
      <span>
        {name} {number}
      </span>
      <Btn type="button" disabled={isLoading} onClick={() => deleteContact(id)}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Btn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
