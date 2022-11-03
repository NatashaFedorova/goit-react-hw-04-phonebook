import PropTypes from 'prop-types';
import { Item, About, BtnDelete } from './ContactItem.styled';

const ContactItem = ({ contact, onClick }) => {
  const { id, name, number } = contact;
  return (
    <>
      <Item>
        <About>
          {name}: {number}
        </About>
        <BtnDelete type="button" onClick={() => onClick(id)}>
          Delete
        </BtnDelete>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
