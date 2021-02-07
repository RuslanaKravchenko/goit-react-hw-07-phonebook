import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactListItem from './contactListItem/ContactListItem';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListWrapper from './ContactListStyled';

const ContactList = ({ contacts }) => {
  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" className="list">
        {contacts.map(item => (
          <CSSTransition key={item.id} timeout={250} classNames="list-item">
            <ContactListItem contact={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ContactListWrapper>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};

export default connect(mapStateToProps)(ContactList);

ContactListItem.propTypes = {
  contacts: PropTypes.array,
};
