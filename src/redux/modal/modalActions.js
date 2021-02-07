import { createAction } from '@reduxjs/toolkit';

const showModal = createAction('notice/showModal');
const hideModal = createAction('notice/hideModal');

export { showModal, hideModal };
