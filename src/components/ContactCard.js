import React from 'react'
import user from '../images/user.png'
import '../components/main.css'
import { useHistory } from 'react-router'
// import { Link } from 'react-router-dom'


export const ContactCard = (props) => {
    const history = useHistory()
    const { id, name, email } = props.contact
    const { clickHandler } = props

    return (
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom" key={id}>
                <div className="d-flex align-items-center">
                    <img src={user} alt="" className="avatar me-3" />
                    <div className="content" style={{ cursor: 'pointer' }} onClick={() => history.push({pathname: `/contant/${id}`, state: { contact: props.contact }})}> 
                        {/* <Link to='/contact/1' style={{textDecoration: 'none', color: 'black'}}> */}
                            <div style={{ fontSize: '18px', fontWeight: '600'}} className="header">{name}</div>
                            <div>{email}</div>
                        {/* </Link> */}
                    </div>
                </div>
                <i onClick={()=> clickHandler(id)} style={{color: "red", fontSize: '20px'}} className="trash alternate outline icon"></i>
            </div>
    )
}
