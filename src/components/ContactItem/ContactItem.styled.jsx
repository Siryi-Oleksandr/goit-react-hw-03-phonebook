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

export const Button = styled.button`
  margin-left: auto;
  padding: 5px;
  width: 80px;
  border: 1px solid #1664e2;
  border-radius: 4px;
  outline: none;
  font-size: 12px;

  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
    background-color: rgba(22, 144, 226, 0.737);
    border-color: transparent;
    color: #fff;
  }
`;
