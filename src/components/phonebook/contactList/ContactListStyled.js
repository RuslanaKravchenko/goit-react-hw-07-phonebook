import styled from 'styled-components';
const ContactListWrapper = styled.div`
  padding: 10px 0;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  .list-item-enter {
    opacity: 0;
    transform: translateY(-100%);
  }
  .list-item-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 250ms;
  }
  .list-item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .list-item-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms;
  }
`;
export default ContactListWrapper;
