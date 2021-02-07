import { createAction } from '@reduxjs/toolkit';

const showNoticeMessage = createAction('notice/showNoticeMessage');
const hideNoticeMessage = createAction('notice/hideNoticeMessage');

export { showNoticeMessage, hideNoticeMessage };
