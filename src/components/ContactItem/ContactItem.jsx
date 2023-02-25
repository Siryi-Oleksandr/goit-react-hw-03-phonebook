import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { Component } from 'react';

import { Item, ContactInfo } from 'components/ContactItem/ContactItem.styled';
import Controls from 'components/Control/Controls';

class ContactItem extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
    isEdit: false,
  };

  handleEditContact = () => {
    if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    } else {
      this.setState({ isEdit: false });
      this.props.editContact({
        id: this.props.id,
        name: this.state.name,
        number: this.state.number,
      });
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, onDeleteContact, onEditContact } = this.props;
    const { isEdit, name, number } = this.state;
    return (
      <Item>
        {/* {isEdit ? (
          <label>
            Name:
            <input
              name="name"
              onChange={this.handleChange}
              value={name}
              type="text"
            />
          </label>
        ) : (
          <p>Name: 😎</p>
        )}
        {isEdit ? (
          <label>
            Number:
            <input
              name="number"
              onChange={this.handleChange}
              value={number}
              type="text"
            />
          </label>
        ) : (
          <p>Number: 😍</p>
        )} */}
        <HiUser />
        <ContactInfo>
          {name}: {number}
        </ContactInfo>
        <Controls
          id={id}
          onDeleteContact={onDeleteContact}
          onEditContact={this.handleEditContact}
          isEdit={isEdit}
        />
      </Item>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
