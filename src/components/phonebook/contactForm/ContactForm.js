import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../../../redux/contacts/contactsOperations';
import { showNoticeMessage } from '../../../redux/notice/noticeActions';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';

import Form from './ContactFormStyled';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ addNewContact, contacts, showNoticeMessage }) => {
  const [newContact, setNewContact] = useState({ ...initialState });

  const onHandelChange = e => {
    const { name, value } = e.target;
    setNewContact(prevState => ({ ...prevState, [name]: value }));
  };

  const onHandelSubmit = e => {
    e.preventDefault();

    if (contacts.some(item => item.name === newContact.name)) {
      showNoticeMessage(`${newContact.name} is already in contacts`);
      return;
    }
    if (contacts.some(item => item.number === newContact.number)) {
      showNoticeMessage(`${newContact.number} is already in use`);
      return;
    }

    if (!newContact.name.length) {
      showNoticeMessage('Please enter a name');
      return;
    }

    if (!newContact.number.length) {
      showNoticeMessage('Please enter a number');
      return;
    }
    const regex = /^(\+38|7|8)?[\s-]?\(?[0][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

    if (!regex.test(newContact.number)) {
      showNoticeMessage('Рlease enter the correct phone number');
      return;
    }

    addNewContact(newContact);

    if (newContact.name && newContact.number) {
      setNewContact({ ...initialState });
    }
  };

  return (
    <Form onSubmit={onHandelSubmit}>
      <label className="form_fild">
        <span className="form_text">Name: </span>
        <input
          className="form_input"
          placeholder="Enter name..."
          type="text"
          name="name"
          value={newContact.name}
          onChange={onHandelChange}
        ></input>
      </label>
      <label className="form_fild">
        <span className="form_text">Number: </span>
        <input
          className="form_input"
          placeholder="+38(067)-111-11-11"
          type="tel"
          name="number"
          value={newContact.number}
          onChange={onHandelChange}
        ></input>
      </label>
      <button className="form_btn" type="submit">
        Add contact
      </button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewContact: newContact =>
      dispatch(contactsOperations.addNewContact(newContact)),
    showNoticeMessage: message => dispatch(showNoticeMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addNewContact: PropTypes.func,
  showNoticeMessage: PropTypes.func,
};
