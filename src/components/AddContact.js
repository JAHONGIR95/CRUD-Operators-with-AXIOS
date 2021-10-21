import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default class AddContact extends Component {
    state = {
        name: '',
        email: ''
    }
    
    add = (e) => {
        e.preventDefault()
        if (this.state.name === '' || this.state.email === '') {
            alert('All the fields should be filt')
            return
        }
        this.props.addHandler(this.state)
        this.setState({ name: '', email: '' })
    }

    render() {
        return (
            <div>
                <h2 className="my-3">Add Contant</h2>
                <Form onSubmit={this.add}>
                    <FormGroup className="mb-3">
                        <Label className="mb-2">Name</Label>
                        <Input type="text" placeholder="Name" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label className="mb-2">Email</Label>
                        <Input type="text" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    </FormGroup>
                    <Button className="btn" color="primary" type="Submit">Add</Button>
                </Form>
            </div>
        )
    }
}
