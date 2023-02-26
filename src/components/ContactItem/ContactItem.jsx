import { Component } from 'react';
import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';

import {
  Item,
  ContactTel,
  ContactName,
  ContactInfo,
  ContactEditInfo,
  ContactEditLabel,
  ContactEditInput,
} from 'components/ContactItem/ContactItem.styled';
import { Controls, ControlsSave } from 'components/Control/Controls';
import EditForm from 'components/EditForm';

class ContactItem extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
    isEdit: false,
  };

  handleEditContact = (name, number) => {
    if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    } else {
      this.setState({ isEdit: false });
      console.log('😍 I am from Edit Form');
      this.props.onEditContact({
        id: this.props.id,
        name: name ? name : this.state.name,
        number: number ? number : this.state.number,
      });
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, onDeleteContact } = this.props;
    const { isEdit, name, number } = this.state;
    return (
      <Item>
        {/* if contact saved show contact info */}

        {!isEdit && (
          <ContactInfo>
            <ContactName>
              <HiUser />
              {name}:
            </ContactName>

            <ContactTel>
              <BsTelephoneFill />
              {number}
            </ContactTel>
          </ContactInfo>
        )}

        {/* if contact is edit show edit form */}
        {isEdit && (
          <EditForm onEditContact={this.handleEditContact}>
            <ControlsSave
              id={id}
              onDeleteContact={onDeleteContact}
              onEditContact={this.handleEditContact}
              isEdit={isEdit}
            />
          </EditForm>
          // <ContactEditInfo>
          //   <ContactEditLabel>
          //     <HiUser fill="orangered" />
          //     <ContactEditInput
          //       type="text"
          //       name="name"
          //       value={name}
          //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //       onChange={this.handleChange}
          //     />
          //   </ContactEditLabel>

          //   <ContactEditLabel>
          //     <BsTelephoneFill fill="orangered" />
          //     <ContactEditInput
          //       type="tel"
          //       name="number"
          //       value={number}
          //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          //       onChange={this.handleChange}
          //     />
          //   </ContactEditLabel>
          // </ContactEditInfo>
        )}

        {!isEdit && (
          <Controls
            id={id}
            onDeleteContact={onDeleteContact}
            onEditContact={this.handleEditContact}
            isEdit={isEdit}
          />
        )}
      </Item>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};

export default ContactItem;
