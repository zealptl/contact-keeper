import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: 'Obi-wan Kenobi',
        email: 'okenobi@gmail.com',
        phone: '222-222-2222',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Yoda',
        email: 'yoda@gmail.com',
        phone: '555-555-5555',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Luke Skywalker',
        email: 'lskywalker@gmail.com',
        phone: '777-777-7777',
        type: 'personal',
      },
      {
        id: 4,
        name: 'Anikan Skywalker',
        email: 'askywalker@gmail.com',
        phone: '666-666-6666',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, intialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

  // Set Current Contact
  const setCurrent = (contact) =>
    dispatch({ type: SET_CURRENT, payload: contact });

  // Clear Current Contact
  const clearCurrent = (contact) => dispatch({ type: CLEAR_CURRENT });

  // Update Contact
  const updateContact = (contact) =>
    dispatch({ type: UPDATE_CONTACT, payload: contact });

  // Filter Contact
  const filterContacts = (text) =>
    dispatch({ type: FILTER_CONTACTS, payload: text });

  // Clear Contact
  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
