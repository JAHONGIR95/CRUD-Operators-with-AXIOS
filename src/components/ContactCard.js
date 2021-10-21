import React from 'react'
import user from '../images/user.png'
import '../components/main.css'

export const ContactCard = ({ id, name, email }) => {
    return (
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom" key={id}>
                <div className="d-flex align-items-center">
                    <img src={user} alt="" className="avatar me-3" />
                    <div className="content">
                        <div style={{ fontSize: '18px', fontWeight: '600'}} className="header">{name}</div>
                        <div>{email}</div>
                    </div>
                </div>
                <i style={{color: "red", fontSize: '20px'}} className="trash alternate outline icon"></i>
            </div>
    )
}
