import { Component } from "react";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  onSubmitForm = data => {
    const obj = { ...data, id: nanoid() };
    this.setState(prevState => ({contacts: [...prevState.contacts, obj]}) );
  }
  
  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmitForm} />
        <ContactsList contacts={contacts}/>
      </div>
    );
  };
};