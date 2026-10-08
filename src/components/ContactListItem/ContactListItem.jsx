import PropTypes from 'prop-types';
import { Btn, Item } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>
        {name} {number}
      </span>
      <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
        X
      </Btn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
