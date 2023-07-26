import React from 'react'
import './Header.css'
// import { FaSearch} from "react-icons/fa";
// import { FaShoppingBasket} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className='header'>

      <div className="logo">
        <div className="solis">SOLiS</div>
        <div className="cattle-feed">Cattle Feed</div>
      </div>

      <div className="search">
        <input className='search-input' type="text" placeholder='Search Items here...' />
        {/* searchIcon */}
        {/* <FaSearch/> */}
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
      </div>

      <div className="cart">
        {/* basketIcon */}
        <FontAwesomeIcon className='basket-icon' icon={faShoppingBasket} />
        <div className="my-cart">My Cart</div>
      </div>

    </div>
  )
}

export default Header