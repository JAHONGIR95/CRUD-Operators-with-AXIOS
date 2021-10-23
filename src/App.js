import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { AddContact } from './components/AddContact'
import { ContactList } from './components/ContactList'
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { CardDetails } from './components/CardDetails'
import { EditContact } from './EditContact'

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const dataToken = JSON.parse(localStorage.getItem('contacts'))
        if (dataToken) setContacts(dataToken)

    }, [])

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const addHandler = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }])
        console.log(contact)
    }

    const editHandler = (contact) => {
        console.log(contact);
        setContacts(contacts.map( eachEl => {
            return contact.id === eachEl.id ? {...contact} : eachEl
        }))
    }
    
    const removeHandler = (id) => {
        const leftContacts = contacts.filter(contact => contact.id !== id)
        setContacts(leftContacts)
    }

    return (
        <Router>
            <Header />
            <Container style={{maxWidth: '600px'}}>
                <Switch>
                    <Route exact path="/" render={(props) => (<ContactList {...props} contacts={contacts} clickHandler={removeHandler} />) } />
                    <Route path="/add" render={(props) => (<AddContact {...props} addHandler={addHandler} />)} />
                    <Route path="/contact/:id" component={CardDetails} />
                    <Route path="/edit" render={(props) => (<EditContact {...props} editHandler={editHandler} /> )}  />
                </Switch>
            </Container>
        </Router>

    )
}

export default App
