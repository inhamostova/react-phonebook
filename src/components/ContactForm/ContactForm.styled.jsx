import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Error = styled(ErrorMessage)`
  color: red;

  font-size: 12px;
`;

export const InputBlock = styled.label`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;

  font-size: 20px;
`;
