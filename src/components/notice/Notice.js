import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideNoticeMessage } from '../../redux/notice/noticeActions';
import { getNoticeMessage } from '../../redux/notice/noticeSelectors';

import NoticeWrapper from './NoticeStyled';

const Notice = ({ message, hideNoticeMessage }) => {
  useEffect(() => {
    setTimeout(() => {
      hideNoticeMessage();
    }, 3000);
    // eslint-disable-next-line
  }, []);

  return (
    <NoticeWrapper>
      <p className="text">{message}</p>
    </NoticeWrapper>
  );
};

const mapStateToProps = state => {
  return {
    message: getNoticeMessage(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideNoticeMessage: () => {
      dispatch(hideNoticeMessage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notice);

Notice.propTypes = {
  message: PropTypes.string,
  hideNoticeMessage: PropTypes.func,
};
