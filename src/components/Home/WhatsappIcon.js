import React from 'react';
import '../css/WhatsappIcon.css';
import Whatsapp from '../../images/Whatsapp1.png'

const WhatsAppIcon = () => {
  return (
    <a href="your-whatsapp-link" className="whatsapp-icon">
      {/* You can use an SVG or an image here */}
      <img className="whatsapp-icon-img" src={Whatsapp} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIcon;