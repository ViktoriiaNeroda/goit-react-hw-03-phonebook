import React, { useState } from 'react';
import { DeleteBtn, StyledContact, StyledFilter, StyledList, StyledTextFilter, Title } from './Contacts.styled';

export function ContactsList({ contacts, onDeleteContact }) {
    
const [searchText, setSearchText] = useState('');
  const filteredContacts = contacts.filter(contact =>
  contact.name && contact.name.toLowerCase().includes(searchText.toLowerCase())
);

    const handleSearchChange = event => {
    setSearchText(event.target.value);
  };

  
  return (
      <>
          <div>
          <Title>Contacts</Title>
          <StyledTextFilter>Find contact by name</StyledTextFilter>
          <StyledFilter type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by name"></StyledFilter>
        </div>
          <StyledList>
          {filteredContacts.map(contact => (
            <StyledContact key={contact.id}>
              {contact.name}: {contact.number}
           <DeleteBtn onClick={() => onDeleteContact(contact.id)}>Delete</DeleteBtn>
            </StyledContact>
          ))}
      </StyledList>
      </>
  );
}
