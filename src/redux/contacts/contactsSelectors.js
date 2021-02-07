import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebookContacts.contacts;
const getFilter = state => state.phonebookContacts.filter;
const getLoading = state => state.phonebookContacts.loading;
const getError = state => state.phonebookContacts.error;
const getContactId = state => state.phonebookContacts.idValue;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const contactsSelectors = {
  getContacts,
  getVisibleContacts,
  getContactId,
  getFilter,
  getLoading,
  getError,
};

export default contactsSelectors;
