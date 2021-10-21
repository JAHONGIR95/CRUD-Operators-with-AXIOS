import React, { useState } from 'react'
import { Container } from 'reactstrap'
import AddContact from './components/AddContact'
import { ContactList } from './components/ContactList'
import { Header } from './components/Header'

function App() {

    const [contacts, setContacts] = useState([])

    const addHandler = (contact) => {
        setContacts([...contacts, contact])
        console.log(contact)
    }
    

    return (
        <div>
        <Header />
        <Container>
            <AddContact addHandler={addHandler} />
            <ContactList contacts={contacts} />
        </Container>
        </div>
        
    )
}

export default App
