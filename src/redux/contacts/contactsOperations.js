import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const addNewContact = contact => async dispatch => {
  dispatch(contactsActions.setLoading());

  try {
    const { data } = await axios.post('/contacts.json', contact);
    dispatch(
      contactsActions.addNewContactSuccess({ ...contact, id: data.name }),
    );
  } catch (error) {
    dispatch(contactsActions.addNewContactError(error));
  } finally {
    dispatch(contactsActions.setLoading());
  }
};

const getContacts = () => async dispatch => {
  dispatch(contactsActions.setLoading());

  try {
    const { data } = await axios.get('/contacts.json');
    if (data) {
      const contacts = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }));
      dispatch(contactsActions.getContactsSuccess(contacts));
    }
  } catch (error) {
    dispatch(contactsActions.getContactsError(error));
  } finally {
    dispatch(contactsActions.setLoading());
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.setLoading());

  try {
    await axios.delete(`/contacts/${id}.json`);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  } finally {
    dispatch(contactsActions.setLoading());
  }
};

const editContact = newContact => async dispatch => {
  dispatch(contactsActions.setLoading());

  try {
    const { data } = await axios.put(
      `/contacts/${newContact.id}.json`,
      newContact,
    );

    dispatch(contactsActions.editContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.editContactError(error));
  } finally {
    dispatch(contactsActions.setLoading());
  }
};

const contactsOperations = {
  addNewContact,
  getContacts,
  deleteContact,
  editContact,
};
export default contactsOperations;
