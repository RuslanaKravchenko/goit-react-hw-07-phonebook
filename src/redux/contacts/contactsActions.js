import { createAction } from '@reduxjs/toolkit';

const addNewContactSuccess = createAction('contact/addSuccess');
const addNewContactError = createAction('contact/addError');

const getContactsSuccess = createAction('contacts/getSuccess');
const getContactsError = createAction('contacts/getError');

const deleteContactSuccess = createAction('contact/deleteSuccess');
const deleteContactError = createAction('contact/deleteError');

const editContactSuccess = createAction('contact/editSuccess');
const editContactError = createAction('contact/editError');

const setLoading = createAction('contact/setLoading');
const setFilter = createAction('contacts/setFilter');
const getIdValue = createAction('contacts/getIdValue');

const contactsActions = {
  setLoading,
  addNewContactSuccess,
  addNewContactError,

  getContactsSuccess,
  getContactsError,

  deleteContactSuccess,
  deleteContactError,

  editContactSuccess,
  editContactError,
  setFilter,
  getIdValue,
};

export default contactsActions;
