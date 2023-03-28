import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  padding: 6px;
  width: 148px;
  align-self: center;
  background-color: #f7c8ea;
  border: 1px solid #fa89da;
  border-radius: 4px;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #a5f7ff;
  }
`;

