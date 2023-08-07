import React from 'react'
import '../css/Features.css'
import quality from '../../images/quality-assurance1.jpg'
import fastDelivery from '../../images/Fast Delivery.jpg'
import discount from '../../images/discount.jpg'

function Features() {
    return (
        <div className='features-div'>
            <div className='feature'>
                <div><img className='icon' src = {quality} alt='quality'/></div>
                <div className='line'> 100% संतुष्टि की गारंटी</div>
            </div>

            <div className='feature'>
                <div><img className='icon' src = {fastDelivery} alt='Fast Delivery'/></div>
                <div className='line'>तेजी से वितरण</div>
            </div>

            <div className='feature'>
                <div><img className='icon' src = {discount} alt='Discount'/></div>
                <div className='line'>शानदार डिस्काउंट</div>
            </div>
        </div>
    )
}

export default Features
