import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsActions from '../../../../redux/contacts/contactsActions';
import contactsOperations from '../../../../redux/contacts/contactsOperations';
import contactsSelectors from '../../../../redux/contacts/contactsSelectors';

import { showModal } from '../../../../redux/modal/modalActions';

import ListItem from './ContactsListItemStyled';

const ContactListItem = ({
  contact,
  deleteContact,
  showModal,
  getIdValue,
  setFilter,
  contacts,
}) => {
  const onHandleDelete = e => {
    const { id } = e.currentTarget;
    deleteContact(id);

    if (contacts.length < 2) {
      setFilter('');
    }
  };

  const openEditProfile = e => {
    showModal('openEditProfile');
    const { id } = e.currentTarget;
    getIdValue(id);
  };

  const openContactInfo = e => {
    showModal('openContactInfo');
    const { id } = e.currentTarget;
    getIdValue(id);
  };

  return (
    <ListItem>
      <div className="listItem_meta" id={contact.id} onClick={openContactInfo}>
        {contact.avatar ? (
          <div className="avatar_container">
            <img className="avatar_img" src={contact.avatar} alt="avatar" />
          </div>
        ) : (
          <span className="avatar_span">{contact.name[0].toUpperCase()}</span>
        )}
        <div className="listItem_meta-info">
          <h3 className="listItem_name">{contact.name} </h3>

          <p className="listItem_number">{contact.number}</p>
          {contact.category && (
            <p className="listItem_category">{contact.category}</p>
          )}
        </div>
      </div>

      <div>
        <button
          type="button"
          className="material-icons listItem_btn"
          id={contact.id}
          onClick={openEditProfile}
        >
          <svg
            className="listItem_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </button>

        <button
          type="button"
          className="material-icons listItem_btn"
          id={contact.id}
          onClick={onHandleDelete}
        >
          <svg
            className="listItem_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
          </svg>
        </button>
      </div>
    </ListItem>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => {
      dispatch(contactsOperations.deleteContact(id));
    },

    showModal: content => {
      dispatch(showModal(content));
    },
    getIdValue: id => {
      dispatch(contactsActions.getIdValue(id));
    },
    setFilter: value => {
      dispatch(contactsActions.setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
  showModal: PropTypes.func,
  getContactById: PropTypes.func,
};
