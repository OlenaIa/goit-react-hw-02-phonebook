import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactsList = ({ contacts }) => {
    return (
        <>
        <h2>Contacts</h2>
        <ul>
                {contacts.map(contact => (
                    <ContactItem name={contact.name} number={contact.number} id={contact.id} />
                ))}
        </ul> 
        </>
)
}