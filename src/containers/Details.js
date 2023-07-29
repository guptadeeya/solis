import React from 'react'
import './css/Details.css'

function Details() {
  return (
    <div className='details'>
      <ul className='list'>
        <li className='list-item'>Home</li>
        <li className='list-item'>About</li>
        <li className='list-item'>Shop</li>
        <li className='list-item'>Contact</li>
        {/* <li>Home</li> */}
      </ul>
    </div>
  )
}

export default Details