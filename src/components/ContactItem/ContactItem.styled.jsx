import styled from 'styled-components';

export const Item = styled.li`
  min-width: 380px;
  display: flex;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactInfo = styled.span`
  max-width: 245px;
`;
