import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const AddContact = ({addHandler}) => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const submitForm = (e) => {
        e.preventDefault()
        if (name === '' || email === '') {
            alert('All the fields should be filt')
            return
        }
        addHandler({ name, email })
        setName('')
        setEmail('')
        history.push('/')
    }
    
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="my-3">Add Contant</h2>
                <Button onClick={() => history.push('/')} color="danger">Cancel</Button>
            </div>

                 <Form onSubmit={submitForm}>
                     <FormGroup className="mb-3">
                         <Label className="mb-2">Name</Label>
                         <Input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                     </FormGroup>
                     <FormGroup className="mb-3">
                         <Label className="mb-2">Email</Label>
                         <Input type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                     </FormGroup>
                     <Button className="btn me-2" color="primary" type="Submit">Add</Button>
                 </Form>
        </div>
    )
}
