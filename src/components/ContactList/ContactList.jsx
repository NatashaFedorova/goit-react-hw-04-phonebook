import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ visibleContacts, onClick }) => {
  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <ContactItem key={contact.id} contact={contact} onClick={onClick} />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
