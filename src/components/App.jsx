import { Component } from "react";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  onSubmitForm = data => {
    const newObj = { ...data, id: nanoid() };
    this.setState(({ contacts }) => {
      if (this.isNameNew(contacts, newObj) === undefined) {
        return { contacts: [...contacts, newObj] }
      } else {
        Notify.warning(`${newObj.name} is already in contacts`, {
          width: '400px',
          position: 'center-center',
          timeout: 3000,
          fontSize: '20px',
        });
        return { contacts: [...contacts] }
      };
    });
  }

   isNameNew = (contacts, newObj) => {
     return contacts.find(({ name }) => 
      name.toLowerCase() === newObj.name.toLowerCase())
  }

  onChangeFilter = (event) => {
    const {value} = event.currentTarget;
    this.setState({ filter: value })
  }

   filterByName = () => {
    const { contacts, filter } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => 
      (name.toLowerCase().includes(lowerFilter) ))
  }

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterByName();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmitForm} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  };
};