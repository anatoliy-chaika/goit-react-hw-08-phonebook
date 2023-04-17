import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/operations';
import PropTypes from 'prop-types';
import { LiItem, ButtonDel, Phone } from './ContactItem.styled';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <LiItem>
      <p>
        {name}: <Phone>{number}</Phone>
      </p>
      <ButtonDel type="button" onClick={handleDelete}>
        Delete <AiOutlineDelete />
      </ButtonDel>
    </LiItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
