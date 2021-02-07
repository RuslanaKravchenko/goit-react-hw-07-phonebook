import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../../../redux/contacts/contactsOperations';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';

import { hideModal } from '../../../redux/modal/modalActions';

import EditProfileStyled from './EditProfileFormStyled';
import toDataURL from '../../../utils/b64';

const initialState = {
  name: '',
  number: '',
  category: '',
  dateOfBirth: '',
  email: '',
  avatar: '',
};

const EditProfileForm = ({ contactById, editContact, hideModal }) => {
  const [contact, setContact] = useState({ ...initialState, ...contactById });

  const onHandleChangeAvatar = e => {
    toDataURL(e.target).then(data => setContact({ ...contact, avatar: data }));
  };

  const onHandleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onHadleSubmit = e => {
    e.preventDefault();
    editContact(contact);
    hideModal();
  };

  const onHadleClick = () => {
    contact.avatar && setContact({ ...contact, avatar: '' });
    return;
  };

  return (
    <EditProfileStyled>
      <form className="profile_form" onSubmit={onHadleSubmit}>
        <div className="avatar_fild">
          <label className="avatar_label">
            <input
              type="file"
              name="avatar"
              className="avatar_input"
              onChange={onHandleChangeAvatar}
            />

            {contact.avatar ? (
              <div className="avatar_container">
                <img className="avatar_img" src={contact.avatar} alt="avatar" />
              </div>
            ) : (
              <span className="avatar_span">
                {contact.name[0].toUpperCase()}{' '}
              </span>
            )}
          </label>

          {contact.avatar && (
            <button className="avatar_btn" type="button" onClick={onHadleClick}>
              <svg
                className="avatar_icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}
        </div>

        <label className="profile_fild">
          <span className="profile_text"> Name:</span>

          <input
            className="profile_input"
            type="text"
            name="name"
            value={contact.name}
            onChange={onHandleChange}
          />
        </label>
        <label className="profile_fild">
          <span className="profile_text">Number:</span>

          <input
            className="profile_input"
            type="tel"
            name="number"
            value={contact.number}
            onChange={onHandleChange}
          />
        </label>

        <label className="profile_fild">
          <span className="profile_text">Email:</span>

          <input
            className="profile_input"
            type="email"
            name="email"
            value={contact.email}
            onChange={onHandleChange}
          />
        </label>

        <label className="profile_fild-category">
          <span className="profile_category-text">Category:</span>

          <select
            className="select-css"
            name="category"
            value={contact.category}
            onChange={onHandleChange}
          >
            <option value="">...</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="work">Work</option>
            <option value="others">Others</option>
          </select>
        </label>
        <label className="profile_fild-date">
          <span className="profile_date-text">Date of birth:</span>

          <input
            className="profile_date"
            type="date"
            name="dateOfBirth"
            value={contact.dateOfBirth}
            onChange={onHandleChange}
          ></input>
        </label>

        <button className="info_btn " type="submit">
          Save
        </button>
      </form>
    </EditProfileStyled>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editContact: contact => {
      dispatch(contactsOperations.editContact(contact));
    },

    hideModal: () => {
      dispatch(hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);

EditProfileForm.propTypes = {
  contactById: PropTypes.object,
  editContact: PropTypes.func,
  hideModal: PropTypes.func,
};
