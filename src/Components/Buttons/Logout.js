import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function LogoutButton() {
    const { logout, isAuthenticated }  = useAuth0();
    return (
        isAuthenticated && (
        <a style={{color:'white'}} className='btn btn-default btn-danger' onClick={()=>logout()}>
            Logout
        </a>
        )
    )
}

export default LogoutButton
