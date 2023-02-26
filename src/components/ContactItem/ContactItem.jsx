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
      this.props.onEditContact({
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
          <ContactEditInfo>
            <ContactEditLabel>
              <HiUser fill="orangered" />
              <ContactEditInput
                name="name"
                onChange={this.handleChange}
                value={name}
                type="text"
              />
            </ContactEditLabel>

            <ContactEditLabel>
              <BsTelephoneFill fill="orangered" />
              <ContactEditInput
                name="number"
                onChange={this.handleChange}
                value={number}
                type="text"
              />
            </ContactEditLabel>
          </ContactEditInfo>
        )}

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
  onEditContact: PropTypes.func.isRequired,
};

export default ContactItem;
