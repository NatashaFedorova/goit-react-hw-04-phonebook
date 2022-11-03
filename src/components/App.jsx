import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import initialContacts from '../initialContacts.json';
import { Title, TitleContactsSection } from './App.styled';
import { Background } from 'components/constants/Background.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );
  const [visibleContacts, setVisibleContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (!filter) {
      return;
    }
    setVisibleContacts(
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, contacts, visibleContacts]);

  const addNewContact = ({ name, number }) => {
    setContacts(prevState =>
      setContacts([{ id: nanoid(), name, number }, ...prevState])
    );
  };

  const handleClickBtnDelete = contactid => {
    setContacts(contacts.filter(({ id }) => id !== contactid));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <Background>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm contacts={contacts} onSelect={addNewContact} />
      </Section>
      <Section>
        <TitleContactsSection>Contacts</TitleContactsSection>
        <Filter onChange={changeFilter} />
        <ContactList
          visibleContacts={filter === '' ? contacts : visibleContacts}
          onClick={handleClickBtnDelete}
        />
      </Section>
    </Background>
  );
};

// =================================================================================
// const [visibleContacts, setVisibleContacts] = useState(contacts);
// const [filter, setFilter] = useState('');

// const addNewContact = ({ name, number }) => {
//   setContacts(prevState => [{ id: nanoid(), name, number }, ...prevState]);
// };

// const changeFilter = e => {
//   setFilter(e.target.value);
// };

// const changeContacts = () => {
//   setContacts(
//     visibleContacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     )
//   );
// };

// const handleClickBtnDelete = contactId => {
//   setContacts(contacts.filter(({ id }) => id !== contactId));
// };

// // const checkingContactsLocalStorage = () => {
// //   const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));
// //   if (contactsLocalStorage) {
// //     console.log('useEffect localStorage before');
// //     return setContacts(contactsLocalStorage);
// //   }
// // };

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// useEffect(() => {
//   return changeContacts();
// }, [filter]);

// ==================================================================================

// export class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));
//     if (contactsLocalStorage) {
//       this.setState({ contacts: contactsLocalStorage });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const prevContacts = prevState.contacts;
//     const nextContacts = this.state.contacts;

//     if (prevContacts.length !== nextContacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addNewContact = ({ name, number }) => {
//     this.setState(prevState => ({
//       contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   filterContacts = () => {
//     const filter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter)
//     );
//   };

//   handleClickBtnDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts } = this.state;
//     const visibleContacts = this.filterContacts();
//     return (
//       <Background>
//         <Section>
//           <Title>Phonebook</Title>
//           <ContactForm contacts={contacts} onSelect={this.addNewContact} />
//         </Section>
//         <Section>
//           <TitleContactsSection>Contacts</TitleContactsSection>
//           <Filter onChange={this.changeFilter} />
//           <ContactList
//             visibleContacts={visibleContacts}
//             onClick={this.handleClickBtnDelete}
//           />
//         </Section>
//       </Background>
//     );
//   }
// }
