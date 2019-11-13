import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contact = () => {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map(contact => (
                //<h3>{contact.name}</h3>
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </Fragment>
    );
}

export default Contact;