import PropTypes from 'prop-types';
import React from 'react';
import { HiUser } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
// import {
//   FormStyled,
//   FormLabel,
//   Input,
//   Button,
//   CustomError,
// } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  EditFormStyled,
  EditInput,
  EditFormLabel,
  CustomError,
} from './EditForm.styled';
import { ControlsSave } from 'components/Control/Controls';

const initialValues = { name: '', number: '' };
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let userValidSchema = object({
  name: string().matches(nameRegExp, 'Name is not valid!').required(),
  number: string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .required(),
});

export const EditForm = ({ onEditContact, children }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    console.log('😎');
    onEditContact(name, number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userValidSchema}
      onSubmit={handleSubmit}
    >
      <EditFormStyled autoComplete="off">
        <EditFormLabel>
          <HiUser fill="green" />
          <EditInput
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage component={CustomError} name="name" />
        </EditFormLabel>
        <EditFormLabel>
          <BsTelephoneFill fill="green" />
          <EditInput
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage component={CustomError} name="number" />
        </EditFormLabel>
        {children}
      </EditFormStyled>
    </Formik>
  );
};

EditForm.propTypes = {
  //   onAddContact: PropTypes.func.isRequired,
};

export default EditForm;
