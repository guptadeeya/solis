import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='coupon-code'>
                <p>
                    20% cashback for all users | Code: OGOFERS13
                </p>
            </div>

            <div className='user'>
                <div className='sign-in'><FontAwesomeIcon className='signin-icon' icon={faSignIn} />Sign In</div>
                <div className='sign-up'>Sign Up</div>
            </div>

        </div>
    )
}

export default Navbar
