import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import AddContact from './components/AddContact'
import { ContactList } from './components/ContactList'
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { CardDetails } from './components/CardDetails'

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

    const removeHandler = (id) => {
        const leftContacts = contacts.filter(contact => contact.id !== id)
        setContacts(leftContacts)
    }


    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/" render={(props) => (<ContactList {...props} contacts={contacts} clickHandler={removeHandler} />) } />
                    <Route path="/add" render={(props) => (<AddContact {...props} addHandler={addHandler} />)} />
                    <Route pat="/contact/:id" component={CardDetails} />
                </Switch>
            </Container>
        </Router>

    )
}

export default App
