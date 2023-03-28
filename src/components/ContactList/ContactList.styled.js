import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 340px;
  color: #545454;
  font-size: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  margin-top: 12px;
  min-width: 320px;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  padding: 4px;
  width: 60px;
  background-color:#f7c8ea ;
  border: 1px solid #fa89da;
  border-radius: 4px;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #a5f7ff;
  }
`;
