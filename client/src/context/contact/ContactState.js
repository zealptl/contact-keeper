import React, { useReducer } from 'react';
import uuid from 'uuid';
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
  };

  const [state, dispatch] = useReducer(ContactReducer, intialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Contact

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
