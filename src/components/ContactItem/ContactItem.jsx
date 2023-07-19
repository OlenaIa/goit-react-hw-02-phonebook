export const ContactItem = ({ name, number, id }) =>
    (<li key={id}>{name}: {number}</li>);