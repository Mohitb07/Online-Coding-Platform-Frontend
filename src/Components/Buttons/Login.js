import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';
// import Spinner from '../ProbemList/Component/Spinner'

function Loginbutton() {
    
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
   
    console.log('button auth ' + isAuthenticated)
    if(isLoading){
        // return <span style={{color:'white', display:'flex', justifyContent:'center'}}><Spinner color='success'/></span>
        return ''
    }
    return (
        !isAuthenticated && (
        <Button style={{maxWidth:'150px', position:"absolute", top:'130%', left:"55%", transform:"translate(-110%,-50%)"}}  variant="contained"  onClick={()=>loginWithRedirect()}>
            Login
        </Button>        
        )
    )
}

export default Loginbutton
