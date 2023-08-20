import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/Contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
     filter: '',
  }; 

  componentDidMount() {
    const savedContacts = localStorage.getItem('changed-contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('this.state: ', this.state.contacts);
    console.log('prevState :', prevState.contacts);
if (prevState.contacts !== this.state.contacts) {
  localStorage.setItem('changed-contacts', JSON.stringify(this.state.contacts));
}
    
  }
    

  onSubmit = (values) => {
  const { contacts } = this.state;

  const contactExists = contacts.some(contact => contact.name === values.name);

  if (contactExists) {
    alert(`Contact "${values.name}" already exists in the list.`);
  } else {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }), () => {
      localStorage.setItem('changed-contacts', JSON.stringify(this.state.contacts));
    });
    
  }
};

  onDelete = (id) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id),
  }));
};


  render() {
    const { contacts } = this.state; 
    
    return (
      <div>
        <ContactForm onSubmit={this.onSubmit} reset={this.resetForm}/>
        <ContactsList contacts={contacts} onDeleteContact={this.onDelete} />
      </div>
    );
  }
}
