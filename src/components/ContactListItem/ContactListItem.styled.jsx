import styled from '@emotion/styled';

export const Item = styled.li`
  width: 500px;
  margin-bottom: 8px;
  padding: 20px;
  display: flex;
  gap: 16px;
  background-color: #72ade1;
  border-radius: 10px;
`;

export const Btn = styled.button`
  margin-left: auto;
  background-color: aliceblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 250ms ease-in,
    color 250ms ease-in;

  &:hover {
    background-color: #3a77c1;
    color: white;
  }
`;
