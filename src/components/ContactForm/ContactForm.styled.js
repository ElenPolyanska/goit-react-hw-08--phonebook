import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px;
  width: 300px;
  border: 1px solid #fa89da;
  border-radius: 4px;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const InputField = styled.input`
  margin-top: 8px;
 
  border: 1px solid #fa89da;
  border-radius: 4px;
  padding: 4px;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: 1px solid #4fe7f5;
    outline: none;
  }
`;

export const AddButton = styled.button`
  margin-top: 18px;
  padding: 4px;
  width: 148px;
  align-self: center;
  background-color: #f7c8ea ;
  border: 1px solid #fa89da;
  border-radius: 4px;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #a5f7ff;
  }
`;