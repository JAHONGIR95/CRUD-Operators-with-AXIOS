import React from 'react'
import { ContactCard } from './ContactCard';

export const ContactList = ({ contacts }) => {
    console.log(contacts);
    return (
        <div  className="ui celled list border-top">
            {
                contacts.map( contact => (
                    <ContactCard key={contact.id} {...contact} />
                ))
            }
        </div>
    )
}
