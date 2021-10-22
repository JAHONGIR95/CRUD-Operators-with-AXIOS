import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export const Header = () => {
    return (
        <Navbar color="light" light className="d-fixed justify-content-center border-bottom">
            <NavbarBrand href="/">Contact Manager</NavbarBrand>
        </Navbar>
    )
}
