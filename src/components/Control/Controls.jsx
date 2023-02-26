import PropTypes from 'prop-types';
import { ControlWrapper, Button } from 'components/Control/Controls.styled';

export const Controls = ({ id, onDeleteContact, onEditContact, isEdit }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={() => onEditContact()}>
        Edit
      </Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

export const ControlsSave = ({
  id,
  onDeleteContact,
  onEditContact,
  isEdit,
}) => {
  return (
    <ControlWrapper>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

// export { Controls, ControlsSave };
