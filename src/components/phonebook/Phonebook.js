import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

import Notice from '../notice/Notice';
import EditProfileForm from './editProfileForm/EditProfileForm';
import Modal from './modal/Modal';
import ContactInfo from './contactInfo/ContactInfo';

import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import {
  getModalContent,
  getModalIsOpen,
} from '../../redux/modal/modalSelectors';
import { getShowNotice } from '../../redux/notice/noticeSelectors';

import { CSSTransition } from 'react-transition-group';
import Main from './PhonebookStyled';
import Spinner from '../loader/Loader';

const Phonebook = ({
  contacts,
  onGetContacts,
  showNotice,
  isOpen,
  content,
  idValue,
  isLoadingContacts,
}) => {
  useEffect(() => {
    onGetContacts();

    // eslint-disable-next-line
  }, []);

  const getContactById = idValue => {
    const contactById = contacts.find(contact => contact.id === idValue);
    return contactById;
  };

  return (
    <>
      {isLoadingContacts && <Spinner />}
      <Main>
        <CSSTransition
          in={showNotice}
          timeout={250}
          classNames="my-notice"
          unmountOnExit
        >
          <Notice />
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1 className="phonebook_title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={400}
          classNames="form"
          unmountOnExit
        >
          <ContactForm />
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="contactsTitle"
          unmountOnExit
        >
          <>
            <h2 className="contacts_title">Contacts</h2>
            {contacts.length > 1 && (
              <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="filter"
                unmountOnExit
              >
                <Filter />
              </CSSTransition>
            )}
          </>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={550}
          classNames="contactsList"
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>

        {contacts.length === 0 && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={550}
            classNames="contactsText"
            unmountOnExit
          >
            <p className="contacts_text">
              Your phone book is empty. Please add a contact.
            </p>
          </CSSTransition>
        )}

        <CSSTransition
          in={isOpen}
          appear={true}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <Modal>
            {content === 'openEditProfile' && (
              <EditProfileForm contactById={getContactById(idValue)} />
            )}

            {content === 'openContactInfo' && (
              <ContactInfo contactById={getContactById(idValue)} />
            )}
          </Modal>
        </CSSTransition>
      </Main>
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    idValue: contactsSelectors.getContactId(state),
    isLoadingContacts: contactsSelectors.getLoading(state),
    showNotice: getShowNotice(state),
    isOpen: getModalIsOpen(state),
    content: getModalContent(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetContacts: () => {
      dispatch(contactsOperations.getContacts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

ContactForm.propTypes = {
  showNotice: PropTypes.bool,
  contacts: PropTypes.array,
  getContacts: PropTypes.func,
  isOpen: PropTypes.bool,
  content: PropTypes.string,
  idValue: PropTypes.string,
  isLoadingContacts: PropTypes.bool,
};
