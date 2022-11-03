import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import initialContacts from '../initialContacts.json';
import { Title, TitleContactsSection } from './App.styled';
import { Background } from 'components/constants/Background.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLocalStorage) {
      this.setState({ contacts: contactsLocalStorage });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts.length !== nextContacts.length) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addNewContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  handleClickBtnDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <Background>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm contacts={contacts} onSelect={this.addNewContact} />
        </Section>
        <Section>
          <TitleContactsSection>Contacts</TitleContactsSection>
          <Filter onChange={this.changeFilter} />
          <ContactList
            visibleContacts={visibleContacts}
            onClick={this.handleClickBtnDelete}
          />
        </Section>
      </Background>
    );
  }
}
