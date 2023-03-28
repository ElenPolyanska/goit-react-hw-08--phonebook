import styled from 'styled-components';
import { DeleteButton } from 'components/ContactList/ContactList.styled';

export const UserMenuWrap = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  font-weight: 700;
`;

export const UserMenuButton = styled(DeleteButton)`
height: 36px;
width: 76px;
background-color: #fae6f5;
margin-top: 6px;
transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #a5f7ff;
  }
`;