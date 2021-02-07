import styled from 'styled-components';
const Main = styled.main`
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 400px;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
    max-width: 700px;
  }

  .phonebook_title {
    color: #0d5667;
    margin-bottom: 30px;
    text-align: center;
  }

  .contacts_title {
    color: #286671;
    margin-bottom: 20px;
    text-align: center;
  }

  .contacts_text {
    padding: 0 10px;
    text-align: center;
    color: #464b51;
  }

  /* ================ animations =========== */

  .title-appear {
    opacity: 0;
    transform: translateY(-100%);
  }

  .title-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .form-appear {
    opacity: 0;
  }

  .form-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms;
  }

  .contactsTitle-appear {
    opacity: 0;
  }

  .contactsTitle-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 200ms;
  }

  .filter-appear {
    opacity: 0;
  }

  .filter-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 200ms;
  }

  .contactsList-appear {
    opacity: 0;
  }

  .contactsList-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  }

  .contactsText-appear {
    opacity: 0;
  }

  .contactsText-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  }

  .my-notice-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .my-notice-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .my-notice-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .my-notice-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal-appear {
    opacity: 0;
  }
  .modal-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modal-exit {
    opacity: 1;
  }
  .modal-exit-active {
    opacity: 0;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export default Main;
