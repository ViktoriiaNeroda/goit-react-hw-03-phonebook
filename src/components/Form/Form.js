import React from 'react';
import { Formik } from 'formik'; 
import { Title, ContactFormStyled, StyledInput, StyledLabel, ErrorText, AddBtn } from './Form.styled';
import * as Yup from 'yup';

export function ContactForm({ onSubmit }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(/^[A-Za-z]+\s[A-Za-z]+$/, 'Enter first and last name')
      .min(2, 'Name must be at least 2 characters long'),
    number: Yup.string()
      .required('Number is required')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in the format xxx-xx-xx'),
  });

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
     <ContactFormStyled>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type="text" name="name" placeholder="First and last name" />
          <ErrorText name="name" />

          <StyledLabel>Number</StyledLabel>
          <StyledInput type="text" name="number" placeholder="Phone number" />
          <ErrorText name="number" />

        <AddBtn type="submit" >Add contact</AddBtn>

        </ContactFormStyled>
      </Formik>
    </>
  );
}

