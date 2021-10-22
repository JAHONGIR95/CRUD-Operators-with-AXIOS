import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'reactstrap';
import { ContactCard } from './ContactCard';

export const ContactList = ({ contacts, clickHandler }) => {
    const history = useHistory()
    return (
        <>
        <div className="d-flex justify-content-between mt-3">
            <h2>Contact List</h2>
            <Button onClick={() => history.push('/add')} color="primary">Add contact</Button>
        </div>
        <div className={`ui celled list ${contacts.length > 0 ? 'border-top' : ''}`}>
            {
                contacts.length > 0 ? (
                    <>
                        {
                            contacts.map(contact => (
                                <ContactCard key={contact.id} contact={contact} clickHandler={clickHandler} />
                                ))
                            }
                    </>
                ) : (<h1 className="text-center">No Contacts</h1>)
            }
        </div>
            </>
    )
}
