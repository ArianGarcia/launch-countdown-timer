import facebookIcon from '../assets/images/icon-facebook.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer>
      <img src={facebookIcon} className="icon socialMedia" alt="facebook logo" />
      <img src={pinterestIcon} className="icon socialMedia" alt="pinterest logo" />
      <img src={instagramIcon} className="icon socialMedia" alt="instagram logo" />
    </footer>
  )
}
