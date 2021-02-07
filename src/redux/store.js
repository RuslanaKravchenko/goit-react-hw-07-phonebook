import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import { noticeReducer } from './notice/noticeReducer';
import { modalReducer } from './modal/modalReducer';

const store = configureStore({
  reducer: {
    phonebookContacts: contactsReducer,
    phonebookNotice: noticeReducer,
    phonebookModal: modalReducer,
  },
});

export default store;
