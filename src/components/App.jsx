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
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

  const getContactsByFilter = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
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
          visibleContacts={getContactsByFilter()}
          onClick={handleClickBtnDelete}
        />
      </Section>
    </Background>
  );
};
