import PropTypes from 'prop-types';
import { ControlWrapper, Button } from 'components/Control/Controls.styled';

const Controls = ({ id, onDeleteContact, onEditContact, isEdit }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={() => console.log('😁')}>
        {isEdit ? 'Save' : 'Edit'}
      </Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  //   onDeleteContact: PropTypes.func.isRequired,
  //   onEditContact: PropTypes.func.isRequired,
};

export default Controls;
