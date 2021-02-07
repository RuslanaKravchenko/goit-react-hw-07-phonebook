import { createAction } from '@reduxjs/toolkit';

const addNewContactRequest = createAction('contact/addRequest');
const addNewContactSuccess = createAction('contact/addSuccess');
const addNewContactError = createAction('contact/addError');

const getContactsRequest = createAction('contacts/getRequest');
const getContactsSuccess = createAction('contacts/getSuccess');
const getContactsError = createAction('contacts/getError');

const deleteContactRequest = createAction('contact/deleteRequest');
const deleteContactSuccess = createAction('contact/deleteSuccess');
const deleteContactError = createAction('contact/deleteError');

const editContactRequest = createAction('contact/editRequest');
const editContactSuccess = createAction('contact/editSuccess');
const editContactError = createAction('contact/editError');

const setFilter = createAction('contacts/setFilter');
const getIdValue = createAction('contacts/getIdValue');
const editContact = createAction('contacts/editContact');

const contactsActions = {
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
  setFilter,
  getIdValue,
  editContact,
};

export default contactsActions;
