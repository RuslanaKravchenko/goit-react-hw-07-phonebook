import { createReducer } from '@reduxjs/toolkit';
import { showModal, hideModal } from './modalActions';

const initialState = {
  isOpen: false,
  content: '',
};

export const modalReducer = createReducer(
  { ...initialState },
  {
    [showModal]: (state, action) => ({
      ...state,
      isOpen: !state.isOpen,
      content: action.payload,
    }),
    [hideModal]: (state, action) => ({ ...state, isOpen: !state.isOpen }),
  },
);
