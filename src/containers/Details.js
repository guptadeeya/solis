import React from 'react'
import './css/Details.css'
import { useNavigate } from 'react-router-dom'

function Details() {
  const navigate = useNavigate();
  return (
    <div className='details'>
      <ul className='list'>
        <li className='list-item' onClick={(e) => navigate("/")} >Home</li>
        <li className='list-item'>About</li>
        <li className='list-item' onClick={(e) => navigate("/Shop")}>Shop</li>
        <li className='list-item'>Contact</li>
      </ul>
    </div>
  )
}

export default Details