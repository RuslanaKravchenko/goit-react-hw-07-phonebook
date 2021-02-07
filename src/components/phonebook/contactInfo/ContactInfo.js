import React from 'react';
import PropTypes from 'prop-types';
import ContactInfoStyled from './ContactInfoStyled';

const ContactInfo = ({ contactById }) => {
  const { name, number, email, category, dateOfBirth, avatar } = contactById;
  return (
    <ContactInfoStyled>
      <div className="info_header-container">
        <div>
          <h2 className="info_name">{name}</h2>
          {category && <p className="info_category">{category}</p>}
        </div>

        {avatar ? (
          <div className="avatar_container">
            <img className="avatar_img" src={avatar} alt="avatar" />
          </div>
        ) : (
          <span className="avatar_span">{name[0].toUpperCase()} </span>
        )}
      </div>

      <ul className="list info_list">
        <li className="info_item">
          <span className="info_label">Number:</span>
          <span className="info_dots"></span>
          <span className="info_contact">{number}</span>
        </li>
        <li className="info_item">
          <span className="info_label">Email:</span>
          <span className="info_dots"></span>
          <span className="info_contact">{email}</span>
        </li>
      </ul>
      <p className="info_dateOfBirth">
        <span className="info_dateOfBirth-label">Date of birth:</span>
        <span className="info_dots"></span>
        <span className="info_dateOfBirth-date">{dateOfBirth}</span>
      </p>

      <div className="info_links">
        <a className="info_call info_link" href={`tel:${number}`}>
          Call
        </a>

        <a
          className={`info_link  ${!email && 'disabled'} `}
          href={`mailto:${email}`}
        >
          Message
        </a>
      </div>
    </ContactInfoStyled>
  );
};

export default ContactInfo;

ContactInfo.propTypes = {
  contactById: PropTypes.object,
};
