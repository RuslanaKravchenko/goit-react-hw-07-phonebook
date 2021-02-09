import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const getContacts = (_, action) => {
  return action.payload;
};

const addContact = (state, action) => {
  return [...state, action.payload];
};

const deleteContact = (state, action) =>
  state.filter(item => item.id !== action.payload);

const onEditContact = (state, action) =>
  state.map(item =>
    item.id === action.payload.id ? { ...action.payload } : item,
  );

const contactsReducer = createReducer([], {
  [contactsActions.addNewContactSuccess]: addContact,
  [contactsActions.getContactsSuccess]: getContacts,
  [contactsActions.deleteContactSuccess]: deleteContact,
  [contactsActions.editContactSuccess]: onEditContact,
});

const contactByIdReducer = createReducer('', {
  [contactsActions.getIdValue]: (_, action) => action.payload,
});

const filterReducer = createReducer('', {
  [contactsActions.setFilter]: (_, action) => action.payload,
});

const errorReducer = createReducer(null, {
  [contactsActions.addNewContactError]: (_, action) => action.payload,
  [contactsActions.addNewContacRequest]: () => null,

  [contactsActions.getContactsError]: (_, action) => action.payload,
  [contactsActions.getContactsRequest]: () => null,

  [contactsActions.deleteContactError]: (_, action) => action.payload,
  [contactsActions.deleteContactRequest]: () => null,

  [contactsActions.editContactError]: (_, action) => action.payload,
  [contactsActions.editContactRequest]: () => null,
});

const loadingReducer = createReducer(false, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,

  [contactsActions.addNewContactRequest]: () => true,
  [contactsActions.addNewContactSuccess]: () => false,
  [contactsActions.addNewContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,

  [contactsActions.editContactRequest]: () => true,
  [contactsActions.editContactSuccess]: () => false,
  [contactsActions.editContactError]: () => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  idValue: contactByIdReducer,
  error: errorReducer,
  loading: loadingReducer,
});
