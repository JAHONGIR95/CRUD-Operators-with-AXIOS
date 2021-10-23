import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const EditContact = ( props ) => {

    const { editHandler } = props
    const detailInfo = props.location.state.contact
    const history = useHistory()
    const [name, setName] = useState(detailInfo.name)
    const [email, setEmail] = useState(detailInfo.email)
    
    const submitForm = (e) => {
        e.preventDefault()
        if (name === '' || email === '') {
            alert('All the fields should be filt')
            return
        }
        editHandler({id: detailInfo.id, name, email })
        setName('')
        setEmail('')
        history.push('/')
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="my-3">Edit Contant</h2>
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
                     <Button className="btn me-2" color="primary" type="Submit">Update</Button>
                 </Form>
        </div>
    )
}
