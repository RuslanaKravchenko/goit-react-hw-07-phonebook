import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideModal } from '../../../redux/modal/modalActions';
import { getModalIsOpen } from '../../../redux/modal/modalSelectors';

import { CSSTransition } from 'react-transition-group';
import Overlay from './ModalStyled';

const Modal = ({ children, hideModal, isOpen }) => {
  const onHadleClick = () => {
    hideModal();
  };

  return (
    <Overlay>
      <CSSTransition
        in={isOpen}
        appear={true}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="Modal">
          {children}
          <button className="modal_btn" onClick={onHadleClick} type="button">
            <svg
              className="modal_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      </CSSTransition>
    </Overlay>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: getModalIsOpen(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func,
  isOpen: PropTypes.bool,
};
