import React from 'react';
import facebookIcon from '../images/icon-facebook.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';

export default function Footer() {
  return (
    <div id="footer">
      <img src={facebookIcon} className="icon socialMedia" alt="facebook logo" />
      <img src={pinterestIcon} className="icon socialMedia" alt="pinterest logo" />
      <img src={instagramIcon} className="icon socialMedia" alt="instagram logo" />
    </div>
  )
}
