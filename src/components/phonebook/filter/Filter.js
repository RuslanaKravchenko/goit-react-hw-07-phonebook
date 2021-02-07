import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsActions from '../../../redux/contacts/contactsActions';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';

import FilterFild from './FilterStyled';

const Filter = ({ filter, setFilter }) => {
  const onHandleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <FilterFild>
      <input
        className="filter_input"
        placeholder="Find by name..."
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </FilterFild>
  );
};

const mapStateToProps = state => {
  return {
    filter: contactsSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => {
      dispatch(contactsActions.setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
