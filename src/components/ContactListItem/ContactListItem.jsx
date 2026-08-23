import PropTypes from 'prop-types';
import { Btn, Item } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <span>
        {name} {number}
      </span>
      <Btn type="button" onClick={() => onDelete(id)}>
        X
      </Btn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
