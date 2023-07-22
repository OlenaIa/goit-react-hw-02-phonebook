import { ButtonStyle } from 'components/App.styled';
import { ContactItemStyle } from './ContactItem.styled';
import PropTypes from 'prop-types'

export const ContactItem = ({ name, number, id, onDeleteContact }) =>
(<ContactItemStyle key={id}>
    <p>{name}: {number}</p>
    <ButtonStyle type="button" onClick={() => onDeleteContact(id)}>Delete</ButtonStyle>
</ContactItemStyle>);
    
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};