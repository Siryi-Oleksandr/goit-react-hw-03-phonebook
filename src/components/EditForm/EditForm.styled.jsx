import styled from 'styled-components';
import { Form, Field } from 'formik';

export const EditFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const EditFormLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 12px;
`;
export const EditInput = styled(Field)`
  border: 1px solid orangered;
  border-radius: 4px;
  outline: 1px solid orangered;
`;

// export const Button = styled.button`
//   padding: 5px;
//   width: 200px;
//   border: 1px solid #1664e2;
//   border-radius: 4px;
//   outline: none;
//   font-size: 18px;
//   font-weight: 600;
//   cursor: pointer;

//   transition: all 250ms ease-in-out;

//   &:hover,
//   &:focus {
//     box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
//     background-color: rgba(22, 144, 226, 0.737);
//     border-color: transparent;
//     color: #fff;
//   }
// `;

export const CustomError = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 3px;
  width: 160px;
  border: 1px solid red;
  border-radius: 4px;
  color: red;
  font-size: 12px;
`;
