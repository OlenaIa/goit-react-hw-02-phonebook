import { ContactItem } from "components/ContactItem/ContactItem"
import PropTypes from 'prop-types'
import { ContactListStyle } from "./ContactsList.styled"


export const ContactsList = ({ contacts, onDeleteContact }) => (
        <ContactListStyle>
            {contacts.map(contact => (
                <ContactItem name={contact.name} number={contact.number} id={contact.id} onDeleteContact={onDeleteContact} />
            ))}
        </ContactListStyle>
    );

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired,).isRequired).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};