import { createReducer } from '@reduxjs/toolkit';
import { showNoticeMessage, hideNoticeMessage } from './noticeActions';

const initialState = {
  showNotice: false,
  message: '',
};

export const noticeReducer = createReducer(
  { ...initialState },
  {
    [showNoticeMessage]: (state, action) => ({
      ...state,
      showNotice: !state.showNotice,
      message: action.payload,
    }),
    [hideNoticeMessage]: (state, action) => ({
      ...state,
      showNotice: !state.showNotice,
    }),
  },
);
