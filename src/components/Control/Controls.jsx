import PropTypes from 'prop-types';
import { ControlWrapper, Button } from 'components/Control/Controls.styled';

const Controls = ({ id, onDeleteContact, onEditContact, isEdit }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={() => onEditContact()}>
        {isEdit ? 'Save' : 'Edit'}
      </Button>
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

export default Controls;
