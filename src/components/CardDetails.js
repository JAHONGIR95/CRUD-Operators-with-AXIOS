import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import user from '../images/cardImage.png'

export const CardDetails = (props) => {
    const { name, email } = props.location.state.contact
    
    return (
        <div className="main mt-5">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="text-center mt-4">
                <Link to='/'><Button color="primary">Back to Contact List</Button></Link>
            </div>
        </div>
    )
}
